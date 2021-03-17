import {MigrationInterface, QueryRunner} from "typeorm";

export class Cargo1615999005395 implements MigrationInterface {
    name = 'Cargo1615999005395'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("CREATE TABLE `cargo` (`id` varchar(36) NOT NULL, `name` varchar(255) NOT NULL, `description` varchar(255) NOT NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("DROP TABLE `cargo`");
    }

}
