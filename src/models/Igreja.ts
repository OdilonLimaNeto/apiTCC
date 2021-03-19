import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Atividade } from "./Atividade";
import { Cidade } from "./Cidade";
import { Usuario } from "./Usuario";

@Entity('igreja')
class Igreja {

    @PrimaryGeneratedColumn('uuid')
    readonly id: string;

    @Column()
    name: string;

    @Column()
    typeChurch: number;

    @Column()
    motherChurch: number;

    @Column()
    amountChurchMembers: number;

    @Column()
    streetChurch: string;

    @Column()
    districtChurch: string;

    @Column()
    complement: string;

    @CreateDateColumn()
    createdAt: Date;

    @ManyToOne(() => Cidade, cidade => cidade.igrejas)
    cidade: Cidade;

    @OneToOne(() => Usuario, igreja => Igreja)
    @JoinColumn()
    usuario: Usuario;

    @OneToMany(() => Atividade, atividade => atividade.igreja)
    atividades: Atividade[];

};

export { Igreja };