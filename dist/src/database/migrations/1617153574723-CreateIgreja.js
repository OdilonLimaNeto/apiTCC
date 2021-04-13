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
exports.CreateIgreja1617153574723 = void 0;
class CreateIgreja1617153574723 {
    constructor() {
        this.name = 'CreateIgreja1617153574723';
    }
    up(queryRunner) {
        return __awaiter(this, void 0, void 0, function* () {
            yield queryRunner.query("CREATE TABLE `igreja` (`id_igreja` varchar(36) NOT NULL, `nome_igreja` varchar(255) NOT NULL, `cnpj_igreja` varchar(255) NOT NULL, `tipo_igreja` tinyint NOT NULL, `logo_igreja` varchar(255) NOT NULL, `matriz_igreja` tinyint NOT NULL, `qtd_membro_igreja` int NOT NULL, `rua_igreja` varchar(255) NOT NULL, `bairro_igreja` varchar(255) NOT NULL, `cep_igreja` varchar(255) NOT NULL, `numero_residencia` int NOT NULL, `complemento_residencia_igreja` varchar(255) NOT NULL, `cidade_igreja` varchar(255) NOT NULL, `estado_igreja` varchar(255) NOT NULL, `pais_igreja` varchar(255) NOT NULL, `createdAt` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), PRIMARY KEY (`id_igreja`)) ENGINE=InnoDB");
        });
    }
    down(queryRunner) {
        return __awaiter(this, void 0, void 0, function* () {
            yield queryRunner.query("DROP TABLE `igreja`");
        });
    }
}
exports.CreateIgreja1617153574723 = CreateIgreja1617153574723;
