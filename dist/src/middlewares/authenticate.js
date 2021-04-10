"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
function authenticateMiddleWare(request, response, next) {
    const { authorization } = request.headers;
    if (!authorization) {
        return response.status(401).json({ message: 'Usuario não autorizado' });
    }
    const token = authorization.replace('Bearer', '').trim();
    try {
        const informations = jsonwebtoken_1.default.verify(token, process.env.SECRET_TOKEN);
        const { idUsuario } = informations;
        request.userID = idUsuario;
        return next();
    }
    catch (_a) {
        return response.status(401);
    }
}
exports.default = authenticateMiddleWare;
;
