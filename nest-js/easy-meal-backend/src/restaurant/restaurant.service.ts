import { Injectable } from '@nestjs/common';
import { CreateRestaurantDto as RestaurantDto } from './dto/create-restaurant.dto';
import { UpdateRestaurantDto } from './dto/update-restaurant.dto';
import { Restaurant } from './entities/restaurant.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class RestaurantService {
  constructor(
    @InjectRepository(Restaurant)
    private restaurantRepo: Repository<Restaurant>,
  ){}

  async getFilteredRestaurants(query: {
        date?: string,
        nameRestaurant?: string, 
        city?: string, 
        cuisine?: string }): Promise<Restaurant[]> {
    const queryBuilder = this.restaurantRepo.createQueryBuilder('restaurant');
    if(query.date) {
      const dayOfWeek = ["domenica", "lunedì", "martedì", "mercoledì", "giovedì", "venerdì", "sabato"][new Date(query.date).getDay()];
      queryBuilder.andWhere(':dayOfWeek = ANY (restaurant.daysopen)', { dayOfWeek });
    }
    if (query.city) {
      queryBuilder.andWhere('restaurant.city = :city', { city: query.city });
    }
    if (query.cuisine) {
      queryBuilder.andWhere('restaurant.cuisine = :cuisine', { cuisine: query.cuisine });
    }
    if(query.nameRestaurant) {
      queryBuilder.andWhere('restaurant.name = :name', { name: query.nameRestaurant });
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
    return restaurant ?? {};
  }

  update(id: number, updateRestaurantDto: UpdateRestaurantDto) {
    return `This action updates a #${id} restaurant`;
  }

  remove(id: number) {
    return `This action removes a #${id} restaurant`;
  }
}
