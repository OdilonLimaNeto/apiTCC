import {MigrationInterface, QueryRunner} from "typeorm";

export class RelationUsuarioIgreja1616388054601 implements MigrationInterface {
    name = 'RelationUsuarioIgreja1616388054601'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `igreja` ADD `usuarioIdUsuario` varchar(36) NULL");
        await queryRunner.query("ALTER TABLE `igreja` ADD UNIQUE INDEX `IDX_3645d284e0ac487e9dc732529e` (`usuarioIdUsuario`)");
        await queryRunner.query("CREATE UNIQUE INDEX `REL_3645d284e0ac487e9dc732529e` ON `igreja` (`usuarioIdUsuario`)");
        await queryRunner.query("ALTER TABLE `igreja` ADD CONSTRAINT `FK_3645d284e0ac487e9dc732529ea` FOREIGN KEY (`usuarioIdUsuario`) REFERENCES `usuario`(`id_usuario`) ON DELETE NO ACTION ON UPDATE NO ACTION");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `igreja` DROP FOREIGN KEY `FK_3645d284e0ac487e9dc732529ea`");
        await queryRunner.query("DROP INDEX `REL_3645d284e0ac487e9dc732529e` ON `igreja`");
        await queryRunner.query("ALTER TABLE `igreja` DROP INDEX `IDX_3645d284e0ac487e9dc732529e`");
        await queryRunner.query("ALTER TABLE `igreja` DROP COLUMN `usuarioIdUsuario`");
    }

}
