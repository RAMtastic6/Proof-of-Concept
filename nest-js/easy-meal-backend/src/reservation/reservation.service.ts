import { HttpException, Injectable, NotFoundException } from '@nestjs/common';
import { CreateReservationDto } from './dto/create-reservation.dto';
import { UpdateReservationDto } from './dto/update-reservation.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Reservation } from './entities/reservation.entity';
import { Repository } from 'typeorm';
import { ReservationGruop } from './entities/reservation_group.enity';
import { RestaurantService } from 'src/restaurant/restaurant.service';

@Injectable()
export class ReservationService {
  constructor(
    @InjectRepository(Reservation)
    private reservationRepository: Repository<Reservation>,
    @InjectRepository(ReservationGruop)
    private reservationGroupRepository: Repository<ReservationGruop>,
    private restaurantService: RestaurantService,
  ) {}
  
  async create(createReservationDto: CreateReservationDto) {
    const restaurant = await this.restaurantService.findOne(createReservationDto.restaurant_id);
    if(restaurant == null) {
      throw new NotFoundException('Restaurant not found');
    }
    const booked = await this.restaurantService.getBookedTables(createReservationDto.restaurant_id, createReservationDto.date);
    if(booked >= restaurant.tables) {
      throw new HttpException('No tables available', 400);
    }
    if(Date.now() > new Date(createReservationDto.date).getTime()) {
      throw new HttpException('Invalid date', 400);
    }
    const reservation = this.reservationRepository.create({
      date: new Date(createReservationDto.date),
      number_people: createReservationDto.number_people,
      restaurant_id: createReservationDto.restaurant_id,
    });
    await this.reservationRepository.save(reservation);
    const group = this.reservationGroupRepository.create({
      reservation_id: reservation.id,
      customer_id: createReservationDto.customer_id,
    });
    await this.reservationGroupRepository.save(group);
    return true;
  }

  async addCustomer(params: {customer_id: number, reservation_id: number}) {
    const reservation = await this.reservationRepository.findOne({ where: { id: params.reservation_id } });
    if(reservation == null) {
      throw new NotFoundException('Reservation not found');
    }
    const group = this.reservationGroupRepository.create({
      reservation_id: params.reservation_id,
      customer_id: params.customer_id,
    });
    await this.reservationGroupRepository.save(group);
    return true;
  }

  async findAll(): Promise<Reservation[]> {
    const reservations = await this.reservationRepository.find();
    return reservations;
  }

  async findOne(id: number) {
    const reservation = await this.reservationRepository.findOne({ where: { id } });
    return reservation;
  }

  update(id: number, updateReservationDto: UpdateReservationDto) {
    return `This action updates a #${id} reservation`;
  }

  remove(id: number) {
    return `This action removes a #${id} reservation`;
  }
}
