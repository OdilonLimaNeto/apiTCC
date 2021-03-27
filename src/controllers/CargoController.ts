import { getCustomRepository, getManager } from 'typeorm';
import { CargoRepository } from '../repositories/CargoRepository';
import { Request, Response } from 'express';
import { Cargo } from '../models/Cargo';

class CargoController {
    async index(request: Request, response: Response) {
        const cargoRepository = getCustomRepository(CargoRepository);

        const listagem = await cargoRepository.find();

        return response.json(listagem);
    };

    async create(cargo: Cargo) {
        const criarCargo = await getManager().save(cargo);
        return criarCargo;
    };

    async delete(request: Request, response: Response) {
        const cargoRepository = getCustomRepository(CargoRepository);
        const { id } = request.params;

         const cargoExiste = await cargoRepository.findOne(id);

         if (!cargoExiste) {
             return response.status(400).json({message: 'O cargo nao existe para que seja deletado' })
         };

         await cargoRepository.delete(id);
        
         return response.status(201).json({message: 'Nivel de acesso deletado com sucesso', id})
    };

    async buscarIDCargo(id: string) {

        const cargo = await getManager().findOne(Cargo, id);
        return cargo;
    };


};



export default new CargoController();