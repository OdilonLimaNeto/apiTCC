import {MigrationInterface, QueryRunner} from "typeorm";

export class RelationIgrejaUsuario1616111150760 implements MigrationInterface {
    name = 'RelationIgrejaUsuario1616111150760'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("DROP INDEX `IDX_16cc7cdd02f0b6de459f8165f3` ON `usuario`");
        await queryRunner.query("ALTER TABLE `usuario` DROP COLUMN `igrejaId`");
        await queryRunner.query("ALTER TABLE `igreja` ADD `usuarioId` varchar(36) NULL");
        await queryRunner.query("ALTER TABLE `igreja` ADD UNIQUE INDEX `IDX_d7bbcf71f4b21d22618cbb3adf` (`usuarioId`)");
        await queryRunner.query("CREATE UNIQUE INDEX `REL_d7bbcf71f4b21d22618cbb3adf` ON `igreja` (`usuarioId`)");
        await queryRunner.query("ALTER TABLE `igreja` ADD CONSTRAINT `FK_d7bbcf71f4b21d22618cbb3adf2` FOREIGN KEY (`usuarioId`) REFERENCES `usuario`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `igreja` DROP FOREIGN KEY `FK_d7bbcf71f4b21d22618cbb3adf2`");
        await queryRunner.query("DROP INDEX `REL_d7bbcf71f4b21d22618cbb3adf` ON `igreja`");
        await queryRunner.query("ALTER TABLE `igreja` DROP INDEX `IDX_d7bbcf71f4b21d22618cbb3adf`");
        await queryRunner.query("ALTER TABLE `igreja` DROP COLUMN `usuarioId`");
        await queryRunner.query("ALTER TABLE `usuario` ADD `igrejaId` varchar(36) NULL");
        await queryRunner.query("CREATE UNIQUE INDEX `IDX_16cc7cdd02f0b6de459f8165f3` ON `usuario` (`igrejaId`)");
    }

}
