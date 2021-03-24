import { getCustomRepository } from 'typeorm';
import { CargoRepository } from '../repositories/CargoRepository';
import * as Yup from 'yup';
import { Request, Response } from 'express';
import NivelAcessoController from './NivelAcessoController';

class CargoController {
    async create(request: Request, response: Response) {
        const cargoRepository = getCustomRepository(CargoRepository);
        const validation = Yup.object().shape({
            idnivelAcesso: Yup.string().required(),
            nome_cargo: Yup.string().required(),
            descricao: Yup.string().required(),
        });

        const {idnivelAcesso, nome_cargo, descricao} = request.body;

        if(!(await validation.isValid(request.body))) {
            return response.status(400).json({message: 'Preencha todos os campos'});
        };

        const cargoExiste = await cargoRepository.findOne({nome_cargo});
        const nivelAcesso = await NivelAcessoController.listarporID(idnivelAcesso);
        
        if (cargoExiste) {
            return response.status(400).json({ message: 'O nome do cargo ja existe'})
        };
        
        if(!nivelAcesso){
            return response.status(400).json({ message: 'O nivel de acesso nao existe'});
        };

        const cargo = cargoRepository.create({
            nivelAcesso,
            nome_cargo,
            descricao
        });

        await cargoRepository.save(cargo);
        return response.status(201).json(cargo);
    }
};

export default new CargoController();