import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('igreja')
class Igreja {

    @PrimaryGeneratedColumn('uuid')
    readonly id_igreja: string;

    @Column()
    nome_igreja: string;

    @Column()
    tipo_igreja: number;

    @Column()
    logo_igreja: string;

    @Column()
    matriz_igreja: number;

    @Column()
    qtd_membro_igreja: number;

    @Column()
    rua_igreja: string;

    @Column()
    bairro_igreja: string;

    @Column()
    numero_residencia: string;

    @Column()
    complemento: string;

    @Column()
    cidade_igreja: string;

    @Column()
    estado_igreja: string;
    
    @Column()
    pais_igreja: string;

    @CreateDateColumn()
    createdAt: Date;


};

export { Igreja };