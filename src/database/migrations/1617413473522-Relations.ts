import {MigrationInterface, QueryRunner} from "typeorm";

export class Relations1617413473522 implements MigrationInterface {
    name = 'Relations1617413473522'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `cargo` ADD `nivelAcessoIdNivelAcesso` varchar(36) NULL");
        await queryRunner.query("ALTER TABLE `usuario` ADD `cargoIdCargo` varchar(36) NULL");
        await queryRunner.query("ALTER TABLE `igreja` ADD `igrejaMatrizIdIgreja` varchar(36) NULL");
        await queryRunner.query("ALTER TABLE `igreja` ADD `usuarioIdUsuario` varchar(36) NULL");
        await queryRunner.query("ALTER TABLE `igreja` ADD UNIQUE INDEX `IDX_3645d284e0ac487e9dc732529e` (`usuarioIdUsuario`)");
        await queryRunner.query("ALTER TABLE `atividade` ADD `tipoAtividadeIdTipoAtividade` varchar(36) NULL");
        await queryRunner.query("ALTER TABLE `atividade` ADD `igrejaIdIgreja` varchar(36) NULL");
        await queryRunner.query("CREATE UNIQUE INDEX `REL_3645d284e0ac487e9dc732529e` ON `igreja` (`usuarioIdUsuario`)");
        await queryRunner.query("ALTER TABLE `cargo` ADD CONSTRAINT `FK_f2f97ec2c3479b48e364c893414` FOREIGN KEY (`nivelAcessoIdNivelAcesso`) REFERENCES `nivel_acesso`(`id_nivel_acesso`) ON DELETE NO ACTION ON UPDATE NO ACTION");
        await queryRunner.query("ALTER TABLE `usuario` ADD CONSTRAINT `FK_6c2d05e47988043b55abfe53999` FOREIGN KEY (`cargoIdCargo`) REFERENCES `cargo`(`id_cargo`) ON DELETE NO ACTION ON UPDATE NO ACTION");
        await queryRunner.query("ALTER TABLE `igreja` ADD CONSTRAINT `FK_550c66b0c9da272be6927cd4973` FOREIGN KEY (`igrejaMatrizIdIgreja`) REFERENCES `igreja`(`id_igreja`) ON DELETE NO ACTION ON UPDATE NO ACTION");
        await queryRunner.query("ALTER TABLE `igreja` ADD CONSTRAINT `FK_3645d284e0ac487e9dc732529ea` FOREIGN KEY (`usuarioIdUsuario`) REFERENCES `usuario`(`id_usuario`) ON DELETE NO ACTION ON UPDATE NO ACTION");
        await queryRunner.query("ALTER TABLE `atividade` ADD CONSTRAINT `FK_a8ccfba0fce612efe8f6c7aee87` FOREIGN KEY (`tipoAtividadeIdTipoAtividade`) REFERENCES `tipo_atividade`(`id_tipo_atividade`) ON DELETE NO ACTION ON UPDATE NO ACTION");
        await queryRunner.query("ALTER TABLE `atividade` ADD CONSTRAINT `FK_8db2e1c0eea2857bbd7bf39c1b7` FOREIGN KEY (`igrejaIdIgreja`) REFERENCES `igreja`(`id_igreja`) ON DELETE NO ACTION ON UPDATE NO ACTION");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `atividade` DROP FOREIGN KEY `FK_8db2e1c0eea2857bbd7bf39c1b7`");
        await queryRunner.query("ALTER TABLE `atividade` DROP FOREIGN KEY `FK_a8ccfba0fce612efe8f6c7aee87`");
        await queryRunner.query("ALTER TABLE `igreja` DROP FOREIGN KEY `FK_3645d284e0ac487e9dc732529ea`");
        await queryRunner.query("ALTER TABLE `igreja` DROP FOREIGN KEY `FK_550c66b0c9da272be6927cd4973`");
        await queryRunner.query("ALTER TABLE `usuario` DROP FOREIGN KEY `FK_6c2d05e47988043b55abfe53999`");
        await queryRunner.query("ALTER TABLE `cargo` DROP FOREIGN KEY `FK_f2f97ec2c3479b48e364c893414`");
        await queryRunner.query("DROP INDEX `REL_3645d284e0ac487e9dc732529e` ON `igreja`");
        await queryRunner.query("ALTER TABLE `atividade` DROP COLUMN `igrejaIdIgreja`");
        await queryRunner.query("ALTER TABLE `atividade` DROP COLUMN `tipoAtividadeIdTipoAtividade`");
        await queryRunner.query("ALTER TABLE `igreja` DROP INDEX `IDX_3645d284e0ac487e9dc732529e`");
        await queryRunner.query("ALTER TABLE `igreja` DROP COLUMN `usuarioIdUsuario`");
        await queryRunner.query("ALTER TABLE `igreja` DROP COLUMN `igrejaMatrizIdIgreja`");
        await queryRunner.query("ALTER TABLE `usuario` DROP COLUMN `cargoIdCargo`");
        await queryRunner.query("ALTER TABLE `cargo` DROP COLUMN `nivelAcessoIdNivelAcesso`");
    }

}
