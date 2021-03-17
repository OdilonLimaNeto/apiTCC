import {MigrationInterface, QueryRunner} from "typeorm";

export class Pais1615959807373 implements MigrationInterface {
    name = 'Pais1615959807373'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("CREATE TABLE `pais` (`id` varchar(36) NOT NULL, `name` varchar(255) NOT NULL, `createdAt` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), PRIMARY KEY (`id`)) ENGINE=InnoDB");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("DROP TABLE `pais`");
    }

}
