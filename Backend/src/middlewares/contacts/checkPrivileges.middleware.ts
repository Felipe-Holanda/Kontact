import { Request, Response, NextFunction } from 'express'
import AppError from '../../errors/AppError.class'
import Contact from '../../models/contacts.model'

export default async function checkPrivileges(req: Request, res: Response, next: NextFunction): Promise<void> {
    const { id } = req.params
    const { id: userId } = req.body.user

    const contact = await Contact.findById(id)

    if (!contact) throw new AppError('Contato não encontrado', 404)

    if (contact.owner !== userId) throw new AppError('Você não pode acessar este contato.', 403)

    return next()
}