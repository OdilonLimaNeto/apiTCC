import { Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Atividade } from "./Atividade";


@Entity('tipo_atividade')
class TipoAtividade {
    
    constructor(nommeAtividade: string, modalidadeAtividade: string, geraArrecadacao: number, descricao: string) {
        this.nome_atividade = nommeAtividade,
        this.modalidade_atividade = modalidadeAtividade,
        this.gera_arrecadao_atividade = geraArrecadacao,
        this.descricao = descricao
    }

    @PrimaryGeneratedColumn('uuid')
    readonly id_tipo_atividade: string;

    @Column()
    nome_atividade: string;

    @Column()
    modalidade_atividade: string;

    @Column({type: 'float'})
    gera_arrecadao_atividade: number;

    @Column()
    descricao: string;

    @CreateDateColumn()
    createdAt: Date;

    @OneToMany(() => Atividade, tipoAtividade => tipoAtividade.tipoAtividade)
    atividades: Atividade[]

};


export { TipoAtividade };