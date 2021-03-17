import { Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Igreja } from "./Igreja";
import { TipoAtividade } from "./TipoAtividade";

@Entity('atividade')
class Atividade {

    @PrimaryGeneratedColumn('uuid')
    readonly id: string;

    @Column()
    nameActivity: string;

    @Column()
    dateActivity: Date;

    @Column({type: 'timestamp'})
    startTimeActivity: Date;

    @Column({type: 'timestamp'})
    finishTimeActivity: Date;

    @Column()
    amountVisitorsActivity: number;

    @Column()
    amountMembersActivity: number;

    @Column()
    themeActivity: string;

    @Column()
    responsibleActivity: string;

    @Column({type: 'float'})
    titheActivity: number;

    @Column({type: 'float'})
    ofertActivity: number;
    
    @Column()
    reconciliationNumberAcitivity: number;

    @Column()
    numberDecisionsActivity: number;

    @Column()
    activitySpeaker: string;

    @Column()
    observationActivity: string;

    @CreateDateColumn()
    createdAt: Date;

    @ManyToOne(type => TipoAtividade, atividades => Atividade)
    tipoAtividade: TipoAtividade;

    @ManyToOne(type => Igreja, atividades => Atividade)
    igreja: Igreja;

};

export { Atividade };