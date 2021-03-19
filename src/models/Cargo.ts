import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { NivelAcesso } from "./NivelAcesso";
import { Usuario } from "./Usuario";

@Entity('cargo')
class Cargo {

    @PrimaryGeneratedColumn('uuid')
    readonly id: string;
    
    @Column()
    name: string;

    @Column()
    description: string;

    @OneToMany(() => Usuario, usuario => usuario.cargo)
    usuarios: Usuario[];

    @ManyToOne(() => NivelAcesso, nivelacesso => nivelacesso.cargos)
    nivelAcesso: NivelAcesso;

};

export {Cargo};