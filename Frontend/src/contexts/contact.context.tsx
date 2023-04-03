import { createContext, useState, useCallback, PropsWithChildren, useEffect } from 'react';
import api from '../services/api';
import { toast } from 'react-hot-toast';

interface Contact {
    _id: string;
    name: string;
    email: string;
    phone: string;
    secondaryPhone: string;
    secondaryEmail: string;
    createdAt: string;
    updatedAt: string;
    __v: number;
}

interface ContactContextData {
    contacts: Contact[];
    createContact: (data: Contact) => Promise<void>;
    updateContact: (data: Contact, id: string) => Promise<void>;
    deleteContact: (id: string) => Promise<void>;
    listContacts: () => Promise<void>;
}

export const ContactContext = createContext({} as ContactContextData);

export const ContactProvider: React.FC<PropsWithChildren<{}>> = ({ children }) => {

    const [contacts, setContacts] = useState<Contact[]>([]);

    const createContact = useCallback(async (data: Contact) => {
        try {
            const response = await api.post('/contacts', data);

            setContacts([...contacts, response.data]);
        } catch (err) {
            toast.error(err.response.data.message);
        }
    }, [contacts]);

    const updateContact = useCallback(async (data: Contact, id: string) => {
        try {
            const response = await api.patch(`/contacts/${id}`, data);

            const newContacts = contacts.map(contact => {
                if (contact._id === data._id) {
                    return response.data;
                }

                return contact;
            });

            setContacts(newContacts);
        } catch (err) {
            toast.error(err.response.data.message);
        }
    }, [contacts]);

    const deleteContact = useCallback(async (id: string) => {
        try {
            await api.delete(`/contacts/${id}`);

            const newContacts = contacts.filter(contact => contact._id !== id);

            setContacts(newContacts);
        } catch (err) {
            toast.error(err.response.data.message);
        }
    }, [contacts]);

    const listContacts = useCallback(async () => {
        try {
            const response = await api.get('/contacts');

            setContacts(response.data);
        } catch (err) {
            toast.error(err.response.data.message);
        }
    }, []);

    return (
        <ContactContext.Provider value={{ contacts, createContact, updateContact, deleteContact, listContacts }}>
            {children}
        </ContactContext.Provider>
    );
};

export default ContactContext;