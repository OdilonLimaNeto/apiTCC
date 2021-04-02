import {MigrationInterface, QueryRunner} from "typeorm";

export class RelationIgrejaMatrizFiliais1617400412468 implements MigrationInterface {
    name = 'RelationIgrejaMatrizFiliais1617400412468'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `igreja` ADD `ID_matriz_igreja` varchar(36) NULL");
        await queryRunner.query("ALTER TABLE `igreja` ADD CONSTRAINT `FK_550c66b0c9da272be6927cd4973` FOREIGN KEY (`ID_matriz_igreja`) REFERENCES `igreja`(`id_igreja`) ON DELETE NO ACTION ON UPDATE NO ACTION");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `igreja` DROP FOREIGN KEY `FK_550c66b0c9da272be6927cd4973`");
        await queryRunner.query("ALTER TABLE `igreja` DROP COLUMN `ID_matriz_igreja`");
    }

}
