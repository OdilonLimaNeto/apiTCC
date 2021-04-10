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
exports.router = void 0;
const express_1 = require("express");
const typeorm_1 = require("typeorm");
const authenticate_1 = __importDefault(require("./middlewares/authenticate"));
const Cargo_1 = require("./entities/Cargo");
const Igreja_1 = require("./entities/Igreja");
const TipoAtividade_1 = require("./entities/TipoAtividade");
const Atividade_1 = require("./entities/Atividade");
const CargoRepository_1 = require("./repositories/CargoRepository");
const UsuarioRepository_1 = require("./repositories/UsuarioRepository");
const TipoAtividadeRepository_1 = require("./repositories/TipoAtividadeRepository");
const IgrejaRepository_1 = require("./repositories/IgrejaRepository");
const CargoController_1 = __importDefault(require("./controllers/CargoController"));
const NivelAcessoController_1 = __importDefault(require("./controllers/NivelAcessoController"));
const UsuarioController_1 = __importDefault(require("./controllers/UsuarioController"));
const TipoAtividadeController_1 = __importDefault(require("./controllers/TipoAtividadeController"));
const IgrejaController_1 = __importDefault(require("./controllers/IgrejaController"));
const AtividadeController_1 = __importDefault(require("./controllers/AtividadeController"));
const AuthenticateController_1 = __importDefault(require("./controllers/AuthenticateController"));
const router = express_1.Router();
exports.router = router;
// NIVEL DE ACESSO
router.get('/nivelacesso', NivelAcessoController_1.default.index);
router.post('/nivelacesso/create', NivelAcessoController_1.default.create);
router.delete('/nivelacesso/delete/:id', NivelAcessoController_1.default.delete);
router.get('/nivelacesso/cargos/:idNivelAcesso', (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    const { idNivelAcesso } = request.params;
    const cargos = yield NivelAcessoController_1.default.mostrarCargosdoNiveldeAcesso(idNivelAcesso);
    return response.json(cargos);
}));
// CARGO
router.get('/cargo', (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    const cargos = yield CargoController_1.default.index();
    return response.json(cargos);
}));
router.delete('/cargo/delete/:id', CargoController_1.default.delete);
router.post('/cargo/create', (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    const cargoRepository = typeorm_1.getCustomRepository(CargoRepository_1.CargoRepository);
    const { idnivelAcesso, nome_cargo, descricao } = request.body;
    const nivelAcesso = yield NivelAcessoController_1.default.buscarIDNivelAcesso(idnivelAcesso);
    const cargoExiste = yield cargoRepository.findOne({ nome_cargo });
    if (!nivelAcesso) {
        return response.status(400).json({ message: 'O nivel de acesso nao existe' });
    }
    ;
    if (cargoExiste) {
        return response.status(400).json({ message: 'O nome cargo já existe!' });
    }
    ;
    const cargo = new Cargo_1.Cargo(nome_cargo, descricao, nivelAcesso);
    const cargoSalvo = yield CargoController_1.default.create(cargo);
    return response.status(201).json(cargoSalvo);
}));
router.put('/cargo/update/:id', (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    const cargoRepository = typeorm_1.getCustomRepository(CargoRepository_1.CargoRepository);
    const { id } = request.params;
    const { nome_cargo, descricao } = request.body;
    const cargoExiste = yield CargoController_1.default.buscarIDCargo(id);
    if (!cargoExiste) {
        return response.status(400).json({ message: 'O cargo nao existe' });
    }
    ;
    cargoExiste.nome_cargo = nome_cargo || cargoExiste.nome_cargo;
    cargoExiste.descricao = descricao || cargoExiste.descricao;
    yield cargoRepository.save(cargoExiste);
    return response.status(201).json(cargoExiste);
}));
router.get('/cargo/usuarios/:idCargo', (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    const { idCargo } = request.params;
    const cargos = yield CargoController_1.default.mostrarUsuariosDeUmCargo(idCargo);
    return response.json(cargos);
}));
// USUARIO
router.get('/usuario', UsuarioController_1.default.index);
router.post('/usuario/create', UsuarioController_1.default.create);
router.delete('/usuario/delete/:id', UsuarioController_1.default.delete);
router.put('/usuario/update/:id', (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    const usuarioRepository = typeorm_1.getCustomRepository(UsuarioRepository_1.UsuarioRepository);
    const { id } = request.params;
    const { primeiro_nome_usuario, ultimo_nome_usuario, email_usuario, senha_usuario, foto_perfil_usuario, rua_usuario, bairro_usuario, numero_residencia_usuario, complemento_residencia_usuario, cidade_usuario, estado_usuario, pais_usuario, } = request.body;
    const usuario = yield UsuarioController_1.default.buscarUsuario(id);
    if (!usuario) {
        return response.status(400).json({ message: 'O usuario nao existe' });
    }
    ;
    usuario.primeiro_nome_usuario = primeiro_nome_usuario || usuario.primeiro_nome_usuario;
    usuario.ultimo_nome_usuario = ultimo_nome_usuario || usuario.ultimo_nome_usuario;
    usuario.email_usuario = email_usuario || usuario.email_usuario;
    usuario.senha_usuario = senha_usuario || usuario.senha_usuario;
    usuario.foto_perfil_usuario = foto_perfil_usuario || usuario.foto_perfil_usuario;
    usuario.rua_usuario = rua_usuario || usuario.rua_usuario;
    usuario.bairro_usuario = bairro_usuario || usuario.bairro_usuario;
    usuario.numero_residencia_usuario = numero_residencia_usuario || usuario.numero_residencia_usuario;
    usuario.complemento_residencia_usuario = complemento_residencia_usuario || usuario.complemento_residencia_usuario;
    usuario.cidade_usuario = cidade_usuario || usuario.cidade_usuario;
    usuario.estado_usuario = estado_usuario || usuario.estado_usuario;
    usuario.pais_usuario = pais_usuario || usuario.pais_usuario;
    yield usuarioRepository.save(usuario);
    return response.status(201).json(usuario);
}));
// TIPO-ATIVIDADE
router.get('/tipoatividade', (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    const listagem = yield TipoAtividadeController_1.default.index();
    return response.json(listagem);
}));
router.post('/tipoatividade/create', (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    const tipoAtividadeRepository = typeorm_1.getCustomRepository(TipoAtividadeRepository_1.TipoAtivdadeRepository);
    const { nome_atividade, modalidade_atividade, gera_arrecadao_atividade, descricao } = request.body;
    const tipoatividadeExiste = yield tipoAtividadeRepository.findOne({ nome_atividade });
    if (tipoatividadeExiste) {
        return response.status(400).json({ message: 'O tipo de atividade já existe' });
    }
    ;
    const tipAtividade = new TipoAtividade_1.TipoAtividade(nome_atividade, modalidade_atividade, gera_arrecadao_atividade, descricao);
    const tipoatividadeSalva = yield TipoAtividadeController_1.default.create(tipAtividade);
    return response.status(201).json(tipoatividadeSalva);
}));
router.delete('/tipoatividade/delete/:id', (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = request.params;
    const tipoAtividade = yield TipoAtividadeController_1.default.buscarTipoAtivdade(id);
    if (!tipoAtividade) {
        return response.status(400).json({ message: 'O tipo de atividade nao existe para que seja deletado' });
    }
    ;
    yield TipoAtividadeController_1.default.delete(id);
    return response.status(201).json({ message: 'Tipo de atividade deletada com sucesso', id });
}));
router.put('/tipoatividade/update/:id', (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    const tipoAtividadeRepository = typeorm_1.getCustomRepository(TipoAtividadeRepository_1.TipoAtivdadeRepository);
    const { id } = request.params;
    const { nome_atividade, modalidade_atividade, gera_arrecadao_atividade, descricao } = request.body;
    const tipoAtividade = yield TipoAtividadeController_1.default.buscarTipoAtivdade(id);
    if (!tipoAtividade) {
        return response.status(400).json({ message: 'O tipo de atividade nao existe' });
    }
    ;
    tipoAtividade.nome_atividade = nome_atividade || tipoAtividade.nome_atividade;
    tipoAtividade.modalidade_atividade = modalidade_atividade || tipoAtividade.modalidade_atividade;
    tipoAtividade.gera_arrecadao_atividade = gera_arrecadao_atividade || tipoAtividade.gera_arrecadao_atividade;
    tipoAtividade.descricao = descricao || tipoAtividade.descricao;
    yield tipoAtividadeRepository.save(tipoAtividade);
    return response.status(201).json(tipoAtividade);
}));
// IGREJA
router.get('/igreja', authenticate_1.default, (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    const listagemIgreja = yield IgrejaController_1.default.index();
    return response.status(201).json(listagemIgreja);
}));
router.post('/igreja/create', (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    const igrejaRepository = typeorm_1.getCustomRepository(IgrejaRepository_1.IgrejaRepository);
    const { nome_igreja, tipo_igreja, logo_igreja, matriz_igreja, qtd_membro_igreja, rua_igreja, bairro_igreja, numero_residencia, complemento_residencia_igreja, cep_igreja, cnpj_igreja, cidade_igreja, estado_igreja, pais_igreja, idUsuario } = request.body;
    const igrejaExiste = yield igrejaRepository.findOne({ nome_igreja });
    if (igrejaExiste) {
        return response.status(400).json({ message: 'A igreja já existe' });
    }
    ;
    const usuarioExiste = yield UsuarioController_1.default.buscarUsuario(idUsuario);
    if (!usuarioExiste) {
        return response.status(400).json({ message: 'Atribua um responsável para a igreja.' });
    }
    ;
    const igreja = new Igreja_1.Igreja(nome_igreja, tipo_igreja, logo_igreja, matriz_igreja, qtd_membro_igreja, rua_igreja, bairro_igreja, numero_residencia, complemento_residencia_igreja, cep_igreja, cnpj_igreja, cidade_igreja, estado_igreja, pais_igreja, idUsuario);
    yield IgrejaController_1.default.create(igreja);
    return response.status(201).json({ igreja, idUsuario });
}));
router.put('/igreja/update/:id', (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    const igrejaRepository = typeorm_1.getCustomRepository(IgrejaRepository_1.IgrejaRepository);
    const { id } = request.params;
    const { nome_igreja, tipo_igreja, logo_igreja, matriz_igreja, qtd_membro_igreja, cnpj_igreja, rua_igreja, bairro_igreja, numero_residencia, complemento_residencia_igreja, cidade_igreja, estado_igreja, pais_igreja, cep_igreja } = request.body;
    const igreja = yield IgrejaController_1.default.buscarIgreja(id);
    if (!igreja) {
        return response.status(400).json({ message: 'A igreja nao existe' });
    }
    ;
    igreja.nome_igreja = nome_igreja || igreja.nome_igreja;
    igreja.tipo_igreja = tipo_igreja || igreja.tipo_igreja;
    igreja.logo_igreja = logo_igreja || igreja.logo_igreja;
    igreja.matriz_igreja = matriz_igreja || igreja.matriz_igreja;
    igreja.qtd_membro_igreja = qtd_membro_igreja || igreja.qtd_membro_igreja;
    igreja.rua_igreja = rua_igreja || igreja.rua_igreja;
    igreja.bairro_igreja = bairro_igreja || igreja.bairro_igreja;
    igreja.numero_residencia = numero_residencia || igreja.numero_residencia;
    igreja.complemento_residencia_igreja = complemento_residencia_igreja || igreja.complemento_residencia_igreja;
    igreja.cidade_igreja = cidade_igreja || igreja.cidade_igreja;
    igreja.estado_igreja = estado_igreja || igreja.estado_igreja;
    igreja.pais_igreja = pais_igreja || igreja.pais_igreja,
        igreja.cnpj_igreja = cnpj_igreja || igreja.cnpj_igreja;
    igreja.cep_igreja = cep_igreja || igreja.cep_igreja;
    yield igrejaRepository.save(igreja);
    return response.status(201).json(igreja);
}));
router.delete('/igreja/delete/:id', (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = request.params;
    const igreja = yield IgrejaController_1.default.buscarIgreja(id);
    if (!igreja) {
        return response.status(400).json({ message: 'A igreja nao existe para que seja deletada' });
    }
    ;
    yield IgrejaController_1.default.delete(id);
    return response.status(201).json({ message: 'Igreja deletada com sucesso', id });
}));
// ATIVIDADE
router.get('/atividade', (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    const listagemAtividade = yield AtividadeController_1.default.index();
    return response.status(201).json(listagemAtividade);
    ;
}));
router.post('/atividade/create', (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    const { data_atividade, hora_inicio_atividade, hora_termino_atividade, qtd_vititantes_atividade, qtd_membros_atividade, tema_atividade, responsavel_atividade, dizimo_atividade, oferta_atividade, numero_conciliacao_atividade, numero_decisoes_atividade, preleitor_atividade, observacao_atividade, IDtipoAtividade, IDigreja } = request.body;
    const tipoAtividadeExiste = yield TipoAtividadeController_1.default.buscarTipoAtivdade(IDtipoAtividade);
    const igrejaExiste = yield IgrejaController_1.default.buscarIgreja(IDigreja);
    if (!tipoAtividadeExiste) {
        return response.status(400).json({ message: 'O tipo de atividade informado não existe.' });
    }
    ;
    if (!igrejaExiste) {
        return response.status(400).json({ message: 'A igreja informada não existe.' });
    }
    ;
    const atividade = new Atividade_1.Atividade(data_atividade, hora_inicio_atividade, hora_termino_atividade, qtd_vititantes_atividade, qtd_membros_atividade, tema_atividade, responsavel_atividade, dizimo_atividade, oferta_atividade, numero_conciliacao_atividade, numero_decisoes_atividade, preleitor_atividade, observacao_atividade, IDtipoAtividade, IDigreja);
    yield AtividadeController_1.default.create(atividade);
    return response.status(201).json({ atividade, IDtipoAtividade, IDigreja });
}));
router.put('/atividade/update/:id', (request, response) => __awaiter(void 0, void 0, void 0, function* () { }));
router.delete('/atividade/delete/:id', (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = request.params;
    const atividade = yield AtividadeController_1.default.buscarIDAtividade(id);
    if (!atividade) {
        return response.status(400).json({ message: 'A Atividade não existe para que seja deletada' });
    }
    ;
    yield AtividadeController_1.default.delete(id);
    return response.status(201).json({ message: 'Atividade deletada com sucesso', id });
}));
//AUTENTICAÇÃO
router.post('/usuario/authenticate', AuthenticateController_1.default.authenticate);
