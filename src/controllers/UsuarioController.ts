import { Request, Response } from 'express';
import { getCustomRepository } from 'typeorm';
import * as Yup from 'yup';
import { UsuarioRepository } from '../repositories/UsuarioRepository';

class UsuarioController {
    async create(request: Request, response: Response){
        const usuarioRepository = getCustomRepository(UsuarioRepository);
        const validation = Yup.object().shape({
            primeir_nome_usuario: Yup.string().required(),
            segundo_nome_usuario: Yup.string().required(),
            email_usuario: Yup.string().email().required(),
            senha_usuario: Yup.number().required(),
            foto_perfil_usuario: Yup.string().required(),
            rua_usuario: Yup.string().required(),
            bairro_usuario: Yup.string().required(),
            numero_residencia_usuario: Yup.number().required(),
            complemento_residencia_usuario: Yup.string().required(),
            cidade_usuario: Yup.string().required(),
            estado_usuario: Yup.string().required(),
            pais_usuario: Yup.string().required(),
        });

        const {
            primeir_nome_usuario,
            segundo_nome_usuario,
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
        } = request.body;

        if(!(await validation.isValid(request.body))) {
            return response.status(400).json({message: 'Preencha todos os campos'});
        };

        const usuarioExiste = await usuarioRepository.findOne({email_usuario});

        if(usuarioExiste) {
            return response.status(400).json({message: 'Usuario ja existe'});
        };

        const usuario = usuarioRepository.create({
            primeir_nome_usuario,
            segundo_nome_usuario,
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
        });

        await usuarioRepository.save(usuario);

        return response.status(201).json(usuario);
    };

    async listar(request: Request, response: Response) {
        const usuarioRepository = getCustomRepository(UsuarioRepository);

        const listagem = await usuarioRepository.find();

        return response.json(listagem);
    }
};

export default new UsuarioController();