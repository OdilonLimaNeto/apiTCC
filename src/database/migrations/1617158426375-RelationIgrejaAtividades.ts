import {MigrationInterface, QueryRunner} from "typeorm";

export class RelationIgrejaAtividades1617158426375 implements MigrationInterface {
    name = 'RelationIgrejaAtividades1617158426375'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `atividade` ADD `ID_igreja` varchar(36) NULL");
        await queryRunner.query("ALTER TABLE `atividade` ADD CONSTRAINT `FK_8db2e1c0eea2857bbd7bf39c1b7` FOREIGN KEY (`ID_igreja`) REFERENCES `igreja`(`id_igreja`) ON DELETE NO ACTION ON UPDATE NO ACTION");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `atividade` DROP FOREIGN KEY `FK_8db2e1c0eea2857bbd7bf39c1b7`");
        await queryRunner.query("ALTER TABLE `atividade` DROP COLUMN `ID_igreja`");
    }

}
