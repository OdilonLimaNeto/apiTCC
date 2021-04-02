import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Atividade } from "./Atividade";
import { Usuario } from "./Usuario";

@Entity('igreja')
class Igreja {

    constructor(
        nomeIgreja: string, 
        tipoIgreja: boolean, 
        logoIgreja: string, 
        matrizIgreja: boolean, 
        qtdmembros: number, 
        rua: string, 
        bairro: string, 
        numero: number, 
        complemento: string,
        cidade: string,
        estado: string,
        pais: string,
        usuario: Usuario,
        ) {
            this.nome_igreja = nomeIgreja,
            this.tipo_igreja = tipoIgreja,
            this.logo_igreja = logoIgreja,
            this.matriz_igreja = matrizIgreja,
            this.qtd_membro_igreja = qtdmembros,
            this.rua_igreja = rua,
            this.bairro_igreja = bairro,
            this.numero_residencia = numero,
            this.complemento_residencia_igreja = complemento,
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
    cnpj_igreja: string

    @Column()
    tipo_igreja: boolean;

    @Column()
    logo_igreja: string;

    @Column()
    matriz_igreja: boolean;

    @ManyToOne(() => Igreja, igreja => igreja.filiais)
    igrejaMatriz: Igreja

    @OneToMany(() => Igreja, igreja => igreja.igrejaMatriz)
    filiais: Igreja[]

    @Column()
    qtd_membro_igreja: number;

    @Column()
    rua_igreja: string;

    @Column()
    bairro_igreja: string;

    @Column()
    cep_igreja: string;

    @Column()
    numero_residencia: number;

    @Column()
    complemento_residencia_igreja: string;

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