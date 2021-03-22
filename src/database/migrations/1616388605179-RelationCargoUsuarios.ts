import {MigrationInterface, QueryRunner} from "typeorm";

export class RelationCargoUsuarios1616388605179 implements MigrationInterface {
    name = 'RelationCargoUsuarios1616388605179'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("DROP INDEX `IDX_3645d284e0ac487e9dc732529e` ON `igreja`");
        await queryRunner.query("ALTER TABLE `usuario` ADD `cargoIdCargo` varchar(36) NULL");
        await queryRunner.query("ALTER TABLE `usuario` ADD CONSTRAINT `FK_6c2d05e47988043b55abfe53999` FOREIGN KEY (`cargoIdCargo`) REFERENCES `cargo`(`id_cargo`) ON DELETE NO ACTION ON UPDATE NO ACTION");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `usuario` DROP FOREIGN KEY `FK_6c2d05e47988043b55abfe53999`");
        await queryRunner.query("ALTER TABLE `usuario` DROP COLUMN `cargoIdCargo`");
        await queryRunner.query("CREATE UNIQUE INDEX `IDX_3645d284e0ac487e9dc732529e` ON `igreja` (`usuarioIdUsuario`)");
    }

}
