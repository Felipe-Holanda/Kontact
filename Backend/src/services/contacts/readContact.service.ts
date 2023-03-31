import Contact from '../../models/contacts.model'
import { iContactRequest } from '../../interfaces'

export default async function readContactService(id: string): Promise<iContactRequest> {
    const contact = await Contact.findById(id)
    return contact
}