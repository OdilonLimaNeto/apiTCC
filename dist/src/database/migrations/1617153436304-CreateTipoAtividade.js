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
exports.CreateTipoAtividade1617153436304 = void 0;
class CreateTipoAtividade1617153436304 {
    constructor() {
        this.name = 'CreateTipoAtividade1617153436304';
    }
    up(queryRunner) {
        return __awaiter(this, void 0, void 0, function* () {
            yield queryRunner.query("CREATE TABLE `tipo_atividade` (`id_tipo_atividade` varchar(36) NOT NULL, `nome_atividade` varchar(255) NOT NULL, `modalidade_atividade` varchar(255) NOT NULL, `gera_arrecadao_atividade` float NOT NULL, `descricao` varchar(255) NOT NULL, `createdAt` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), PRIMARY KEY (`id_tipo_atividade`)) ENGINE=InnoDB");
        });
    }
    down(queryRunner) {
        return __awaiter(this, void 0, void 0, function* () {
            yield queryRunner.query("DROP TABLE `tipo_atividade`");
        });
    }
}
exports.CreateTipoAtividade1617153436304 = CreateTipoAtividade1617153436304;
