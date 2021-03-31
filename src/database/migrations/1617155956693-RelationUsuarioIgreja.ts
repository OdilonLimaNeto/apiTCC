import {MigrationInterface, QueryRunner} from "typeorm";

export class RelationUsuarioIgreja1617155956693 implements MigrationInterface {
    name = 'RelationUsuarioIgreja1617155956693'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `igreja` ADD `ID_usuario` varchar(36) NULL");
        await queryRunner.query("ALTER TABLE `igreja` ADD UNIQUE INDEX `IDX_3645d284e0ac487e9dc732529e` (`ID_usuario`)");
        await queryRunner.query("CREATE UNIQUE INDEX `REL_3645d284e0ac487e9dc732529e` ON `igreja` (`ID_usuario`)");
        await queryRunner.query("ALTER TABLE `igreja` ADD CONSTRAINT `FK_3645d284e0ac487e9dc732529ea` FOREIGN KEY (`ID_usuario`) REFERENCES `usuario`(`id_usuario`) ON DELETE NO ACTION ON UPDATE NO ACTION");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `igreja` DROP FOREIGN KEY `FK_3645d284e0ac487e9dc732529ea`");
        await queryRunner.query("DROP INDEX `REL_3645d284e0ac487e9dc732529e` ON `igreja`");
        await queryRunner.query("ALTER TABLE `igreja` DROP INDEX `IDX_3645d284e0ac487e9dc732529e`");
        await queryRunner.query("ALTER TABLE `igreja` DROP COLUMN `ID_usuario`");
    }

}
