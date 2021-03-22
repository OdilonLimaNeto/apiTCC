import {MigrationInterface, QueryRunner} from "typeorm";

export class RelationIgrejaAtividades1616389376547 implements MigrationInterface {
    name = 'RelationIgrejaAtividades1616389376547'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `atividade` ADD `igrejaIdIgreja` varchar(36) NULL");
        await queryRunner.query("ALTER TABLE `atividade` ADD CONSTRAINT `FK_8db2e1c0eea2857bbd7bf39c1b7` FOREIGN KEY (`igrejaIdIgreja`) REFERENCES `igreja`(`id_igreja`) ON DELETE NO ACTION ON UPDATE NO ACTION");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `atividade` DROP FOREIGN KEY `FK_8db2e1c0eea2857bbd7bf39c1b7`");
        await queryRunner.query("ALTER TABLE `atividade` DROP COLUMN `igrejaIdIgreja`");
    }

}
