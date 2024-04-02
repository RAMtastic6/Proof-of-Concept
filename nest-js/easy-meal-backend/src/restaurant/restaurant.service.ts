import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateRestaurantDto as RestaurantDto } from './dto/create-restaurant.dto';
import { UpdateRestaurantDto } from './dto/update-restaurant.dto';
import { Restaurant } from './entities/restaurant.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Days } from 'src/daysopen/entities/daysopen.entity';

@Injectable()
export class RestaurantService {
  constructor(
    @InjectRepository(Restaurant)
    private restaurantRepo: Repository<Restaurant>,
  ){}

  async getFilteredRestaurants(query: {
        date?: string,
        name?: string, 
        city?: string, 
        cuisine?: string }): Promise<Restaurant[]> {
    let queryBuilder = this.restaurantRepo.createQueryBuilder('restaurant');
    //FIXME: non funziona la data e il nome del ristorante
    if (query.date) {
      const dayOfWeek = ["domenica", "lunedì", "martedì", "mercoledì", "giovedì", "venerdì", "sabato"][new Date(query.date).getDay()];
      queryBuilder = queryBuilder.innerJoin('restaurant.daysOpen', 'daysOpen', 'daysOpen.dayOpen = :dayOfWeek', { dayOfWeek });
    }
    if (query.name) {
      queryBuilder = queryBuilder.andWhere('restaurant.name = :name', { name: query.name });
    }
    if (query.city) {
      queryBuilder = queryBuilder.andWhere('restaurant.city = :city', { city: query.city });
    }
    if (query.cuisine) {
      queryBuilder = queryBuilder.andWhere('restaurant.cuisine = :cuisine', { cuisine: query.cuisine.toLowerCase() });
    }
    return await queryBuilder.getMany();
  }

  create(createRestaurantDto: RestaurantDto) {
    return 'This action adds a new restaurant';
  }

  async findAll(): Promise<Restaurant[]> {
    const restaurants = this.restaurantRepo.find();
    return restaurants;
  }

  async findAllCuisines(): Promise<string[]> {
    const rest = await this.restaurantRepo.createQueryBuilder('restaurant')
      .select('DISTINCT cuisine')
      .getRawMany();
    return rest.map(rest => rest.cuisine);
  }

  async findAllCities(): Promise<string[]> {
    const rest = await this.restaurantRepo.createQueryBuilder('restaurant')
      .select('DISTINCT city')
      .getRawMany();
    return rest.map(rest => rest.city);
  }

  async findMenuByRestaurantId(id: number) {
    const restaurant = await this.restaurantRepo.findOne({where: {id}, relations: ['menu', 'menu.foods']});
    return restaurant?.menu ?? {};	
  }

  async findOne(id: number) {
    const restaurant = await this.restaurantRepo.findOne({where: {id}});
    return restaurant;
  }

  update(id: number, updateRestaurantDto: UpdateRestaurantDto) {
    return `This action updates a #${id} restaurant`;
  }

  remove(id: number) {
    return `This action removes a #${id} restaurant`;
  }

  //Ritorna i tavoli prenotati in un ristorante in una data specifica
  async getBookedTables(restaurantId: number, date: string) {
    const [, result] = await this.restaurantRepo.findAndCount({
      relations: ['reservations'], 
      where: {
        id: restaurantId, 
        reservations: {
          date: new Date(date)
        }
      }
    });
    /*const result = await this.restaurantRepo.createQueryBuilder('restaurant')
      .innerJoin('reservation', 'reservation', 'reservation.restaurant_id = restaurant.id')
      .where('restaurant.id = :restaurantId', { restaurantId })
      .andWhere('reservation.date = :date', { date })
      .getCount();*/
    return result;
  }

  async getMenuByReservationId(id: number) {
    const result = await this.restaurantRepo.findOne({ 
      where: { id }, 
      relations: ['restaurant.menu', 'restaurant.menu.foods'],
    });
    if(result == null) {
      throw new NotFoundException('Reservation not found');
    }
    return result;
  }
}
