import {MigrationInterface, QueryRunner} from "typeorm";

export class CreateAtividade1617153497620 implements MigrationInterface {
    name = 'CreateAtividade1617153497620'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("CREATE TABLE `atividade` (`id_atividade` varchar(36) NOT NULL, `nome_atividade` varchar(255) NOT NULL, `data_atividade` datetime NOT NULL, `hora_inicio_atividade` timestamp NOT NULL, `hora_termino_atividade` timestamp NOT NULL, `qtd_vititantes_atividade` int NOT NULL, `qtd_membros_atividade` int NOT NULL, `tema_atividade` varchar(255) NOT NULL, `responsavel_atividade` varchar(255) NOT NULL, `dizimo_atividade` float NOT NULL, `oferta_atividade` float NOT NULL, `numero_reconciliacao_atividade` int NOT NULL, `numero_decisoes_atividade` int NOT NULL, `preleitor_Atividade` varchar(255) NOT NULL, `observacao_atividade` varchar(255) NOT NULL, `createdAt` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), PRIMARY KEY (`id_atividade`)) ENGINE=InnoDB");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("DROP TABLE `atividade`");
    }

}
