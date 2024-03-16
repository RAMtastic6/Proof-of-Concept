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
        nameRestaurant?: string, 
        city?: string, 
        cuisine?: string }): Promise<Restaurant[]> {
    const queryBuilder = this.restaurantRepo.createQueryBuilder('restaurant');
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

  findAll() {
    return `This action returns all restaurant`;
  }

  findOne(id: number) {
    return `This action returns a #${id} restaurant`;
  }

  update(id: number, updateRestaurantDto: UpdateRestaurantDto) {
    return `This action updates a #${id} restaurant`;
  }

  remove(id: number) {
    return `This action removes a #${id} restaurant`;
  }
}
