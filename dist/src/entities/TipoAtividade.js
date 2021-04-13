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
exports.TipoAtividade = void 0;
const typeorm_1 = require("typeorm");
const Atividade_1 = require("./Atividade");
let TipoAtividade = class TipoAtividade {
    constructor(nommeAtividade, modalidadeAtividade, geraArrecadacao, descricao) {
        this.nome_atividade = nommeAtividade,
            this.modalidade_atividade = modalidadeAtividade,
            this.gera_arrecadao_atividade = geraArrecadacao,
            this.descricao = descricao;
    }
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn('uuid'),
    __metadata("design:type", String)
], TipoAtividade.prototype, "id_tipo_atividade", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], TipoAtividade.prototype, "nome_atividade", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], TipoAtividade.prototype, "modalidade_atividade", void 0);
__decorate([
    typeorm_1.Column({ type: 'float' }),
    __metadata("design:type", Number)
], TipoAtividade.prototype, "gera_arrecadao_atividade", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], TipoAtividade.prototype, "descricao", void 0);
__decorate([
    typeorm_1.CreateDateColumn(),
    __metadata("design:type", Date)
], TipoAtividade.prototype, "createdAt", void 0);
__decorate([
    typeorm_1.OneToMany(() => Atividade_1.Atividade, tipoAtividade => tipoAtividade.tipoAtividade),
    __metadata("design:type", Array)
], TipoAtividade.prototype, "atividades", void 0);
TipoAtividade = __decorate([
    typeorm_1.Entity('tipo_atividade'),
    __metadata("design:paramtypes", [String, String, Number, String])
], TipoAtividade);
exports.TipoAtividade = TipoAtividade;
;
