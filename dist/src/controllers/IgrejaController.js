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
const Igreja_1 = require("../entities/Igreja");
const IgrejaRepository_1 = require("../repositories/IgrejaRepository");
class IgrejaController {
    create(igreja) {
        return __awaiter(this, void 0, void 0, function* () {
            const criarIgreja = yield typeorm_1.getManager().save(igreja);
            return criarIgreja;
        });
    }
    ;
    index() {
        return __awaiter(this, void 0, void 0, function* () {
            const igrejaRepository = typeorm_1.getCustomRepository(IgrejaRepository_1.IgrejaRepository);
            const listagem = yield igrejaRepository.find();
            return listagem;
        });
    }
    ;
    delete(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const igrejaRepository = typeorm_1.getCustomRepository(IgrejaRepository_1.IgrejaRepository);
            const igreja = yield igrejaRepository.delete(id);
            return igreja;
        });
    }
    ;
    buscarIgreja(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const igreja = yield typeorm_1.getManager().findOne(Igreja_1.Igreja, id);
            return igreja;
        });
    }
    ;
}
;
exports.default = new IgrejaController();
