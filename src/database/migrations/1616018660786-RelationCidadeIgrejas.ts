import {MigrationInterface, QueryRunner} from "typeorm";

export class RelationCidadeIgrejas1616018660786 implements MigrationInterface {
    name = 'RelationCidadeIgrejas1616018660786'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `igreja` ADD `cidadeId` varchar(36) NULL");
        await queryRunner.query("ALTER TABLE `igreja` ADD CONSTRAINT `FK_18bf736affb8d577924a81c08b6` FOREIGN KEY (`cidadeId`) REFERENCES `cidade`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `igreja` DROP FOREIGN KEY `FK_18bf736affb8d577924a81c08b6`");
        await queryRunner.query("ALTER TABLE `igreja` DROP COLUMN `cidadeId`");
    }

}
