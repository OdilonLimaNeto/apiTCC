import {MigrationInterface, QueryRunner} from "typeorm";

export class RelationIgrejaFiliais1616554866526 implements MigrationInterface {
    name = 'RelationIgrejaFiliais1616554866526'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `igreja` ADD `igreja` varchar(255) NOT NULL");
        await queryRunner.query("ALTER TABLE `igreja` ADD `igrejaIdIgreja` varchar(36) NULL");
        await queryRunner.query("ALTER TABLE `igreja` ADD CONSTRAINT `FK_93d56a53878eda4c56c00a4b4df` FOREIGN KEY (`igrejaIdIgreja`) REFERENCES `igreja`(`id_igreja`) ON DELETE NO ACTION ON UPDATE NO ACTION");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `igreja` DROP FOREIGN KEY `FK_93d56a53878eda4c56c00a4b4df`");
        await queryRunner.query("ALTER TABLE `igreja` DROP COLUMN `igrejaIdIgreja`");
        await queryRunner.query("ALTER TABLE `igreja` DROP COLUMN `igreja`");
    }

}
