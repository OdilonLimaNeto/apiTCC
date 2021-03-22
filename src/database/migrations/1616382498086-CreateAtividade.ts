import {MigrationInterface, QueryRunner} from "typeorm";

export class CreateAtividade1616382498086 implements MigrationInterface {
    name = 'CreateAtividade1616382498086'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("CREATE TABLE `atividade` (`id_atividade` varchar(36) NOT NULL, `nome_atividade` varchar(255) NOT NULL, `data_atividade` datetime NOT NULL, `hora_inicio_atividade` timestamp NOT NULL, `hora_termino_atividade` timestamp NOT NULL, `qtd_vititantes_atividade` int NOT NULL, `qtd_membros_atividade` int NOT NULL, `tema_atividade` varchar(255) NOT NULL, `nome_responsavel_atividade` varchar(255) NOT NULL, `total_dizimo_atividade` float NOT NULL, `total_oferta_atividade` float NOT NULL, `total_reconciliacao_atividade` int NOT NULL, `total_decisoes_atividade` int NOT NULL, `preleitor_Atividade` varchar(255) NOT NULL, `observacao_atividade` varchar(255) NOT NULL, `createdAt` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), PRIMARY KEY (`id_atividade`)) ENGINE=InnoDB");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("DROP TABLE `atividade`");
    }

}
