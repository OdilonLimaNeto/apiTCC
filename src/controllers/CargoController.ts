import { getCustomRepository, getManager } from 'typeorm';
import { CargoRepository } from '../repositories/CargoRepository';
import { Request, Response } from 'express';
import { Cargo } from '../entities/Cargo';

class CargoController {
    async index() {
        const cargos = await getManager().find(Cargo, {
            select: [
                'id_cargo',
                'nome_cargo',
                'descricao',
                'createdAt',
                'nivelAcesso'
            ],
            
            relations: ['nivelAcesso']
        });
        return cargos;
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

    async mostrarUsuariosDeUmCargo(id: string) {
        const cargo = await getManager().findOne(Cargo, id, {
            relations: ['usuarios']
        })

        return cargo.usuarios;
    };

};



export default new CargoController();