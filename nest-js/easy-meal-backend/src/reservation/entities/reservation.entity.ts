import { Orders } from "src/orders/entities/order.entity";
import { Column, Entity, ManyToMany, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { ReservationGruop as ReservationGroup } from "./reservation_group.enity";
import { Customer } from "src/customer/entities/customer.entity";

@Entity()
export class Reservation {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    date: Date;

    @Column()
    number_people: number;

    @Column()
    restaurant_id: number;

    @OneToMany(() => Orders, order => order.reservation)
    orders: Orders[];

    @OneToMany(() => ReservationGroup, group => group.reservation)
    reservation_group: ReservationGroup[];

    @ManyToMany(() => Customer, customer => customer.reservations)
    customers: Customer[];
}
