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
const typeorm_1 = require("typeorm");
const Atividade_1 = require("../entities/Atividade");
const AtividadeRepository_1 = require("../repositories/AtividadeRepository");
class AtividadeController {
    index() {
        return __awaiter(this, void 0, void 0, function* () {
            const atividadeRepository = typeorm_1.getCustomRepository(AtividadeRepository_1.AtividadeRepository);
            const listagem = yield atividadeRepository.find();
            return listagem;
        });
    }
    ;
    create(atividade) {
        return __awaiter(this, void 0, void 0, function* () {
            const criarAtividade = yield typeorm_1.getManager().save(atividade);
            return criarAtividade;
        });
    }
    ;
    delete(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const atividadeRepository = typeorm_1.getCustomRepository(AtividadeRepository_1.AtividadeRepository);
            const atividade = yield atividadeRepository.delete(id);
            return atividade;
        });
    }
    ;
    buscarIDAtividade(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const atividade = yield typeorm_1.getManager().findOne(Atividade_1.Atividade, id);
            return atividade;
        });
    }
    ;
}
;
exports.default = new AtividadeController();
