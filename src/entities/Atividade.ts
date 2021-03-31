import { Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Igreja } from "./Igreja";
import { TipoAtividade } from "./TipoAtividade";

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
    responsavel_atividade: string;

    @Column({type: 'float'})
    dizimo_atividade: number;

    @Column({type: 'float'})
    oferta_atividade: number;
    
    @Column()
    numero_reconciliacao_atividade: number;

    @Column()
    numero_decisoes_atividade: number;

    @Column()
    preleitor_Atividade: string;

    @Column()
    observacao_atividade: string;

    @CreateDateColumn()
    createdAt: Date;

    @ManyToOne(() => TipoAtividade, atividades => atividades.atividades)
    tipoAtividade: TipoAtividade;

    @ManyToOne(() => Igreja, atividades => atividades.atividades)
    igreja: Igreja;
};

export { Atividade };