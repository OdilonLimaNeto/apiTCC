import { Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Atividade } from "./Atividade";


@Entity('tipo_atividade')
class TipoAtividade {

    @PrimaryGeneratedColumn('uuid')
    readonly id_tipo_atividade: string;

    @Column()
    nome_atividade: string;

    @Column()
    modalidade_atividade: string;

    @Column()
    gera_arrecadao_atividade: number;

    @Column()
    descricao: string;

    @CreateDateColumn()
    createdAt: Date;

    @OneToMany(() => Atividade, tipoAtividade => TipoAtividade)
    atividades: Atividade[]

};


export { TipoAtividade };