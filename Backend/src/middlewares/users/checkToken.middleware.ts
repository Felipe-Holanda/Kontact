import { Request, Response, NextFunction } from 'express'
import AppError from '../../errors/AppError.class'
import { verify } from 'jsonwebtoken'
import User from '../../models/user.model'
import 'dotenv/config'

export default async function checkToken(req: Request, res: Response, next: NextFunction): Promise<void> {
    const token = req.headers.authorization ? req.headers.authorization.split(' ')[1] : null

    if (!token) throw new AppError('Token não encontrado.', 401)

    try {
        const { id } = verify(token, process.env.SECRET_KEY) as { id: string }

        const user = await User.findById(id)
        if (!user) throw new AppError('Usuário não encontrado.', 404)

        req.body.user = { id }

        return next()
    } catch (err) {
        throw new AppError('Token inválido.', 401)
    }

}