import { Request, Response, NextFunction } from 'express'
import AppError from '../../errors/AppError.class'
import User from '../../models/user.model'

export default async function checkUniquePhone(req: Request, res: Response, next: NextFunction): Promise<void> {
    const { phone } = req.body

    const mainPhone = await User.findOne({ phone })

    if (mainPhone) throw new AppError('Este número já está cadastrado', 400)

    const secondaryPhone = await User.findOne({ secondaryPhone: phone })

    if (secondaryPhone) throw new AppError('Este número já está cadastrado', 400)

    return next()
}