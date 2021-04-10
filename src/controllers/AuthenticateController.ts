import { Request, Response } from 'express';
import { getCustomRepository } from 'typeorm';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { UsuarioRepository } from '../repositories/UsuarioRepository';


class AuthenticateController {
    async authenticate (request: Request, response: Response) {
        const usuarioRepository = getCustomRepository(UsuarioRepository);

        const { email_usuario, senha_usuario } = request.body;

        const usuarioExiste = await usuarioRepository.findOne({ where: { email_usuario }});

        if(!usuarioExiste) {
            return response.status(400).json({message: 'O email informado não existe'});
        }

        const validarSenha = await bcrypt.compare(senha_usuario, usuarioExiste.senha_usuario);

        if(!validarSenha) {
            return response.status(400).json({message: 'A senha informada está errada'});
        }

        const token = jwt.sign({idUsuario: usuarioExiste.id_usuario}, process.env.SECRET_TOKEN as string);

        const { id_usuario } = usuarioExiste

        return response.status(201).json({
            id_usuario,
            token
        });
    }
        
}

export default new AuthenticateController();