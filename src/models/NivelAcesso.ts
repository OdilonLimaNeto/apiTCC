import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from 'typeorm'

@Entity('nivel_acesso');
class NivelAcesso {
    
    @PrimaryGeneratedColumn("uuid")
    readonly id: string;

    @Column()
    titulo_acesso: string;

    @Column()
    tipo_acesso: number;

    @CreateDateColumn()
    created_at: Date;
};

export { NivelAcesso };