import {MigrationInterface, QueryRunner} from "typeorm";

export class updateTableAtividade1617497741449 implements MigrationInterface {
    name = 'updateTableAtividade1617497741449'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("DROP INDEX `IDX_3645d284e0ac487e9dc732529e` ON `igreja`");
        await queryRunner.query("ALTER TABLE `atividade` DROP COLUMN `hora_inicio_atividade`");
        await queryRunner.query("ALTER TABLE `atividade` ADD `hora_inicio_atividade` time NOT NULL");
        await queryRunner.query("ALTER TABLE `atividade` DROP COLUMN `hora_termino_atividade`");
        await queryRunner.query("ALTER TABLE `atividade` ADD `hora_termino_atividade` time NOT NULL");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `atividade` DROP COLUMN `hora_termino_atividade`");
        await queryRunner.query("ALTER TABLE `atividade` ADD `hora_termino_atividade` timestamp NOT NULL");
        await queryRunner.query("ALTER TABLE `atividade` DROP COLUMN `hora_inicio_atividade`");
        await queryRunner.query("ALTER TABLE `atividade` ADD `hora_inicio_atividade` timestamp NOT NULL");
        await queryRunner.query("CREATE UNIQUE INDEX `IDX_3645d284e0ac487e9dc732529e` ON `igreja` (`usuarioIdUsuario`)");
    }

}
