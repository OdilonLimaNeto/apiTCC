import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('atividade')
class Atividade {

    @PrimaryGeneratedColumn('uuid')
    readonly id_atividade: string;

    @Column()
    nome_atividade: string;

    @Column()
    data_atividade: Date;

    @Column({type: 'timestamp'})
    hora_inicio_atividade: Date;

    @Column({type: 'timestamp'})
    hora_termino_atividade: Date;

    @Column()
    qtd_vititantes_atividade: number;

    @Column()
    qtd_membros_atividade: number;

    @Column()
    tema_atividade: string;

    @Column()
    nome_responsavel_atividade: string;

    @Column({type: 'float'})
    total_dizimo_atividade: number;

    @Column({type: 'float'})
    total_oferta_atividade: number;
    
    @Column()
    total_reconciliacao_atividade: number;

    @Column()
    total_decisoes_atividade: number;

    @Column()
    preleitor_Atividade: string;

    @Column()
    observacao_atividade: string;

    @CreateDateColumn()
    createdAt: Date;
};

export { Atividade };