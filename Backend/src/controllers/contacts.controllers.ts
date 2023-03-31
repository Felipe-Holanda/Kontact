import { Request, Response } from 'express'
import createContactService from '../services/contacts/createContact.service'
import updateContactService from '../services/contacts/updateContact.service'
import deleteContactService from '../services/contacts/deleteContact.service'
import listContactsService from '../services/contacts/listContacts.service'

export async function createContact(req: Request, res: Response): Promise<Response> {
    const { id } = req.body.user
    const { name, email, phone, secondaryEmail, secondaryPhone } = req.body
    const contact = await createContactService(id, { name, email, phone, secondaryEmail, secondaryPhone })
    return res.status(201).json(contact)
}

export async function listContacts(req: Request, res: Response): Promise<Response> {
    const { id } = req.body.user
    const contacts = await listContactsService(id)
    return res.status(200).json(contacts)
}

export async function updateContact(req: Request, res: Response): Promise<Response> {
    const { id } = req.params
    const { name, email, phone, secondaryEmail, secondaryPhone } = req.body
    const contact = await updateContactService(id, { name, email, phone, secondaryEmail, secondaryPhone })
    return res.status(200).json(contact)
}

export async function deleteContact(req: Request, res: Response): Promise<Response> {
    await deleteContactService(req.params.id)
    return res.status(204).send()
}