import {MigrationInterface, QueryRunner} from "typeorm";

export class Estado1615960340011 implements MigrationInterface {
    name = 'Estado1615960340011'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("CREATE TABLE `estado` (`id` varchar(36) NOT NULL, `name` varchar(255) NOT NULL, `ufEstado` varchar(255) NOT NULL, `createdAt` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), PRIMARY KEY (`id`)) ENGINE=InnoDB");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("DROP TABLE `estado`");
    }

}
