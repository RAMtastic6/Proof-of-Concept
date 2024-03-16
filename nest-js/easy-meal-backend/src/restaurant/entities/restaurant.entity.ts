import { Menu } from "src/menu/entities/menu.entity";
import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";

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

    @OneToOne(() => Menu)
    @JoinColumn({ name: "menu_id" })
    menu: Menu;
}
