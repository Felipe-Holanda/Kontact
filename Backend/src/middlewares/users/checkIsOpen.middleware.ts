import { Request, Response, NextFunction } from 'express'
import AppError from '../../errors/AppError.class'
import User from '../../models/user.model'
import { iUserRequest } from '../../interfaces'

export default async function checkIsOpenMiddleware(req: Request, res: Response, next: NextFunction): Promise<void> {
    const id = req.params.id
    const target = await User.findById(id)
    if (!target) throw new AppError('Usuário não encontrado', 404)
    if (!target.sharing) throw new AppError('Este perfil é privado!', 403)
    return next()
}