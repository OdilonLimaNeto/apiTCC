import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Atividade } from "./Atividade";
import { Usuario } from "./Usuario";

@Entity('igreja')
class Igreja {

    constructor(
        nomeIgreja: string, 
        tipoIgreja: number, 
        logoIgreja: string, 
        matrizIgreja: boolean, 
        qtdmembros: number, 
        rua: string, 
        bairro: string, 
        numero: string, 
        complemento: string,
        cidade: string,
        estado: string,
        pais: string,
        usuario: Usuario
        ) {
            this.nome_igreja = nomeIgreja,
            this.tipo_igreja = tipoIgreja,
            this.logo_igreja = logoIgreja,
            this.matriz_igreja = matrizIgreja,
            this.qtd_membro_igreja = qtdmembros,
            this.rua_igreja = rua,
            this.bairro_igreja = bairro,
            this.numero_residencia = numero,
            this.complemento = complemento,
            this.cidade_igreja = cidade,
            this.estado_igreja = estado,
            this.pais_igreja = pais,
            this.usuario = usuario
    }

    @PrimaryGeneratedColumn('uuid')
    readonly id_igreja: string;

    @Column()
    nome_igreja: string;

    @Column()
    tipo_igreja: number;

    @Column()
    logo_igreja: string;

    @Column()
    matriz_igreja: boolean;

    @ManyToOne(() => Igreja, filial => Igreja)
    @Column('uuid')
    igreja: Igreja

    @OneToMany(() => Igreja, igreja => Igreja)
    filial: Igreja[]

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

    @OneToOne(() => Usuario, igreja => igreja.igreja)
    @JoinColumn()
    usuario: Usuario;

    @OneToMany(() => Atividade, igreja => igreja.igreja)
    atividades: Atividade[];
};

export { Igreja };