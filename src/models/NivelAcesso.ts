import { Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Cargo } from "./Cargo";

@Entity('nivel_acesso')
class NivelAcesso {

    @PrimaryGeneratedColumn('uuid')
    readonly id: string;

    @Column()
    titleAcess: string;

    @CreateDateColumn()
    created_at: Date;

    @OneToMany(() => Cargo, cargo => cargo.nivelAcesso)
    cargos: Cargo[];
};


export { NivelAcesso };