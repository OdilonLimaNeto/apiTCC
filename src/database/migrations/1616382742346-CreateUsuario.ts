import {MigrationInterface, QueryRunner} from "typeorm";

export class CreateUsuario1616382742346 implements MigrationInterface {
    name = 'CreateUsuario1616382742346'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("CREATE TABLE `usuario` (`id_usuario` varchar(36) NOT NULL, `primeir_nome_usuario` varchar(255) NOT NULL, `segundo_nome_usuario` varchar(255) NOT NULL, `email_usuario` varchar(255) NOT NULL, `senha_usuario` varchar(255) NOT NULL, `foto_perfil_usuario` varchar(255) NOT NULL, `rua_usuario` varchar(255) NOT NULL, `bairro_usuario` varchar(255) NOT NULL, `numero_residencia_usuario` int NOT NULL, `complemento_residencia_usuario` varchar(255) NOT NULL, `cidade_usuario` varchar(255) NOT NULL, `estado_usuario` varchar(255) NOT NULL, `pais_usuario` varchar(255) NOT NULL, `created_at` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), PRIMARY KEY (`id_usuario`)) ENGINE=InnoDB");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("DROP TABLE `usuario`");
    }

}
