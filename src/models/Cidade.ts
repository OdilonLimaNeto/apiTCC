import { Column, CreateDateColumn, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
 import { Estado } from "./Estado";
import { Igreja } from "./Igreja";
import { Usuario } from "./Usuario";


@Entity('cidade')
class Cidade {

    @PrimaryGeneratedColumn('uuid')
    readonly id: string;

    @Column()
    name: string;

    @CreateDateColumn()
    createdAt: Date;

    @ManyToOne(() => Estado, estado => estado.cidades)
    estado: Estado;

    @OneToMany(() => Igreja, igreja => igreja.cidade)
    igrejas: Igreja[];

    @OneToMany(() => Usuario, usuario => usuario.cidade)
    usuarios: Usuario[];

};

export { Cidade };
