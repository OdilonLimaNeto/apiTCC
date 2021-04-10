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
const Usuario_1 = require("../entities/Usuario");
const UsuarioRepository_1 = require("../repositories/UsuarioRepository");
const CargoController_1 = __importDefault(require("./CargoController"));
class UsuarioController {
    create(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const usuarioRepository = typeorm_1.getCustomRepository(UsuarioRepository_1.UsuarioRepository);
            const { primeiro_nome_usuario, ultimo_nome_usuario, email_usuario, senha_usuario, foto_perfil_usuario, rua_usuario, bairro_usuario, numero_residencia_usuario, complemento_residencia_usuario, cidade_usuario, estado_usuario, pais_usuario, idCargo, } = request.body;
            const cargo = yield CargoController_1.default.buscarIDCargo(idCargo);
            const usuarioExiste = yield usuarioRepository.findOne({ email_usuario });
            if (usuarioExiste) {
                return response.status(400).json({ message: 'Email já cadastrado' });
            }
            ;
            if (!cargo) {
                return response.status(400).json({ message: 'O cargo não pode ser atribuido ao usuário, pois não existe!' });
            }
            ;
            const usuario = usuarioRepository.create({
                primeiro_nome_usuario,
                ultimo_nome_usuario,
                email_usuario,
                senha_usuario,
                foto_perfil_usuario,
                rua_usuario,
                bairro_usuario,
                numero_residencia_usuario,
                complemento_residencia_usuario,
                cidade_usuario,
                estado_usuario,
                pais_usuario,
                cargo,
            });
            yield usuarioRepository.save(usuario);
            return response.status(201).json({ usuario });
        });
    }
    ;
    index(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const usuarioRepository = typeorm_1.getCustomRepository(UsuarioRepository_1.UsuarioRepository);
            const listagem = yield usuarioRepository.find();
            return response.json(listagem);
        });
    }
    ;
    delete(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const usuarioRepository = typeorm_1.getCustomRepository(UsuarioRepository_1.UsuarioRepository);
            const { id } = request.params;
            const usuarioExiste = yield usuarioRepository.findOne(id);
            if (!usuarioExiste) {
                return response.status(400).json({ message: 'O usuario nao existe para que seja deletado' });
            }
            ;
            yield usuarioRepository.delete(id);
            return response.status(201).json({ message: 'Usuario deletado com sucesso', id });
        });
    }
    ;
    buscarUsuario(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const usuario = typeorm_1.getManager().findOne(Usuario_1.Usuario, id);
            return usuario;
        });
    }
    ;
}
;
exports.default = new UsuarioController();
