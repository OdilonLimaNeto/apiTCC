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
exports.Atividade = void 0;
const typeorm_1 = require("typeorm");
const Igreja_1 = require("./Igreja");
const TipoAtividade_1 = require("./TipoAtividade");
let Atividade = class Atividade {
    constructor(data, horarioInicio, horarioTermino, qtdVisitantes, qtdmembros, tema, responsavel, dizimo, oferta, numeroDecisoes, numeroReconciliacao, preleitor, observacao, tipoAtividade, igreja) {
        this.data_atividade = data,
            this.hora_inicio_atividade = horarioInicio,
            this.hora_termino_atividade = horarioTermino,
            this.qtd_vititantes_atividade = qtdVisitantes,
            this.qtd_membros_atividade = qtdmembros,
            this.tema_atividade = tema,
            this.responsavel_atividade = responsavel,
            this.dizimo_atividade = dizimo,
            this.oferta_atividade = oferta,
            this.numero_decisoes_atividade = numeroDecisoes,
            this.numero_reconciliacao_atividade = numeroReconciliacao,
            this.preleitor_Atividade = preleitor,
            this.observacao_atividade = observacao,
            this.tipoAtividade = tipoAtividade,
            this.igreja = igreja;
    }
    ;
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn('uuid'),
    __metadata("design:type", String)
], Atividade.prototype, "id_atividade", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Date)
], Atividade.prototype, "data_atividade", void 0);
__decorate([
    typeorm_1.Column({ type: 'time' }),
    __metadata("design:type", String)
], Atividade.prototype, "hora_inicio_atividade", void 0);
__decorate([
    typeorm_1.Column({ type: 'time' }),
    __metadata("design:type", String)
], Atividade.prototype, "hora_termino_atividade", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Number)
], Atividade.prototype, "qtd_vititantes_atividade", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Number)
], Atividade.prototype, "qtd_membros_atividade", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Atividade.prototype, "tema_atividade", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Atividade.prototype, "responsavel_atividade", void 0);
__decorate([
    typeorm_1.Column({ type: 'float' }),
    __metadata("design:type", Number)
], Atividade.prototype, "dizimo_atividade", void 0);
__decorate([
    typeorm_1.Column({ type: 'float' }),
    __metadata("design:type", Number)
], Atividade.prototype, "oferta_atividade", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Number)
], Atividade.prototype, "numero_reconciliacao_atividade", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Number)
], Atividade.prototype, "numero_decisoes_atividade", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Atividade.prototype, "preleitor_Atividade", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Atividade.prototype, "observacao_atividade", void 0);
__decorate([
    typeorm_1.CreateDateColumn(),
    __metadata("design:type", Date)
], Atividade.prototype, "createdAt", void 0);
__decorate([
    typeorm_1.ManyToOne(() => TipoAtividade_1.TipoAtividade, atividades => atividades.atividades),
    __metadata("design:type", TipoAtividade_1.TipoAtividade)
], Atividade.prototype, "tipoAtividade", void 0);
__decorate([
    typeorm_1.ManyToOne(() => Igreja_1.Igreja, atividades => atividades.atividades),
    __metadata("design:type", Igreja_1.Igreja)
], Atividade.prototype, "igreja", void 0);
Atividade = __decorate([
    typeorm_1.Entity('atividade'),
    __metadata("design:paramtypes", [Date, String, String, Number, Number, String, String, Number, Number, Number, Number, String, String, TipoAtividade_1.TipoAtividade,
        Igreja_1.Igreja])
], Atividade);
exports.Atividade = Atividade;
;
