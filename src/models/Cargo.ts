import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('cargo')
class Cargo {

    @PrimaryGeneratedColumn('uuid')
    readonly id_cargo: string;
    
    @Column()
    nome_cargo: string;

    @Column()
    descricao: string;

    @CreateDateColumn()
    createdAt: Date;

};

export {Cargo};