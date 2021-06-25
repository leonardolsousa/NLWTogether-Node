import { Request, Response, NextFunction } from "express";
import { verify } from "jsonwebtoken";

interface IPayload {
    sub: string;
}

export function ensureAuthenticated(request: Request, response: Response, next: NextFunction) {

    // Receber o token
    const authToken = request.headers.authorization;

    // Validar se token está preenchido
    if (!authToken) {
        return response.status(401).end();
    }

    const [, token] = authToken.split("") //a , dentro do array ignora o primeiro response

    try {
        // Validar se token é válido
        const { sub } = verify(token, "a56e3a912958d982ca420ce9f1620092") as IPayload;

        // Recuperar infos do user
        request.user_id = sub;

        return next();

    } catch (error) {
        return response.status(401).end();
    }
}