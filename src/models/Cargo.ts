import { Column, CreateDateColumn, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { NivelAcesso } from "./NivelAcesso";
import { Usuario } from "./Usuario";

@Entity('cargo')
class Cargo {

    @PrimaryGeneratedColumn('uuid')
    readonly id_cargo: string;
    
    @Column()
    nome_cargo: string;

    @Column()
    descricao: string;

    @CreateDateColumn()
    createdAt: Date;

    @OneToMany(() => Usuario, cargo => Cargo)
    usuarios: Usuario[]

    @ManyToOne(() => NivelAcesso, cargos => Cargo)
    nivelAcesso: NivelAcesso;

};

export {Cargo};