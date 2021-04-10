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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
const bcrypt_1 = __importDefault(require("bcrypt"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const AthenticateRepository_1 = require("../repositories/AthenticateRepository");
class AuthenticateController {
    authenticate(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const authenticateRepository = typeorm_1.getCustomRepository(AthenticateRepository_1.AuthenticateRepository);
            const { email_usuario, senha_usuario } = request.body;
            const usuarioExiste = yield authenticateRepository.findOne({ where: { email_usuario } });
            if (!usuarioExiste) {
                return response.status(400).json({ message: 'O email informado não existe' });
            }
            const validarSenha = yield bcrypt_1.default.compare(senha_usuario, usuarioExiste.senha_usuario);
            if (!validarSenha) {
                return response.status(400).json({ message: 'A senha informada está errada' });
            }
            const token = jsonwebtoken_1.default.sign({ idUsuario: usuarioExiste.id_usuario }, process.env.SECRET_TOKEN);
            const { id_usuario } = usuarioExiste;
            return response.status(201).json({
                id_usuario,
                token
            });
        });
    }
}
exports.default = new AuthenticateController();
