import Contact from '../../models/contacts.model'
import { iContactRequest } from '../../interfaces'

export default async function listContactsService(id: string): Promise<iContactRequest[]> {
    const contacts = await Contact.find({ owner: id })

    return contacts
}