import { getCustomRepository } from 'typeorm';
import { Request, Response } from "express";
import { UsuarioRepository } from '../repositories/UsuarioRepository';




class UsuarioController {
    async create(request: Request, response: Response) {
        const usuarioRepository = getCustomRepository(UsuarioRepository);

        const {
            primaryName, 
            secondName, 
            email, 
            password, 
            rua, 
            bairro,
            cargo,
            homeNumber,
            complement,
            igreja,
            cidade
        } = request.body;

        const emailAlreadyExists = await usuarioRepository.findOne({email});

        if(emailAlreadyExists) {
            return response.status(400).json({message: 'O email informado já cadastrado.'});
        }

        

        const usuario = usuarioRepository.create({
            primaryName,
            secondName,
            email,
            password,
            rua,
            bairro,
            cargo,
            homeNumber,
            complement,
            igreja,
            cidade
        })

        await usuarioRepository.save(usuario);

        return response.status(201).json(usuario)
    };
}

export default new UsuarioController();