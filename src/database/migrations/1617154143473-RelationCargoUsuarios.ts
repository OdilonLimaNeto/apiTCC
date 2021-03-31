import {MigrationInterface, QueryRunner} from "typeorm";

export class RelationCargoUsuarios1617154143473 implements MigrationInterface {
    name = 'RelationCargoUsuarios1617154143473'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `usuario` ADD `ID_cargo` varchar(36) NULL");
        await queryRunner.query("ALTER TABLE `usuario` ADD CONSTRAINT `FK_6c2d05e47988043b55abfe53999` FOREIGN KEY (`ID_cargo`) REFERENCES `cargo`(`id_cargo`) ON DELETE NO ACTION ON UPDATE NO ACTION");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `usuario` DROP FOREIGN KEY `FK_6c2d05e47988043b55abfe53999`");
        await queryRunner.query("ALTER TABLE `usuario` DROP COLUMN `ID_cargo`");
    }

}
