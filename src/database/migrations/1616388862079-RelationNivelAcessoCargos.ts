import {MigrationInterface, QueryRunner} from "typeorm";

export class RelationNivelAcessoCargos1616388862079 implements MigrationInterface {
    name = 'RelationNivelAcessoCargos1616388862079'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `cargo` ADD `nivelAcessoIdNivelAcesso` varchar(36) NULL");
        await queryRunner.query("ALTER TABLE `cargo` ADD CONSTRAINT `FK_f2f97ec2c3479b48e364c893414` FOREIGN KEY (`nivelAcessoIdNivelAcesso`) REFERENCES `nivel_acesso`(`id_nivel_acesso`) ON DELETE NO ACTION ON UPDATE NO ACTION");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `cargo` DROP FOREIGN KEY `FK_f2f97ec2c3479b48e364c893414`");
        await queryRunner.query("ALTER TABLE `cargo` DROP COLUMN `nivelAcessoIdNivelAcesso`");
    }

}
