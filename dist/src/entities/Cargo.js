"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Cargo = void 0;
const typeorm_1 = require("typeorm");
const NivelAcesso_1 = require("./NivelAcesso");
const Usuario_1 = require("./Usuario");
let Cargo = class Cargo {
    constructor(nome_cargo, descricao, nivelacesso) {
        this.descricao = descricao,
            this.nome_cargo = nome_cargo,
            this.nivelAcesso = nivelacesso;
    }
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn('uuid'),
    __metadata("design:type", String)
], Cargo.prototype, "id_cargo", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Cargo.prototype, "nome_cargo", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Cargo.prototype, "descricao", void 0);
__decorate([
    typeorm_1.CreateDateColumn(),
    __metadata("design:type", Date)
], Cargo.prototype, "createdAt", void 0);
__decorate([
    typeorm_1.OneToMany(() => Usuario_1.Usuario, cargo => cargo.cargo),
    __metadata("design:type", Array)
], Cargo.prototype, "usuarios", void 0);
__decorate([
    typeorm_1.ManyToOne(() => NivelAcesso_1.NivelAcesso, cargos => cargos.cargos),
    __metadata("design:type", NivelAcesso_1.NivelAcesso)
], Cargo.prototype, "nivelAcesso", void 0);
Cargo = __decorate([
    typeorm_1.Entity('cargo'),
    __metadata("design:paramtypes", [String, String, NivelAcesso_1.NivelAcesso])
], Cargo);
exports.Cargo = Cargo;
;
