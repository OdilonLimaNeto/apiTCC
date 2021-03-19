import {MigrationInterface, QueryRunner} from "typeorm";

export class RelationTipoAtividadeAtividades1616112174113 implements MigrationInterface {
    name = 'RelationTipoAtividadeAtividades1616112174113'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `atividade` ADD `tipoAtividadeId` varchar(36) NULL");
        await queryRunner.query("ALTER TABLE `atividade` ADD CONSTRAINT `FK_a0245a630daf770118a1206916c` FOREIGN KEY (`tipoAtividadeId`) REFERENCES `tipo_atividade`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `atividade` DROP FOREIGN KEY `FK_a0245a630daf770118a1206916c`");
        await queryRunner.query("ALTER TABLE `atividade` DROP COLUMN `tipoAtividadeId`");
    }

}
