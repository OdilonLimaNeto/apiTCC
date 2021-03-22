import {MigrationInterface, QueryRunner} from "typeorm";

export class CreateIgreja1616382625604 implements MigrationInterface {
    name = 'CreateIgreja1616382625604'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("CREATE TABLE `igreja` (`id_igreja` varchar(36) NOT NULL, `nome_igreja` varchar(255) NOT NULL, `tipo_igreja` int NOT NULL, `logo_igreja` varchar(255) NOT NULL, `matriz_igreja` int NOT NULL, `qtd_membro_igreja` int NOT NULL, `rua_igreja` varchar(255) NOT NULL, `bairro_igreja` varchar(255) NOT NULL, `numero_residencia` varchar(255) NOT NULL, `complemento` varchar(255) NOT NULL, `cidade_igreja` varchar(255) NOT NULL, `estado_igreja` varchar(255) NOT NULL, `pais_igreja` varchar(255) NOT NULL, `createdAt` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), PRIMARY KEY (`id_igreja`)) ENGINE=InnoDB");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("DROP TABLE `igreja`");
    }

}
