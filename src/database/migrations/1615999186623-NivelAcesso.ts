import {MigrationInterface, QueryRunner} from "typeorm";

export class NivelAcesso1615999186623 implements MigrationInterface {
    name = 'NivelAcesso1615999186623'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("CREATE TABLE `nivel_acesso` (`id` varchar(36) NOT NULL, `titleAcess` varchar(255) NOT NULL, `created_at` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), PRIMARY KEY (`id`)) ENGINE=InnoDB");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("DROP TABLE `nivel_acesso`");
    }

}
