import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, OneToOne, PrimaryGeneratedColumn } from "typeorm";
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

    @ManyToOne(type => Cidade, igrejas => Igreja)
    cidade: Cidade;

    @OneToOne(type => Usuario, igreja => Igreja)
    @JoinColumn()
    usuario: Usuario;

};

export { Igreja };