import { Restaurant } from "src/restaurant/entities/restaurant.entity";
import { Column, Entity, JoinColumn, ManyToMany, ManyToOne, OneToOne, PrimaryColumn } from "typeorm";

enum Days {
    MONDAY = 'lunedì',
    TUESDAY = 'martedì',
    WEDNESDAY = 'mercoledì',
    THURSDAY = 'giovedì',
    FRIDAY = 'venerdì',
    SATURDAY = 'sabato',
    SUNDAY = 'domenica'
}

@Entity()
export class Daysopen {
    @PrimaryColumn({name: 'restaurant_id'})
    restaurantId: number;

    @PrimaryColumn({name: 'day_open', enum: Days, type: 'enum'})
    dayOpen: Days;

    @PrimaryColumn({name: 'opening', type: 'time'})
    opening: string;

    @Column({name: 'closing', type: 'time'})
    closing: string;

    @ManyToOne(() => Restaurant, ristorante => ristorante.daysOpen)
    restaurant: Restaurant;
}
