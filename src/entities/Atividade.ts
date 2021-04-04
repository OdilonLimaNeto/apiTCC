import { Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn, Timestamp } from "typeorm";
import { Igreja } from "./Igreja";
import { TipoAtividade } from "./TipoAtividade";

@Entity('atividade')
class Atividade {

    constructor(
        data: Date,
        horarioInicio: string,
        horarioTermino: string,
        qtdVisitantes: number,
        qtdmembros: number,
        tema: string,
        responsavel: string,
        dizimo: number,
        oferta: number,
        numeroDecisoes: number,
        numeroReconciliacao: number,
        preleitor: string,
        observacao: string,
        tipoAtividade: TipoAtividade,
        igreja: Igreja
    ) {
        this.data_atividade = data,
        this.hora_inicio_atividade = horarioInicio,
        this.hora_termino_atividade = horarioTermino,
        this.qtd_vititantes_atividade = qtdVisitantes,
        this.qtd_membros_atividade = qtdmembros,
        this.tema_atividade = tema,
        this.responsavel_atividade = responsavel,
        this.dizimo_atividade = dizimo,
        this.oferta_atividade = oferta,
        this.numero_decisoes_atividade = numeroDecisoes,
        this.numero_reconciliacao_atividade = numeroReconciliacao,
        this.preleitor_Atividade = preleitor,
        this.observacao_atividade = observacao,
        this.tipoAtividade = tipoAtividade,
        this.igreja = igreja
    };

    @PrimaryGeneratedColumn('uuid')
    readonly id_atividade: string;

    @Column()
    data_atividade: Date;

    @Column({type: 'time'})
    hora_inicio_atividade: string;

    @Column({type: 'time'})
    hora_termino_atividade: string;

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