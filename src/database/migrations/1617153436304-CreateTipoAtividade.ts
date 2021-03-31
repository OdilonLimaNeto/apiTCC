import {MigrationInterface, QueryRunner} from "typeorm";

export class CreateTipoAtividade1617153436304 implements MigrationInterface {
    name = 'CreateTipoAtividade1617153436304'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("CREATE TABLE `tipo_atividade` (`id_tipo_atividade` varchar(36) NOT NULL, `nome_atividade` varchar(255) NOT NULL, `modalidade_atividade` varchar(255) NOT NULL, `gera_arrecadao_atividade` float NOT NULL, `descricao` varchar(255) NOT NULL, `createdAt` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), PRIMARY KEY (`id_tipo_atividade`)) ENGINE=InnoDB");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("DROP TABLE `tipo_atividade`");
    }

}
