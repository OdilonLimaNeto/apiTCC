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
exports.CreateAtividade1617153497620 = void 0;
class CreateAtividade1617153497620 {
    constructor() {
        this.name = 'CreateAtividade1617153497620';
    }
    up(queryRunner) {
        return __awaiter(this, void 0, void 0, function* () {
            yield queryRunner.query("CREATE TABLE `atividade` (`id_atividade` varchar(36) NOT NULL, `nome_atividade` varchar(255) NOT NULL, `data_atividade` datetime NOT NULL, `hora_inicio_atividade` timestamp NOT NULL, `hora_termino_atividade` timestamp NOT NULL, `qtd_vititantes_atividade` int NOT NULL, `qtd_membros_atividade` int NOT NULL, `tema_atividade` varchar(255) NOT NULL, `responsavel_atividade` varchar(255) NOT NULL, `dizimo_atividade` float NOT NULL, `oferta_atividade` float NOT NULL, `numero_reconciliacao_atividade` int NOT NULL, `numero_decisoes_atividade` int NOT NULL, `preleitor_Atividade` varchar(255) NOT NULL, `observacao_atividade` varchar(255) NOT NULL, `createdAt` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), PRIMARY KEY (`id_atividade`)) ENGINE=InnoDB");
        });
    }
    down(queryRunner) {
        return __awaiter(this, void 0, void 0, function* () {
            yield queryRunner.query("DROP TABLE `atividade`");
        });
    }
}
exports.CreateAtividade1617153497620 = CreateAtividade1617153497620;
