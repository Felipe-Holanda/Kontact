import { Request, Response, NextFunction } from 'express'
import AppError from '../../errors/AppError.class'
import User from '../../models/user.model'

export default async function checkUniqueMail(req: Request, res: Response, next: NextFunction): Promise<void> {
    const { email } = req.body

    const mainMail = await User.findOne({ email })

    if (mainMail) throw new AppError('Este e-mail já está cadastrado', 400)

    const secondaryMail = await User.findOne({ secondaryEmail: email })

    if (secondaryMail) throw new AppError('Este e-mail já está cadastrado', 400)

    return next()
}