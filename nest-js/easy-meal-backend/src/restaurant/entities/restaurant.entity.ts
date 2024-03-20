import { Daysopen } from "src/daysopen/entities/daysopen.entity";
import { Menu } from "src/menu/entities/menu.entity";
import { Orders } from "src/orders/entities/order.entity";
import { Column, Entity, JoinColumn, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Restaurant {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({type: "varchar", length: 100})
    name: string;

    @Column({type: "varchar", length: 100})
    address: string;

    @Column({type: "varchar", length: 100})
    city: string;

    @Column({type: "varchar", length: 100})
    cuisine: string;

    @Column()
    menu_id: number;

    @OneToOne(() => Menu, menu => menu.restaurant, {cascade: true})
    @JoinColumn({name: "menu_id"})
    menu: Menu;

    @OneToMany(() => Daysopen, daysopen => daysopen.restaurant)
    daysOpen: Daysopen[];
}
