import { Customer } from "src/customer/entities/customer.entity";
import { Food } from "src/food/entities/food.entity";
import { Reservation } from "src/reservation/entities/reservation.entity";
import { Restaurant } from "src/restaurant/entities/restaurant.entity";
import { Column, Entity, JoinColumn, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";

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
    @JoinColumn({ name: 'food_id' })
    food: Food;

    @ManyToOne(() => Customer, customer => customer.orders)
    @JoinColumn({ name: 'customer_id' })
    customer: Customer;

    @ManyToOne(() => Reservation, reservation => reservation.orders)
    @JoinColumn({ name: 'reservation_id' })
    reservation: Reservation;
}
