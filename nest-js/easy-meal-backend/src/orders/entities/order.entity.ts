import { Customer } from "src/customer/entities/customer.entity";
import { Food } from "src/food/entities/food.entity";
import { Reservation } from "src/reservation/entities/reservation.entity";
import { Restaurant } from "src/restaurant/entities/restaurant.entity";
import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Orders {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    customer_id: number;

    @Column()
    restaurant_id: number;

    @Column()
    food_id: number;

    @Column({name: 'number', default: 1})
    quantity: number;

    @ManyToOne(() => Food, food => food.orders)
    food: Food;

    @ManyToOne(() => Customer, customer => customer.orders)
    customer: Customer;

    @ManyToOne(() => Reservation, reservation => reservation.orders)
    restaurant: Reservation;
}
