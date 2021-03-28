import { getManager, getCustomRepository } from 'typeorm';
import { Request, Response, Router } from 'express';
import CargoController from './controllers/CargoController';
import NivelAcessoController from './controllers/NivelAcessoController';
import { Cargo } from './models/Cargo';
import { CargoRepository } from './repositories/CargoRepository';
import UsuarioController from './controllers/UsuarioController';
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

    return response.status(201).json(cargoSalvo);

});
router.get('/cargo', CargoController.index);
router.put('/cargo/:id', async (request: Request, response: Response) => {
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


router.get('/usuario', UsuarioController.index);
router.post('/usuario/create', UsuarioController.create);


export { router };