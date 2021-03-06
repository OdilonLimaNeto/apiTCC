import { Column, CreateDateColumn, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { NivelAcesso } from "./NivelAcesso";
import { Usuario } from "./Usuario";

@Entity('cargo')
class Cargo {

    constructor(nome_cargo: string, descricao: string, nivelacesso: NivelAcesso) {
        this.descricao = descricao,
        this.nome_cargo = nome_cargo,
        this.nivelAcesso = nivelacesso
    }
    
    @PrimaryGeneratedColumn('uuid')
    readonly id_cargo: string;
    
    @Column()
    nome_cargo: string;

    @Column()
    descricao: string;

    @CreateDateColumn()
    createdAt: Date;

    @OneToMany(() => Usuario, cargo => cargo.cargo)
    usuarios: Usuario[]

    @ManyToOne(() => NivelAcesso, cargos => cargos.cargos)
    nivelAcesso: NivelAcesso;

};

export {Cargo};