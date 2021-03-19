import {MigrationInterface, QueryRunner} from "typeorm";

export class RelationEstadoCidades1616109368306 implements MigrationInterface {
    name = 'RelationEstadoCidades1616109368306'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `cidade` ADD `estadoId` varchar(36) NULL");
        await queryRunner.query("ALTER TABLE `cidade` ADD CONSTRAINT `FK_2ec6c38998b498e9f517a6c8399` FOREIGN KEY (`estadoId`) REFERENCES `estado`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `cidade` DROP FOREIGN KEY `FK_2ec6c38998b498e9f517a6c8399`");
        await queryRunner.query("ALTER TABLE `cidade` DROP COLUMN `estadoId`");
    }

}
