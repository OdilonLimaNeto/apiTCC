import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { NivelAcesso } from "./NivelAcesso";
import { Usuario } from "./Usuario";

@Entity('cargo')
class Cargo {

    @PrimaryGeneratedColumn()
    readonly id: number;
    
    @Column()
    name: string;

    @Column()
    description: string;

    @OneToMany(type => Usuario, cargo => Cargo)
    usuarios: Usuario[];

    @ManyToOne(type => NivelAcesso, cargos => Cargo)
    nivelAcesso: NivelAcesso;

};

export {Cargo};