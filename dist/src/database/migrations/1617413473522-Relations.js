"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Relations1617413473522 = void 0;
class Relations1617413473522 {
    constructor() {
        this.name = 'Relations1617413473522';
    }
    up(queryRunner) {
        return __awaiter(this, void 0, void 0, function* () {
            yield queryRunner.query("ALTER TABLE `cargo` ADD `nivelAcessoIdNivelAcesso` varchar(36) NULL");
            yield queryRunner.query("ALTER TABLE `usuario` ADD `cargoIdCargo` varchar(36) NULL");
            yield queryRunner.query("ALTER TABLE `igreja` ADD `igrejaMatrizIdIgreja` varchar(36) NULL");
            yield queryRunner.query("ALTER TABLE `igreja` ADD `usuarioIdUsuario` varchar(36) NULL");
            yield queryRunner.query("ALTER TABLE `igreja` ADD UNIQUE INDEX `IDX_3645d284e0ac487e9dc732529e` (`usuarioIdUsuario`)");
            yield queryRunner.query("ALTER TABLE `atividade` ADD `tipoAtividadeIdTipoAtividade` varchar(36) NULL");
            yield queryRunner.query("ALTER TABLE `atividade` ADD `igrejaIdIgreja` varchar(36) NULL");
            yield queryRunner.query("CREATE UNIQUE INDEX `REL_3645d284e0ac487e9dc732529e` ON `igreja` (`usuarioIdUsuario`)");
            yield queryRunner.query("ALTER TABLE `cargo` ADD CONSTRAINT `FK_f2f97ec2c3479b48e364c893414` FOREIGN KEY (`nivelAcessoIdNivelAcesso`) REFERENCES `nivel_acesso`(`id_nivel_acesso`) ON DELETE NO ACTION ON UPDATE NO ACTION");
            yield queryRunner.query("ALTER TABLE `usuario` ADD CONSTRAINT `FK_6c2d05e47988043b55abfe53999` FOREIGN KEY (`cargoIdCargo`) REFERENCES `cargo`(`id_cargo`) ON DELETE NO ACTION ON UPDATE NO ACTION");
            yield queryRunner.query("ALTER TABLE `igreja` ADD CONSTRAINT `FK_550c66b0c9da272be6927cd4973` FOREIGN KEY (`igrejaMatrizIdIgreja`) REFERENCES `igreja`(`id_igreja`) ON DELETE NO ACTION ON UPDATE NO ACTION");
            yield queryRunner.query("ALTER TABLE `igreja` ADD CONSTRAINT `FK_3645d284e0ac487e9dc732529ea` FOREIGN KEY (`usuarioIdUsuario`) REFERENCES `usuario`(`id_usuario`) ON DELETE NO ACTION ON UPDATE NO ACTION");
            yield queryRunner.query("ALTER TABLE `atividade` ADD CONSTRAINT `FK_a8ccfba0fce612efe8f6c7aee87` FOREIGN KEY (`tipoAtividadeIdTipoAtividade`) REFERENCES `tipo_atividade`(`id_tipo_atividade`) ON DELETE NO ACTION ON UPDATE NO ACTION");
            yield queryRunner.query("ALTER TABLE `atividade` ADD CONSTRAINT `FK_8db2e1c0eea2857bbd7bf39c1b7` FOREIGN KEY (`igrejaIdIgreja`) REFERENCES `igreja`(`id_igreja`) ON DELETE NO ACTION ON UPDATE NO ACTION");
        });
    }
    down(queryRunner) {
        return __awaiter(this, void 0, void 0, function* () {
            yield queryRunner.query("ALTER TABLE `atividade` DROP FOREIGN KEY `FK_8db2e1c0eea2857bbd7bf39c1b7`");
            yield queryRunner.query("ALTER TABLE `atividade` DROP FOREIGN KEY `FK_a8ccfba0fce612efe8f6c7aee87`");
            yield queryRunner.query("ALTER TABLE `igreja` DROP FOREIGN KEY `FK_3645d284e0ac487e9dc732529ea`");
            yield queryRunner.query("ALTER TABLE `igreja` DROP FOREIGN KEY `FK_550c66b0c9da272be6927cd4973`");
            yield queryRunner.query("ALTER TABLE `usuario` DROP FOREIGN KEY `FK_6c2d05e47988043b55abfe53999`");
            yield queryRunner.query("ALTER TABLE `cargo` DROP FOREIGN KEY `FK_f2f97ec2c3479b48e364c893414`");
            yield queryRunner.query("DROP INDEX `REL_3645d284e0ac487e9dc732529e` ON `igreja`");
            yield queryRunner.query("ALTER TABLE `atividade` DROP COLUMN `igrejaIdIgreja`");
            yield queryRunner.query("ALTER TABLE `atividade` DROP COLUMN `tipoAtividadeIdTipoAtividade`");
            yield queryRunner.query("ALTER TABLE `igreja` DROP INDEX `IDX_3645d284e0ac487e9dc732529e`");
            yield queryRunner.query("ALTER TABLE `igreja` DROP COLUMN `usuarioIdUsuario`");
            yield queryRunner.query("ALTER TABLE `igreja` DROP COLUMN `igrejaMatrizIdIgreja`");
            yield queryRunner.query("ALTER TABLE `usuario` DROP COLUMN `cargoIdCargo`");
            yield queryRunner.query("ALTER TABLE `cargo` DROP COLUMN `nivelAcessoIdNivelAcesso`");
        });
    }
}
exports.Relations1617413473522 = Relations1617413473522;
