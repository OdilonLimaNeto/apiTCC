import { getCustomRepository } from 'typeorm';
import { Request, Response } from "express";
import { EstadoRepository } from '../repositories/EstadoRepository';
import { PaisRepository } from '../repositories/PaisRepository';
import * as Yup from 'yup';



class EstadoController {
    async create(request: Request, response: Response) {
       const estadoRepository = getCustomRepository(EstadoRepository);
       const paisRepository = getCustomRepository(PaisRepository);

       const schema = Yup.object().shape({
           name: Yup.string().required(),
           ufEstado: Yup.string().required(),
           pais: Yup.string().required()
       });

       const { name, ufEstado, pais } = request.body;

       if(!(await schema.isValid(request.body))) {
           return response.status(400).json({message: 'Preencha todos os campos!'});
       }

       const nameAlreadyExists = await estadoRepository.findOne({ name });
       const ufEstadoAlreadyExists = await estadoRepository.findOne({ ufEstado });
       

       if(nameAlreadyExists) {
           return response.status(400).json({message: 'O nome do estado já existe!'});
       };

       if(ufEstadoAlreadyExists) {
           return response.status(400).json({message: 'A UF do estado já existe!'});
       };



       const estado = estadoRepository.create({
           name, 
           ufEstado,
           pais
       });

       await estadoRepository.save(estado)

       return response.status(201).json(estado);
    };


    async index(request: Request, response: Response) {
        const estadoRepository = getCustomRepository(EstadoRepository);

        const index = await estadoRepository.find();

        return response.json(index);
    };

    async show(request: Request, response: Response) {
        const estadoRepository = getCustomRepository(EstadoRepository);
        const { id } = request.params;

        const estado = await estadoRepository.findOne({id});

        return response.status(201).json(estado);
    }
};


export default new EstadoController();