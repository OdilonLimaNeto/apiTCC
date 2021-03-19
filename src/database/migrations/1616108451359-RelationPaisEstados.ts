import {MigrationInterface, QueryRunner} from "typeorm";

export class RelationPaisEstados1616108451359 implements MigrationInterface {
    name = 'RelationPaisEstados1616108451359'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `estado` ADD `paisId` varchar(36) NULL");
        await queryRunner.query("ALTER TABLE `estado` ADD CONSTRAINT `FK_9016d04f7981ac3f2cb6f557d16` FOREIGN KEY (`paisId`) REFERENCES `pais`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `estado` DROP FOREIGN KEY `FK_9016d04f7981ac3f2cb6f557d16`");
        await queryRunner.query("ALTER TABLE `estado` DROP COLUMN `paisId`");
    }

}
