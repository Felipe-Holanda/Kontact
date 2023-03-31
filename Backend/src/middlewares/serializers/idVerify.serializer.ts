import { Request, Response, NextFunction } from 'express'
import AppError from '../../errors/AppError.class'

export default async function idVerify(req: Request, res: Response, next: NextFunction): Promise<void> {
    const id = req.params.id
    if (!id) throw new AppError('ID não enviado.', 400)
    const regex = /^[0-9a-fA-F]{24}$/;
    const isValidObjectId = regex.test(id);
    if (!isValidObjectId) throw new AppError('ID enviado é inválido.', 400)
    return next()
}