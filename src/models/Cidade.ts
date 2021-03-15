import { Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Estado } from "./Estado";


@Entity('cidade')
class Cidade {

    @PrimaryGeneratedColumn('uuid')
    readonly id: string;

    @Column()
    name: string;

    @CreateDateColumn()
    createdAt: Date;

    @ManyToOne(type => Estado, cidades => Cidade)
    estado: Estado;

};

export { Cidade };
