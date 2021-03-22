import { Router } from 'express';
import NivelAcessoController from './controllers/NivelAcessoController';
const router = Router();

// NIVEL DE ACESSO

router.get('/nivelacesso', NivelAcessoController.listar);
router.post('/nivelacesso/create', NivelAcessoController.create);
router.delete('/nivelacesso/delete/:id', NivelAcessoController.delete);

export { router };