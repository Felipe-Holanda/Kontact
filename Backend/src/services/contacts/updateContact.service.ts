import Contact from '../../models/contacts.model';
import { iContactUpdateRequest, iContactRequest } from '../../interfaces';

export default async function updateContactService(id: string, data: iContactUpdateRequest): Promise<iContactRequest> {
    const contact = await Contact.findById({ _id: id })

    if (data.name) contact.name = data.name
    if (data.phone) contact.phone = data.phone
    if (data.secondaryPhone) contact.secondaryPhone = data.secondaryPhone
    if (data.email) contact.email = data.email
    if (data.secondaryEmail) contact.secondaryEmail = data.secondaryEmail
    contact.updatedAt = new Date()

    return await contact.save()
}