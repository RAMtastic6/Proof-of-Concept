import { MiddlewareConsumer, Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { RestaurantModule } from './restaurant/restaurant.module';
import { MenuModule } from './menu/menu.module';
import { FoodModule } from './food/food.module';
import { TypeOrmModule } from '@nestjs/typeorm';


@Module({
  imports: [RestaurantModule, MenuModule, FoodModule, 
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'postgres',
      port: 5432,
      username: 'postgres',
      password: 'postgres',
      database: 'easy-meal',
      autoLoadEntities: true,
      synchronize: true, //FIXME: NEVER USE THIS IN PRODUCTION
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
