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
exports.CreateUsuario1617153622710 = void 0;
class CreateUsuario1617153622710 {
    constructor() {
        this.name = 'CreateUsuario1617153622710';
    }
    up(queryRunner) {
        return __awaiter(this, void 0, void 0, function* () {
            yield queryRunner.query("CREATE TABLE `usuario` (`id_usuario` varchar(36) NOT NULL, `primeiro_nome_usuario` varchar(255) NOT NULL, `ultimo_nome_usuario` varchar(255) NOT NULL, `email_usuario` varchar(255) NOT NULL, `senha_usuario` varchar(255) NOT NULL, `cpf_usuario` varchar(255) NOT NULL, `foto_perfil_usuario` varchar(255) NOT NULL, `rua_usuario` varchar(255) NOT NULL, `bairro_usuario` varchar(255) NOT NULL, `cep_usuario` varchar(255) NOT NULL, `numero_residencia_usuario` int NOT NULL, `complemento_residencia_usuario` varchar(255) NOT NULL, `cidade_usuario` varchar(255) NOT NULL, `estado_usuario` varchar(255) NOT NULL, `pais_usuario` varchar(255) NOT NULL, `created_at` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), PRIMARY KEY (`id_usuario`)) ENGINE=InnoDB");
        });
    }
    down(queryRunner) {
        return __awaiter(this, void 0, void 0, function* () {
            yield queryRunner.query("DROP TABLE `usuario`");
        });
    }
}
exports.CreateUsuario1617153622710 = CreateUsuario1617153622710;
