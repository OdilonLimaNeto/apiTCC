import { Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Cargo } from "./Cargo";

@Entity('nivel_acesso')
class NivelAcesso {

    @PrimaryGeneratedColumn('uuid')
    readonly id_nivel_acesso: string;

    @Column()
    titulo_acesso: string;

    @Column()
    tipo_acesso: number;

    @CreateDateColumn()
    created_at: Date;

    @OneToMany(() => Cargo, nivelAcesso => NivelAcesso)
    cargos: Cargo[]

};


export { NivelAcesso };