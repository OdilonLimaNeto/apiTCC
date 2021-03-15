import { Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Cargo } from "./Cargo";


@Entity('usuario')
class Usuario {

    @PrimaryGeneratedColumn('uuid')
    readonly id: string;

    @Column()
    primaryuName: string;

    @Column()
    secondName: string;

    @Column()
    email: string;

    @Column()
    password: string;

    @Column()
    rua: string;

    @Column()
    bairro: string;

    @ManyToOne(type => Cargo, usuarios => Usuario)
    cargo: Cargo;

    @Column()
    homeNumber: number;

    @Column()
    complement: string;

    @CreateDateColumn()
    created_at: Date;
}

export { Usuario };