import {MigrationInterface, QueryRunner} from "typeorm";

export class CreateNivelAcesso1616382654124 implements MigrationInterface {
    name = 'CreateNivelAcesso1616382654124'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("CREATE TABLE `nivel_acesso` (`id_nivel_acesso` varchar(36) NOT NULL, `titulo_acesso` varchar(255) NOT NULL, `tipo_acesso` int NOT NULL, `created_at` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), PRIMARY KEY (`id_nivel_acesso`)) ENGINE=InnoDB");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("DROP TABLE `nivel_acesso`");
    }

}
