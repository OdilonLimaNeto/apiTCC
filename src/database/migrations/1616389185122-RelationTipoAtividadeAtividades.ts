import {MigrationInterface, QueryRunner} from "typeorm";

export class RelationTipoAtividadeAtividades1616389185122 implements MigrationInterface {
    name = 'RelationTipoAtividadeAtividades1616389185122'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `atividade` ADD `tipoAtividadeIdTipoAtividade` varchar(36) NULL");
        await queryRunner.query("ALTER TABLE `atividade` ADD CONSTRAINT `FK_a8ccfba0fce612efe8f6c7aee87` FOREIGN KEY (`tipoAtividadeIdTipoAtividade`) REFERENCES `tipo_atividade`(`id_tipo_atividade`) ON DELETE NO ACTION ON UPDATE NO ACTION");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `atividade` DROP FOREIGN KEY `FK_a8ccfba0fce612efe8f6c7aee87`");
        await queryRunner.query("ALTER TABLE `atividade` DROP COLUMN `tipoAtividadeIdTipoAtividade`");
    }

}
