import { Request, Response, NextFunction } from 'express'
import AppError from './AppError.class'
import fs from 'fs'
import path, { resolve } from 'path'
import { promisify } from 'util'

export default function errorHandler(
    err: Error,
    request: Request,
    response: Response,
    _: NextFunction,
): Response {
    if (err instanceof AppError) {
        return response.status(err.status).json({
            message: err.message,
        });
    }

    // Se não estiver em ambiênte de desenvolvimento, salva o erro no arquivo errors.log
    if (process.env.NODE_ENV === 'development') {
        console.log(err);
    } else {
        fs.appendFile(
            path.resolve(__dirname, '..', '..', 'errors.log'),
            `${err.message} - ${new Date().toLocaleString('pt-BR')} - ${request.method} - ${request.url})\n`,
            (err) => {
                if (err) {
                    console.log(err);
                }
            });
    }

    return response.status(500).json({
        message: 'Internal server error',
    });
}
