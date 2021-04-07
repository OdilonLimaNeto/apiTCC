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
exports.CreateNivelAcesso1617153384256 = void 0;
class CreateNivelAcesso1617153384256 {
    constructor() {
        this.name = 'CreateNivelAcesso1617153384256';
    }
    up(queryRunner) {
        return __awaiter(this, void 0, void 0, function* () {
            yield queryRunner.query("CREATE TABLE `nivel_acesso` (`id_nivel_acesso` varchar(36) NOT NULL, `titulo_acesso` varchar(255) NOT NULL, `tipo_acesso` int NOT NULL, `created_at` datetime(6) NOT NULL DEFAULT CURRENT_TIMESTAMP(6), PRIMARY KEY (`id_nivel_acesso`)) ENGINE=InnoDB");
        });
    }
    down(queryRunner) {
        return __awaiter(this, void 0, void 0, function* () {
            yield queryRunner.query("DROP TABLE `nivel_acesso`");
        });
    }
}
exports.CreateNivelAcesso1617153384256 = CreateNivelAcesso1617153384256;
