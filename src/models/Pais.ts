import { Column, CreateDateColumn, Entity, OneToMany, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";
import { Estado } from "./Estado";


@Entity('pais')
class Pais {

    @PrimaryGeneratedColumn()
    readonly id: number;

    @Column()
    name: string;

    @CreateDateColumn()
    createdAt: Date;

    @OneToMany(type => Estado, pais => Pais)
    estados: Estado[];
};

export { Pais };

