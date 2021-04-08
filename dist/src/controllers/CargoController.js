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
const CargoRepository_1 = require("../repositories/CargoRepository");
const Cargo_1 = require("../entities/Cargo");
class CargoController {
    index() {
        return __awaiter(this, void 0, void 0, function* () {
            const cargos = yield typeorm_1.getManager().find(Cargo_1.Cargo, {
                select: [
                    'id_cargo',
                    'nome_cargo',
                    'descricao',
                    'createdAt',
                    'nivelAcesso'
                ],
                relations: ['nivelAcesso']
            });
            return cargos;
        });
    }
    ;
    create(cargo) {
        return __awaiter(this, void 0, void 0, function* () {
            const criarCargo = yield typeorm_1.getManager().save(cargo);
            return criarCargo;
        });
    }
    ;
    delete(request, response) {
        return __awaiter(this, void 0, void 0, function* () {
            const cargoRepository = typeorm_1.getCustomRepository(CargoRepository_1.CargoRepository);
            const { id } = request.params;
            const cargoExiste = yield cargoRepository.findOne(id);
            if (!cargoExiste) {
                return response.status(400).json({ message: 'O cargo nao existe para que seja deletado' });
            }
            ;
            yield cargoRepository.delete(id);
            return response.status(201).json({ message: 'Nivel de acesso deletado com sucesso', id });
        });
    }
    ;
    buscarIDCargo(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const cargo = yield typeorm_1.getManager().findOne(Cargo_1.Cargo, id);
            return cargo;
        });
    }
    ;
    mostrarUsuariosDeUmCargo(id) {
        return __awaiter(this, void 0, void 0, function* () {
            const cargo = yield typeorm_1.getManager().findOne(Cargo_1.Cargo, id, {
                relations: ['usuarios']
            });
            return cargo.usuarios;
        });
    }
    ;
}
;
exports.default = new CargoController();
