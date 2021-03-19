import {MigrationInterface, QueryRunner} from "typeorm";

export class RelationIgrejaAtividades1616111742670 implements MigrationInterface {
    name = 'RelationIgrejaAtividades1616111742670'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `atividade` ADD `igrejaId` varchar(36) NULL");
        await queryRunner.query("ALTER TABLE `atividade` ADD CONSTRAINT `FK_842d667338e4f865ea968f8b119` FOREIGN KEY (`igrejaId`) REFERENCES `igreja`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `atividade` DROP FOREIGN KEY `FK_842d667338e4f865ea968f8b119`");
        await queryRunner.query("ALTER TABLE `atividade` DROP COLUMN `igrejaId`");
    }

}
