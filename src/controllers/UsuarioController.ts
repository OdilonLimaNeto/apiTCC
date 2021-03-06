import { Request, Response } from 'express';
import { getCustomRepository, getManager } from 'typeorm';
import { Usuario } from '../entities/Usuario';
import { UsuarioRepository } from '../repositories/UsuarioRepository';
import CargoController from './CargoController';

import { hash } from 'bcrypt'

class UsuarioController {
    async create(request: Request, response: Response){
        const usuarioRepository = getCustomRepository(UsuarioRepository);

        const {
            primeiro_nome_usuario,
            ultimo_nome_usuario,
            email_usuario,
            senha_usuario,
            foto_perfil_usuario,
            rua_usuario,
            bairro_usuario,
            numero_residencia_usuario,
            complemento_residencia_usuario,
            cidade_usuario,
            estado_usuario,
            pais_usuario,
            idCargo,
        } = request.body;

        
        const cargo = await CargoController.buscarIDCargo(idCargo);


        const usuarioExiste = await usuarioRepository.findOne({email_usuario});

        if(usuarioExiste) {
            return response.status(400).json({message: 'Email já cadastrado'});
        };

        if(!cargo){
            return response.status(400).json({ message: 'O cargo não pode ser atribuido ao usuário, pois não existe!'});
        };

        const usuario = usuarioRepository.create({
            primeiro_nome_usuario,
            ultimo_nome_usuario,
            email_usuario,
            senha_usuario,
            foto_perfil_usuario,
            rua_usuario,
            bairro_usuario,
            numero_residencia_usuario,
            complemento_residencia_usuario,
            cidade_usuario,
            estado_usuario,
            pais_usuario,
            cargo,
        });

        await usuarioRepository.save(usuario);
        return response.status(201).json({usuario});
    };

    async index(request: Request, response: Response) {
        const usuarioRepository = getCustomRepository(UsuarioRepository);
        const listagem = await usuarioRepository.find();
        return response.json(listagem);
    };

    async delete(request: Request, response: Response) {
        const usuarioRepository = getCustomRepository(UsuarioRepository);
        const { id } = request.params;

         const usuarioExiste = await usuarioRepository.findOne(id);

         if (!usuarioExiste) {
             return response.status(400).json({message: 'O usuario nao existe para que seja deletado' })
         };

         await usuarioRepository.delete(id);
         return response.status(201).json({ message: 'Usuario deletado com sucesso', id })
    };

    async buscarUsuario(id: string) {
        const usuario = getManager().findOne(Usuario, id);
        return usuario;
    };
};




export default new UsuarioController();