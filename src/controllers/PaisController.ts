import { Request, Response } from "express";
import { getCustomRepository } from "typeorm";
import { PaisRepository } from "../repositories/PaisRepository";



class PaisController{
    async create(request: Request, response:Response) {
        const paisRepository = getCustomRepository(PaisRepository);

        const { name } = request.body;

        const paisAlreadyExists = await paisRepository.findOne({ name }, {relations: ['estados']});

        if(paisAlreadyExists) {
            return response.status(400).json({message: 'País já cadastrado!'});
        };

        const pais = paisRepository.create({ name });

        await paisRepository.save(pais);

        return response.status(201).json(pais);
    };

    async index(request: Request, response: Response) {
        const paisRepository = getCustomRepository(PaisRepository);

        const index = await paisRepository.find();

        return response.json(index);
    }

 
};


export default new PaisController();