import  jwt from 'jsonwebtoken';
import { NextFunction, Request, Response } from 'express';

interface Itoken {
    idUsuario: string;
    iat: number;
    exp: number;
}

export default function authenticateMiddleWare(request: Request, response: Response, next: NextFunction) {
    const { authorization } = request.headers;

    if(!authorization) {
        return response.status(401).json({message: 'Usuario não autorizado'});
    }

    const token = authorization.replace('Bearer', '').trim();

    try {
        const informations = jwt.verify(token, process.env.SECRET_TOKEN as string);

        const { idUsuario } = informations as Itoken;

        request.userID = idUsuario;

        return next();
    } catch {
        return response.status(401);
        
    }
};
