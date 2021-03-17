import { Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Cargo } from "./Cargo";

@Entity('nivel_acesso')
class NivelAcesso {

    @PrimaryGeneratedColumn()
    readonly id: number;

    @Column()
    titleAcess: string;

    @CreateDateColumn()
    created_at: Date;

    @OneToMany(type => Cargo, nivelAcesso => nivelAcesso)
    cargos: Cargo[];
};


export { NivelAcesso };