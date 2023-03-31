import Contact from '../../models/contacts.model'
import { iContactRequest, iContact } from '../../interfaces'

export default async function createContactService(id: string, data: iContactRequest): Promise<iContactRequest> {
    const contact = new Contact({
        ...data,
        owner: id
    })
    await contact.save()
    return contact
}