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
const TipoAtividade_1 = require("../entities/TipoAtividade");
const TipoAtividadeRepository_1 = require("../repositories/TipoAtividadeRepository");
class TipoAtividadeController {
    create(tipoAtividade) {
        return __awaiter(this, void 0, void 0, function* () {
            const criarTipoAtividade = yield typeorm_1.getManager().save(tipoAtividade);
            return criarTipoAtividade;
        });
    }
    ;
    index() {
        return __awaiter(this, void 0, void 0, function* () {
            const tipoAtividadeRepository = typeorm_1.getCustomRepository(TipoAtividadeRepository_1.TipoAtivdadeRepository);
            const listagem = yield tipoAtividadeRepository.find();
            return listagem;
        });
    }
    ;
    delete(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const tipoAtividadeRepository = typeorm_1.getCustomRepository(TipoAtividadeRepository_1.TipoAtivdadeRepository);
            const tipoatividade = yield tipoAtividadeRepository.delete(id);
            return tipoatividade;
        });
    }
    ;
    buscarTipoAtivdade(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const tipoatividade = yield typeorm_1.getManager().findOne(TipoAtividade_1.TipoAtividade, id);
            return tipoatividade;
        });
    }
    ;
}
exports.default = new TipoAtividadeController();
