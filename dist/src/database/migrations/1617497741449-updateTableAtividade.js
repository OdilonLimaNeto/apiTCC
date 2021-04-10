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
exports.updateTableAtividade1617497741449 = void 0;
class updateTableAtividade1617497741449 {
    constructor() {
        this.name = 'updateTableAtividade1617497741449';
    }
    up(queryRunner) {
        return __awaiter(this, void 0, void 0, function* () {
            yield queryRunner.query("DROP INDEX `IDX_3645d284e0ac487e9dc732529e` ON `igreja`");
            yield queryRunner.query("ALTER TABLE `atividade` DROP COLUMN `hora_inicio_atividade`");
            yield queryRunner.query("ALTER TABLE `atividade` ADD `hora_inicio_atividade` time NOT NULL");
            yield queryRunner.query("ALTER TABLE `atividade` DROP COLUMN `hora_termino_atividade`");
            yield queryRunner.query("ALTER TABLE `atividade` ADD `hora_termino_atividade` time NOT NULL");
        });
    }
    down(queryRunner) {
        return __awaiter(this, void 0, void 0, function* () {
            yield queryRunner.query("ALTER TABLE `atividade` DROP COLUMN `hora_termino_atividade`");
            yield queryRunner.query("ALTER TABLE `atividade` ADD `hora_termino_atividade` timestamp NOT NULL");
            yield queryRunner.query("ALTER TABLE `atividade` DROP COLUMN `hora_inicio_atividade`");
            yield queryRunner.query("ALTER TABLE `atividade` ADD `hora_inicio_atividade` timestamp NOT NULL");
            yield queryRunner.query("CREATE UNIQUE INDEX `IDX_3645d284e0ac487e9dc732529e` ON `igreja` (`usuarioIdUsuario`)");
        });
    }
}
exports.updateTableAtividade1617497741449 = updateTableAtividade1617497741449;
