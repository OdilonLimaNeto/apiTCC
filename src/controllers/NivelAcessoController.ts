import { getCustomRepository, getManager } from 'typeorm';
import { Request, Response } from "express";
import { NivelAcessoRepository } from '../repositories/NivelAcessoRepository';
import * as Yup from 'yup';
import { NivelAcesso } from '../models/NivelAcesso';


class NivelAcessoController {
    async index(request: Request, response: Response) {
        const nivelacessoRepository = getCustomRepository(NivelAcessoRepository);

        const listagem = await nivelacessoRepository.find();

        return response.json(listagem);
    };

    async create(request: Request, response: Response) {
        const nivelacessoRepository = getCustomRepository(NivelAcessoRepository);

        const validation = Yup.object().shape({
            titulo_acesso: Yup.string().required(),
            tipo_acesso: Yup.number().required(),
        });

        const { titulo_acesso, tipo_acesso } = request.body;

        if(!(await validation.isValid(request.body))) {
            return response.status(400).json({message: 'Preencha todos os campos'});
        };

        const nivelacessoExiste = await nivelacessoRepository.findOne({titulo_acesso});

        if(nivelacessoExiste) {
            return response.status(400).json({message: 'O nivel de acesso já existe'});
        };

        const tipoacessoExiste = await nivelacessoRepository.findOne({tipo_acesso});

        if(tipoacessoExiste) {
            return response.status(400).json({message: 'Esse tipo de acesso já foi atribuido para outro nivel de acesso'});
        };

        const nivelAcesso = nivelacessoRepository.create({
            titulo_acesso, tipo_acesso
        });

        await nivelacessoRepository.save(nivelAcesso);

        return response.status(201).json(nivelAcesso);
    };

    async delete(request: Request, response: Response) {
        const nivelacessoRepository = getCustomRepository(NivelAcessoRepository);
        const { id } = request.params;

         const nivelDeAcessoExiste = await nivelacessoRepository.findOne(id);

         if (!nivelDeAcessoExiste) {
             return response.status(400).json({message: 'O nivel de acesso nao existe para que seja deletado' })
         };

         await nivelacessoRepository.delete(id);
        
         return response.status(201).json({message: 'Nivel de acesso deletado com sucesso'})
    };

    async listarporID(id: string) {

        const nivelAcesso = await getManager().findOne(NivelAcesso, id);

        return nivelAcesso;
    };

    async mostrarCargosdoNiveldeAcesso(id: string) {
        const nivelacesso = await getManager().findOne(NivelAcesso, id, {
            relations: ['cargos']
        })

        return nivelacesso.cargos;
    };  
}

export default new NivelAcessoController();
