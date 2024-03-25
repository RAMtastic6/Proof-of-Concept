import { Injectable } from '@nestjs/common';
import { CreateReservationDto } from './dto/create-reservation.dto';
import { UpdateReservationDto } from './dto/update-reservation.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Reservation } from './entities/reservation.entity';
import { Repository } from 'typeorm';
import { ReservationGruop } from './entities/reservation_group.enity';

@Injectable()
export class ReservationService {
  constructor(
    @InjectRepository(Reservation)
    private reservationRepository: Repository<Reservation>,
    @InjectRepository(ReservationGruop)
    private reservationGroupRepository: Repository<ReservationGruop>,
  ) {}
  
  async create(createReservationDto: CreateReservationDto) {
    console.log(createReservationDto.date);
    const reservation = this.reservationRepository.create({
      date: new Date(createReservationDto.date),
      number_people: createReservationDto.number_people,
      restaurant_id: createReservationDto.restaurant_id,
    });
    await this.reservationRepository.save(reservation);

    //TODO: colleghiamo il cliente alla prenotazione
    /*
    const group = this.reservationGroupRepository.create({
      reservation_id: reservation.id,
      customer_id: createReservationDto.customer_id,
    });
    await this.reservationGroupRepository.save(group);*/
    return true;
  }

  async addCustomer(params: {customer_id: number, reservation_id: number}) {
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
    return reservation ?? {};
  }

  update(id: number, updateReservationDto: UpdateReservationDto) {
    return `This action updates a #${id} reservation`;
  }

  remove(id: number) {
    return `This action removes a #${id} reservation`;
  }
}
