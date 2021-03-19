import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, OneToOne, PrimaryGeneratedColumn } from "typeorm";
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

    @ManyToOne(() => Cargo, cargo => cargo.usuarios)
    cargo: Cargo;

    @Column()
    homeNumber: number;

    @Column()
    complement: string;

    @CreateDateColumn()
    created_at: Date;

    @OneToOne(() => Igreja, usuario => Usuario)
    igreja: Igreja;

    @ManyToOne(() => Cidade, cidade => cidade.usuarios)
    cidade: Cidade;
};

export { Usuario };