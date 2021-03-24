import { Router } from 'express';
import CargoController from './controllers/CargoController';
import NivelAcessoController from './controllers/NivelAcessoController';
const router = Router();

// NIVEL DE ACESS
router.get('/nivelacesso', NivelAcessoController.index);
router.post('/nivelacesso/create', NivelAcessoController.create);
router.delete('/nivelacesso/delete/:id', NivelAcessoController.delete);
router.get('/cargos/:id', NivelAcessoController.show)

// CARGO
router.post('/cargo/create', CargoController.create);


export { router };