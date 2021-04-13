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
var Igreja_1;
Object.defineProperty(exports, "__esModule", { value: true });
exports.Igreja = void 0;
const typeorm_1 = require("typeorm");
const Atividade_1 = require("./Atividade");
const Usuario_1 = require("./Usuario");
let Igreja = Igreja_1 = class Igreja {
    constructor(nomeIgreja, tipoIgreja, logoIgreja, matrizIgreja, qtdmembros, rua, bairro, numero, complemento, cidade, estado, pais, cnpj, cep, usuario) {
        this.nome_igreja = nomeIgreja,
            this.tipo_igreja = tipoIgreja,
            this.logo_igreja = logoIgreja,
            this.matriz_igreja = matrizIgreja,
            this.qtd_membro_igreja = qtdmembros,
            this.rua_igreja = rua,
            this.bairro_igreja = bairro,
            this.numero_residencia = numero,
            this.complemento_residencia_igreja = complemento,
            this.cidade_igreja = cidade,
            this.estado_igreja = estado,
            this.pais_igreja = pais,
            this.cep_igreja = cep,
            this.cnpj_igreja = cnpj,
            this.usuario = usuario;
    }
};
__decorate([
    typeorm_1.PrimaryGeneratedColumn('uuid'),
    __metadata("design:type", String)
], Igreja.prototype, "id_igreja", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Igreja.prototype, "nome_igreja", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Igreja.prototype, "cnpj_igreja", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Boolean)
], Igreja.prototype, "tipo_igreja", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Igreja.prototype, "logo_igreja", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Boolean)
], Igreja.prototype, "matriz_igreja", void 0);
__decorate([
    typeorm_1.ManyToOne(() => Igreja_1, igreja => igreja.filiais),
    __metadata("design:type", Igreja)
], Igreja.prototype, "igrejaMatriz", void 0);
__decorate([
    typeorm_1.OneToMany(() => Igreja_1, igreja => igreja.igrejaMatriz),
    __metadata("design:type", Array)
], Igreja.prototype, "filiais", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Number)
], Igreja.prototype, "qtd_membro_igreja", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Igreja.prototype, "rua_igreja", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Igreja.prototype, "bairro_igreja", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Igreja.prototype, "cep_igreja", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", Number)
], Igreja.prototype, "numero_residencia", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Igreja.prototype, "complemento_residencia_igreja", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Igreja.prototype, "cidade_igreja", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Igreja.prototype, "estado_igreja", void 0);
__decorate([
    typeorm_1.Column(),
    __metadata("design:type", String)
], Igreja.prototype, "pais_igreja", void 0);
__decorate([
    typeorm_1.CreateDateColumn(),
    __metadata("design:type", Date)
], Igreja.prototype, "createdAt", void 0);
__decorate([
    typeorm_1.OneToOne(() => Usuario_1.Usuario, igreja => igreja.igreja),
    typeorm_1.JoinColumn(),
    __metadata("design:type", Usuario_1.Usuario)
], Igreja.prototype, "usuario", void 0);
__decorate([
    typeorm_1.OneToMany(() => Atividade_1.Atividade, igreja => igreja.igreja),
    __metadata("design:type", Array)
], Igreja.prototype, "atividades", void 0);
Igreja = Igreja_1 = __decorate([
    typeorm_1.Entity('igreja'),
    __metadata("design:paramtypes", [String, Boolean, String, Boolean, Number, String, String, Number, String, String, String, String, String, String, Usuario_1.Usuario])
], Igreja);
exports.Igreja = Igreja;
;
