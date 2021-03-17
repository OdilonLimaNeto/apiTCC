import {MigrationInterface, QueryRunner} from "typeorm";

export class Usuario1615996695672 implements MigrationInterface {
    name = 'Usuario1615996695672'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("CREATE TABLE `usuario` (`id` varchar(36) NOT NULL, `primaryName` varchar(255) NOT NULL, `secondName` varchar(255) NOT NULL, `email` varchar(255) NOT NULL, `password` varchar(255) NOT NULL, `rua` varchar(255) NOT NULL, `bairro` varchar(255) NOT NULL, `homeNumber` int NOT NULL, `complement` varchar(255) NOT NULL, `created_at` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), PRIMARY KEY (`id`)) ENGINE=InnoDB");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("DROP TABLE `usuario`");
    }

}
