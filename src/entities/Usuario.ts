import { Column, CreateDateColumn, Entity, ManyToOne, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Cargo } from "./Cargo";
import { Igreja } from "./Igreja";

@Entity('usuario')
class Usuario {

    @PrimaryGeneratedColumn('uuid')
    readonly id_usuario: string;

    @Column()
    primeiro_nome_usuario: string;

    @Column()
    ultimo_nome_usuario: string;

    @Column()
    email_usuario: string;

    @Column()
    senha_usuario: string;

    @Column()
    cpf_usuario: string;
    
    @Column()
    foto_perfil_usuario: string;

    @Column()
    rua_usuario: string;

    @Column()
    bairro_usuario: string;

    @Column()
    cep_usuario: string;

    @Column()
    numero_residencia_usuario: number;

    @Column()
    complemento_residencia_usuario: string;

    @Column()
    cidade_usuario: string;

    @Column()
    estado_usuario: string;
    
    @Column()
    pais_usuario: string;

    @CreateDateColumn()
    created_at: Date;

    @OneToOne(() => Igreja, usuario => usuario.usuario)
    igreja: Igreja;

    @ManyToOne(() => Cargo, usuarios => usuarios.usuarios)
    cargo: Cargo;

};

export { Usuario };