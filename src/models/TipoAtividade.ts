import { Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Atividade } from "./Atividade";


@Entity('tipo_atividade')
class TipoAtividade {

    @PrimaryGeneratedColumn('uuid')
    readonly id: string;

    @Column()
    name: string;

    @Column()
    activityModality: string;

    @Column()
    activityCollection: number;

    @Column()
    description: string;

    @CreateDateColumn()
    createdAt: Date;

    @OneToMany(type => Atividade, tipoAtividade => tipoAtividade)
    atividades: Atividade[];

};


export { TipoAtividade };