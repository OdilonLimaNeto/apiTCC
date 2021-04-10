"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
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
const NivelAcessoRepository_1 = require("../repositories/NivelAcessoRepository");
const Yup = __importStar(require("yup"));
const NivelAcesso_1 = require("../entities/NivelAcesso");
class NivelAcessoController {
    index(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const nivelacessoRepository = typeorm_1.getCustomRepository(NivelAcessoRepository_1.NivelAcessoRepository);
            const listagem = yield nivelacessoRepository.find();
            return response.json(listagem);
        });
    }
    ;
    create(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const nivelacessoRepository = typeorm_1.getCustomRepository(NivelAcessoRepository_1.NivelAcessoRepository);
            const validation = Yup.object().shape({
                titulo_acesso: Yup.string().required(),
                tipo_acesso: Yup.number().required(),
            });
            const { titulo_acesso, tipo_acesso } = request.body;
            if (!(yield validation.isValid(request.body))) {
                return response.status(400).json({ message: 'Preencha todos os campos' });
            }
            ;
            const nivelacessoExiste = yield nivelacessoRepository.findOne({ titulo_acesso });
            if (nivelacessoExiste) {
                return response.status(400).json({ message: 'O nivel de acesso já existe' });
            }
            ;
            const tipoacessoExiste = yield nivelacessoRepository.findOne({ tipo_acesso });
            if (tipoacessoExiste) {
                return response.status(400).json({ message: 'Esse tipo de acesso já foi atribuido para outro nivel de acesso' });
            }
            ;
            const nivelAcesso = nivelacessoRepository.create({
                titulo_acesso, tipo_acesso
            });
            yield nivelacessoRepository.save(nivelAcesso);
            return response.status(201).json(nivelAcesso);
        });
    }
    ;
    delete(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const nivelacessoRepository = typeorm_1.getCustomRepository(NivelAcessoRepository_1.NivelAcessoRepository);
            const { id } = request.params;
            const nivelDeAcessoExiste = yield nivelacessoRepository.findOne(id);
            if (!nivelDeAcessoExiste) {
                return response.status(400).json({ message: 'O nivel de acesso nao existe para que seja deletado' });
            }
            ;
            yield nivelacessoRepository.delete(id);
            return response.status(201).json({ message: 'Nivel de acesso deletado com sucesso' });
        });
    }
    ;
    buscarIDNivelAcesso(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const nivelAcesso = yield typeorm_1.getManager().findOne(NivelAcesso_1.NivelAcesso, id);
            return nivelAcesso;
        });
    }
    ;
    mostrarCargosdoNiveldeAcesso(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const nivelacesso = yield typeorm_1.getManager().findOne(NivelAcesso_1.NivelAcesso, id, {
                relations: ['cargos']
            });
            return nivelacesso.cargos;
        });
    }
    ;
}
exports.default = new NivelAcessoController();
