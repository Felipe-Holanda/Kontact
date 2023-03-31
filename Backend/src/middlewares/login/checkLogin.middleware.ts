import { Request, Response, NextFunction } from 'express'
import AppError from '../../errors/AppError.class'
import User from '../../models/user.model'
import { compare } from 'bcryptjs'

export default async function checkLogin(req: Request, res: Response, next: NextFunction): Promise<void> {
    const { email, password } = req.body as { email: string, password: string }

    const user = await User.findOne({ email })

    if (!user) throw new AppError('Email ou senha incorretos.', 403)

    const passwordMatch = await compare(password, user.password)

    if (!passwordMatch) throw new AppError('Email ou senha incorretos.', 403)

    return next()
}