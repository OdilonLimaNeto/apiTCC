import { getManager } from 'typeorm';
import { Request, Response, Router } from 'express';
import CargoController from './controllers/CargoController';
import NivelAcessoController from './controllers/NivelAcessoController';
import { Cargo } from './models/Cargo';
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
   
    const {idnivelAcesso, nome_cargo, descricao} = request.body;

    const nivelAcesso = await NivelAcessoController.listarporID(idnivelAcesso);

    if(nivelAcesso){
        const cargo = new Cargo(nome_cargo, descricao, nivelAcesso);
        const cargoSalvo = await CargoController.create(cargo);
        return response.status(201).json(cargoSalvo);
    }else {
        return response.status(400).json({ message: 'O nivel de acesso nao existe'});
    };


});
router.get('/cargo', CargoController.index);

export { router };