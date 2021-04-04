import { getCustomRepository } from 'typeorm';
import { Request, Response, Router } from 'express';
import CargoController from './controllers/CargoController';
import NivelAcessoController from './controllers/NivelAcessoController';
import { Cargo } from './entities/Cargo';
import { CargoRepository } from './repositories/CargoRepository';
import UsuarioController from './controllers/UsuarioController';
import { UsuarioRepository } from './repositories/UsuarioRepository';
import { TipoAtivdadeRepository } from './repositories/TipoAtividadeRepository';
import { TipoAtividade } from './entities/TipoAtividade';
import TipoAtividadeController from './controllers/TipoAtividadeController';
import IgrejaController from './controllers/IgrejaController';
import { IgrejaRepository } from './repositories/IgrejaRepository';
import { Igreja } from './entities/Igreja';
const router = Router();

// NIVEL DE ACESSO
router.get('/nivelacesso', NivelAcessoController.index);
router.post('/nivelacesso/create', NivelAcessoController.create);
router.delete('/nivelacesso/delete/:id', NivelAcessoController.delete);
router.get('/nivelacesso/cargos/:idNivelAcesso', async (request: Request, response: Response) => {
    const { idNivelAcesso } = request.params;

    const cargos = await NivelAcessoController.mostrarCargosdoNiveldeAcesso(idNivelAcesso);
    return response.json(cargos)
});

// CARGO
router.get('/cargo', CargoController.index);
router.delete('/cargo/delete/:id', CargoController.delete);
router.post('/cargo/create', async (request: Request, response: Response) =>{
    const cargoRepository = getCustomRepository(CargoRepository);
   
    const {idnivelAcesso, nome_cargo, descricao} = request.body;

    const nivelAcesso = await NivelAcessoController.buscarIDNivelAcesso(idnivelAcesso);
    const cargoExiste = await cargoRepository.findOne({nome_cargo});

    if(!nivelAcesso){
        return response.status(400).json({ message: 'O nivel de acesso nao existe'});
    };

    if(cargoExiste){ 
        return response.status(400).json({message: 'O nome cargo já existe!'});
    };

    const cargo = new Cargo(nome_cargo, descricao, nivelAcesso);
    const cargoSalvo = await CargoController.create(cargo);
    
    return response.status(201).json({cargoSalvo, nivelAcesso});
});
router.put('/cargo/update/:id', async (request: Request, response: Response) => {
    const cargoRepository = getCustomRepository(CargoRepository);
    const { id } = request.params
    const { nome_cargo, descricao } = request.body;

    const cargoExiste = await CargoController.buscarIDCargo(id);

    if(!cargoExiste) {
        return response.status(400).json({ message: 'O cargo nao existe' });
    };

    cargoExiste.nome_cargo = nome_cargo || cargoExiste.nome_cargo
    cargoExiste.descricao = descricao || cargoExiste.descricao

    await cargoRepository.save(cargoExiste);

    return response.status(201).json(cargoExiste);

});
router.get('/cargo/usuarios/:idCargo', async (request: Request, response: Response) => {
    const { idCargo } = request.params;

    const cargos = await CargoController.mostrarUsuariosDeUmCargo(idCargo);
    return response.json(cargos)
});

// USUARIO
router.get('/usuario', UsuarioController.index);
router.post('/usuario/create', UsuarioController.create);
router.delete('/usuario/delete/:id', UsuarioController.delete)
router.put('/usuario/update/:id', async(request: Request, response: Response) => {
    const usuarioRepository = getCustomRepository(UsuarioRepository);
    const { id } = request.params
    const {
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
    } = request.body;

    const usuario = await UsuarioController.buscarUsuario(id);

    if(!usuario) {
        return response.status(400).json({ message: 'O usuario nao existe' });
    };

    usuario.primeiro_nome_usuario = primeiro_nome_usuario || usuario.primeiro_nome_usuario
    usuario.ultimo_nome_usuario = ultimo_nome_usuario || usuario.ultimo_nome_usuario
    usuario.email_usuario = email_usuario || usuario.email_usuario
    usuario.senha_usuario = senha_usuario || usuario.senha_usuario
    usuario.foto_perfil_usuario = foto_perfil_usuario || usuario.foto_perfil_usuario
    usuario.rua_usuario = rua_usuario || usuario.rua_usuario
    usuario.bairro_usuario = bairro_usuario || usuario.bairro_usuario
    usuario.numero_residencia_usuario = numero_residencia_usuario || usuario.numero_residencia_usuario
    usuario.complemento_residencia_usuario = complemento_residencia_usuario || usuario.complemento_residencia_usuario
    usuario.cidade_usuario = cidade_usuario || usuario.cidade_usuario
    usuario.estado_usuario = estado_usuario || usuario.estado_usuario
    usuario.pais_usuario = pais_usuario || usuario.pais_usuario

    await usuarioRepository.save(usuario);
    return response.status(201).json(usuario);
});

// TIPO-ATIVIDADE
router.get('/tipoatividade', async (request: Request, response: Response) => {
    const listagem = await TipoAtividadeController.index()
    return response.json(listagem)
})
router.post('/tipoatividade/create', async (request: Request, response: Response) =>{
    const tipoAtividadeRepository = getCustomRepository(TipoAtivdadeRepository);
   
    const {
        nome_atividade,
        modalidade_atividade,
        gera_arrecadao_atividade,
        descricao
    } = request.body;

    const tipoatividadeExiste = await tipoAtividadeRepository.findOne({nome_atividade});

    if(tipoatividadeExiste){
        return response.status(400).json({ message: 'O tipo de atividade já existe'});
    };

    const tipAtividade = new TipoAtividade(nome_atividade, modalidade_atividade, gera_arrecadao_atividade, descricao);
    const tipoatividadeSalva = await TipoAtividadeController.create(tipAtividade);

    return response.status(201).json(tipoatividadeSalva);
});
router.delete('/tipoatividade/delete/:id', async (request: Request, response:Response) => {
    const { id } = request.params;
    const tipoAtividade = await TipoAtividadeController.buscarTipoAtivdade(id);

    if (!tipoAtividade) {
        return response.status(400).json({message: 'O tipo de atividade nao existe para que seja deletado' })
    };

    await TipoAtividadeController.delete(id);
    return response.status(201).json({ message: 'Tipo de atividade deletada com sucesso', id })

});
router.put('/tipoatividade/update/:id', async (request: Request, response: Response) => {
    const tipoAtividadeRepository = getCustomRepository(TipoAtivdadeRepository);
    
    const { id } = request.params;
    
    const { 
        nome_atividade,
        modalidade_atividade,
        gera_arrecadao_atividade,
        descricao 
    } = request.body;

    const tipoAtividade = await TipoAtividadeController.buscarTipoAtivdade(id);

    if(!tipoAtividade) {
        return response.status(400).json({ message: 'O tipo de atividade nao existe' });
    };

    tipoAtividade.nome_atividade = nome_atividade || tipoAtividade.nome_atividade
    tipoAtividade.modalidade_atividade = modalidade_atividade || tipoAtividade.modalidade_atividade
    tipoAtividade.gera_arrecadao_atividade = gera_arrecadao_atividade || tipoAtividade.gera_arrecadao_atividade
    tipoAtividade.descricao = descricao || tipoAtividade.descricao

    await tipoAtividadeRepository.save(tipoAtividade);
    return response.status(201).json(tipoAtividade);
});

// IGREJA
router.get('/igreja', async (request: Request, response: Response) => {
    const listagemIgreja = await IgrejaController.index();
    return response.status(201).json(listagemIgreja);
});
router.post('/igreja/create', async (request: Request, response: Response) => {
    const igrejaRepository = getCustomRepository(IgrejaRepository);

        const { 
            nome_igreja,
            tipo_igreja,
            logo_igreja,
            matriz_igreja,
            qtd_membro_igreja,
            rua_igreja,
            bairro_igreja,
            numero_residencia,
            complemento,
            cidade_igreja,
            estado_igreja,
            pais_igreja,
            idUsuario
         } = request.body;

        const igrejaExiste = await igrejaRepository.findOne({nome_igreja});

        if(igrejaExiste) {
            return response.status(400).json({message: 'A igreja já existe'});
        };

        const usuarioExiste = await UsuarioController.buscarUsuario(idUsuario);

        if(!usuarioExiste) {
            return response.status(400).json({message: 'Atribua um responsável para a igreja.'});
        };

        const igreja = new Igreja(
            nome_igreja, 
            tipo_igreja, 
            logo_igreja, 
            matriz_igreja, 
            qtd_membro_igreja, 
            rua_igreja, 
            bairro_igreja, 
            numero_residencia, 
            complemento, 
            cidade_igreja, 
            estado_igreja, 
            pais_igreja, 
            idUsuario,
            );
        
        await IgrejaController.create(igreja)
        return response.status(201).json({igreja, idUsuario});
});
router.put('/igreja/update/:id', async (request: Request, response: Response) => {
    const igrejaRepository = getCustomRepository(IgrejaRepository);
    
    const { id } = request.params;
    
    const { 
        nome_igreja,
        tipo_igreja,
        logo_igreja,
        matriz_igreja,
        qtd_membro_igreja,
        rua_igreja,
        bairro_igreja,
        numero_residencia,
        complemento,
        cidade_igreja,
        estado_igreja,
        pais_igreja
    } = request.body;

    const igreja = await IgrejaController.buscarIgreja(id);

    if(!igreja) {
        return response.status(400).json({ message: 'A igreja nao existe' });
    };

    igreja.nome_igreja = nome_igreja || igreja.nome_igreja
    igreja.tipo_igreja = tipo_igreja || igreja.tipo_igreja
    igreja.logo_igreja = logo_igreja || igreja.logo_igreja
    igreja.matriz_igreja = matriz_igreja || igreja.matriz_igreja
    igreja.qtd_membro_igreja = qtd_membro_igreja || igreja.qtd_membro_igreja
    igreja.rua_igreja = rua_igreja || igreja.rua_igreja
    igreja.bairro_igreja = bairro_igreja || igreja.bairro_igreja
    igreja.numero_residencia = numero_residencia || igreja.numero_residencia
    igreja.complemento = complemento || igreja.complemento
    igreja.cidade_igreja = cidade_igreja || igreja.cidade_igreja
    igreja.estado_igreja = estado_igreja || igreja.estado_igreja
    igreja.pais_igreja = pais_igreja || igreja.pais_igreja

    await igrejaRepository.save(igreja);
    return response.status(201).json(igreja);
});
router.delete('/igreja/delete/:id', async (request: Request, response: Response) => {
    const { id } = request.params;
    const igreja = await IgrejaController.buscarIgreja(id);

    if (!igreja) {
        return response.status(400).json({message: 'A igreja nao existe para que seja deletada' })
    };

    await IgrejaController.delete(id);
    return response.status(201).json({ message: 'Igreja deletada com sucesso', id })
});

export { router };
