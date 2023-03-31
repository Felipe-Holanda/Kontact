import { Request, Response, NextFunction } from 'express'
import AppError from '../../errors/AppError.class'
import Contact from '../../models/contacts.model'

export default async function verifyMail(req: Request, res: Response, next: NextFunction): Promise<void> {
    const { id } = req.body.user

    const { email, secondaryEmail } = req.body

    const mainMail = await Contact.find({ email, owner: id })

    if (mainMail.length > 0) throw new AppError('Este e-mail já está cadastrado em um de seus contatos.', 400)

    const mainMail2 = await Contact.find({ email: secondaryEmail, owner: id })

    if (mainMail2.length > 0) throw new AppError('Este e-mail já está cadastrado em um de seus contatos.', 400)

    const secondaryMail = await Contact.find({ secondaryEmail: email, owner: id })

    if (secondaryMail.length > 0) throw new AppError('Este e-mail já está cadastrado em um de seus contatos.', 400)

    const secondaryMail2 = await Contact.find({ secondaryEmail, owner: id })

    if (secondaryMail2.length > 0) throw new AppError('Este e-mail já está cadastrado em um de seus contatos.', 400)

    return next()
}