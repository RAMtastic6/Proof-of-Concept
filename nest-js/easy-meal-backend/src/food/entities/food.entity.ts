import { Menu } from "src/menu/entities/menu.entity";
import { Column, Entity, Generated, JoinColumn, OneToOne, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Food {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({type: "varchar", length: 100})
    name: string;

    @Column({type: "float"})
    price: number;

    @PrimaryColumn()
    menu_id: number;

    @OneToOne(() => Menu)
    @JoinColumn({ name: "menu_id" })
    menu: Menu;
}
