import Contact from '../../models/contacts.model'

export default async function deleteContactService(id: string): Promise<void> {
    await Contact.findByIdAndDelete({ _id: id })

    return;
}