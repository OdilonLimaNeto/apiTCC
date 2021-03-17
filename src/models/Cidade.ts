import { Column, CreateDateColumn, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Estado } from "./Estado";
import { Igreja } from "./Igreja";
import { Usuario } from "./Usuario";


@Entity('cidade')
class Cidade {

    @PrimaryGeneratedColumn()
    readonly id: number;

    @Column()
    name: string;

    @CreateDateColumn()
    createdAt: Date;

    @ManyToOne(type => Estado, cidades => Cidade)
    estado: Estado;

    @OneToMany(type => Igreja, cidade => Cidade)
    igrejas: Igreja[];

    @OneToMany(type => Usuario, cidade => Cidade)
    usuarios: Usuario[];

};

export { Cidade };
