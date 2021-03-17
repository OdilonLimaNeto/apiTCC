import { Column, CreateDateColumn, Entity, ManyToOne, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Cargo } from "./Cargo";
import { Cidade } from "./Cidade";
import { Igreja } from "./Igreja";


@Entity('usuario')
class Usuario {

    @PrimaryGeneratedColumn('uuid')
    readonly id: string;

    @Column()
    primaryName: string;

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

    @OneToOne(type => Igreja, usuario => Usuario)
    igreja: Igreja;

    @ManyToOne(type => Cidade, usuarios => Usuario)
    cidade: Cidade;
};

export { Usuario };