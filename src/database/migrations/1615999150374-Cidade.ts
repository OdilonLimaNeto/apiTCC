import {MigrationInterface, QueryRunner} from "typeorm";

export class Cidade1615999150374 implements MigrationInterface {
    name = 'Cidade1615999150374'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("CREATE TABLE `cidade` (`id` varchar(36) NOT NULL, `name` varchar(255) NOT NULL, `createdAt` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), PRIMARY KEY (`id`)) ENGINE=InnoDB");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("DROP TABLE `cidade`");
    }

}
