import { Orders } from "src/orders/entities/order.entity";
import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { ReservationGruop } from "./reservation_group.enity";

@Entity()
export class Reservation {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    date: string;

    @Column()
    number_people: number;

    @Column()
    restaurant_id: number;

    @OneToMany(() => Orders, order => order.restaurant)
    orders: Orders[];

    @OneToMany(() => ReservationGruop, group => group.reservation)
    reservation_group: ReservationGruop[];
}
