import {MigrationInterface, QueryRunner} from "typeorm";

export class CreateCargo1616382567140 implements MigrationInterface {
    name = 'CreateCargo1616382567140'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("CREATE TABLE `cargo` (`id_cargo` varchar(36) NOT NULL, `nome_cargo` varchar(255) NOT NULL, `descricao` varchar(255) NOT NULL, `createdAt` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), PRIMARY KEY (`id_cargo`)) ENGINE=InnoDB");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("DROP TABLE `cargo`");
    }

}
