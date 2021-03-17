import { Column, CreateDateColumn, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from "typeorm";
// import { Cidade } from "./Cidade";
import { Pais } from "./Pais";



@Entity('estado')
class Estado {

    @PrimaryGeneratedColumn('uuid')
    readonly id: string;

    @Column()
    name: string;

    @Column()
    ufEstado: string;

    @CreateDateColumn()
    createdAt: Date;

    @ManyToOne( type => Pais, estados => Estado)
    pais: Pais;

    // @OneToMany(type => Cidade, estado => Estado)
    // cidades: Cidade[];
};

export { Estado };
