import {MigrationInterface, QueryRunner} from "typeorm";

export class RelationCidadeIgrejas1616111501436 implements MigrationInterface {
    name = 'RelationCidadeIgrejas1616111501436'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("DROP INDEX `IDX_d7bbcf71f4b21d22618cbb3adf` ON `igreja`");
        await queryRunner.query("ALTER TABLE `igreja` ADD `cidadeId` varchar(36) NULL");
        await queryRunner.query("ALTER TABLE `igreja` ADD CONSTRAINT `FK_18bf736affb8d577924a81c08b6` FOREIGN KEY (`cidadeId`) REFERENCES `cidade`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `igreja` DROP FOREIGN KEY `FK_18bf736affb8d577924a81c08b6`");
        await queryRunner.query("ALTER TABLE `igreja` DROP COLUMN `cidadeId`");
        await queryRunner.query("CREATE UNIQUE INDEX `IDX_d7bbcf71f4b21d22618cbb3adf` ON `igreja` (`usuarioId`)");
    }

}
