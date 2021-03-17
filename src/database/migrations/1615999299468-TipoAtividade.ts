import {MigrationInterface, QueryRunner} from "typeorm";

export class TipoAtividade1615999299468 implements MigrationInterface {
    name = 'TipoAtividade1615999299468'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("CREATE TABLE `tipo_atividade` (`id` varchar(36) NOT NULL, `name` varchar(255) NOT NULL, `activityModality` varchar(255) NOT NULL, `activityCollection` int NOT NULL, `description` varchar(255) NOT NULL, `createdAt` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), PRIMARY KEY (`id`)) ENGINE=InnoDB");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("DROP TABLE `tipo_atividade`");
    }

}
