import {MigrationInterface, QueryRunner} from "typeorm";

export class RelationNivelAcessoCargos1616109749493 implements MigrationInterface {
    name = 'RelationNivelAcessoCargos1616109749493'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `cargo` ADD `nivelAcessoId` varchar(36) NULL");
        await queryRunner.query("ALTER TABLE `cargo` ADD CONSTRAINT `FK_3f4917fea1f9e065ba29c9edf69` FOREIGN KEY (`nivelAcessoId`) REFERENCES `nivel_acesso`(`id`) ON DELETE NO ACTION ON UPDATE NO ACTION");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `cargo` DROP FOREIGN KEY `FK_3f4917fea1f9e065ba29c9edf69`");
        await queryRunner.query("ALTER TABLE `cargo` DROP COLUMN `nivelAcessoId`");
    }

}
