import {MigrationInterface, QueryRunner} from "typeorm";

export class RelationIgrejaFiliais1617159459451 implements MigrationInterface {
    name = 'RelationIgrejaFiliais1617159459451'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `igreja` ADD `ID_igreja` varchar(36) NULL");
        await queryRunner.query("ALTER TABLE `igreja` ADD CONSTRAINT `FK_93d56a53878eda4c56c00a4b4df` FOREIGN KEY (`ID_igreja`) REFERENCES `igreja`(`id_igreja`) ON DELETE NO ACTION ON UPDATE NO ACTION");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `igreja` DROP FOREIGN KEY `FK_93d56a53878eda4c56c00a4b4df`");
        await queryRunner.query("ALTER TABLE `atividade` DROP COLUMN `ID_igreja`");
    }

}