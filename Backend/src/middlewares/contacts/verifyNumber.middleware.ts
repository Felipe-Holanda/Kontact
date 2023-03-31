import { Request, Response, NextFunction } from 'express'
import AppError from '../../errors/AppError.class'
import Contact from '../../models/contacts.model'

export default async function verifyNumber(req: Request, res: Response, next: NextFunction): Promise<void> {
    const { id } = req.body.user

    const { phone, secondaryPhone } = req.body

    const mainPhone = await Contact.find({ phone, owner: id })

    if (mainPhone.length > 0) throw new AppError('Este número já está cadastrado em um de seus contatos.', 400)

    const mainPhone2 = await Contact.find({ phone: secondaryPhone, owner: id })

    if (mainPhone2.length > 0) throw new AppError('Este número já está cadastrado em um de seus contatos.', 400)

    const secondaryPhone1 = await Contact.find({ secondaryPhone: phone, owner: id })

    if (secondaryPhone1.length > 0) throw new AppError('Este número já está cadastrado em um de seus contatos.', 400)

    const secondaryPhone2 = await Contact.find({ secondaryPhone, owner: id })

    if (secondaryPhone2.length > 0) throw new AppError('Este número já está cadastrado em um de seus contatos.', 400)

    return next()
}