import { getCustomRepository } from 'typeorm';
import { CargoRepository } from '../repositories/CargoRepository';
import * as Yup from 'yup';
import { Request, Response } from 'express';
import { NivelAcessoRepository } from '../repositories/NivelAcessoRepository';

class CargoController {
    async create(request: Request, response: Response) {
        const cargoRepository = getCustomRepository(CargoRepository);
        const nivelAcessoRepository = getCustomRepository(NivelAcessoRepository);
        const validation = Yup.object().shape({
            nivelAcesso: Yup.string().required(),
            nome_cargo: Yup.string().required(),
            descricao: Yup.string().required(),
        });

        const {nivelAcesso, nome_cargo, descricao} = request.body;

        if(!(await validation.isValid(request.body))) {
            return response.status(400).json({message: 'Preencha todos os campos'});
        };

        const cargoExiste = await cargoRepository.findOne({nome_cargo});
        
        if (cargoExiste) {
            return response.status(400).json({ message: 'O nome do cargo ja existe'})
        };
        
        const nivelAcessoExiste = await nivelAcessoRepository.findOne({id_nivel_acesso: nivelAcesso});

        if(!nivelAcessoExiste){
            return response.status(400).json({ message: 'O nivel de Acesso nao existe'});
        };

        const cargo = cargoRepository.create({
            nivelAcesso: nivelAcessoExiste.id_nivel_acesso,
            nome_cargo,
            descricao
        });

        await cargoRepository.save(cargo);
        return response.status(201).json(cargo);
    }
};

export default new CargoController();