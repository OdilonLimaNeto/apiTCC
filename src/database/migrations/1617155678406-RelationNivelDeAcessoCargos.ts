import {MigrationInterface, QueryRunner} from "typeorm";

export class RelationNivelDeAcessoCargos1617155678406 implements MigrationInterface {
    name = 'RelationNivelDeAcessoCargos1617155678406'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `cargo` ADD `ID_nivel_acesso` varchar(36) NULL");
        await queryRunner.query("ALTER TABLE `cargo` ADD CONSTRAINT `FK_f2f97ec2c3479b48e364c893414` FOREIGN KEY (`ID_nivel_acesso`) REFERENCES `nivel_acesso`(`id_nivel_acesso`) ON DELETE NO ACTION ON UPDATE NO ACTION");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `cargo` DROP FOREIGN KEY `FK_f2f97ec2c3479b48e364c893414`");
        await queryRunner.query("ALTER TABLE `cargo` DROP COLUMN `ID_nivel_acesso`");
    }

}
