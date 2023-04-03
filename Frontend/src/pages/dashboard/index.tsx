import { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../../contexts/user.context';
import { ContactContext } from '../../contexts/contact.context';
import { toast } from 'react-hot-toast';
import ContactModal from '../../components/contactModal';
import DinamicHud from '../../components/hud';
import { DashContainer } from './style';
import RegisterContact from '../../components/registerModal';
export default function Dashboard() {
    const navigate = useNavigate();
    const { user } = useContext(UserContext);
    const { contacts, listContacts, deleteContact, updateContact } = useContext(ContactContext);
    const [viewModal, setViewModal] = useState(false);
    const [contact, setContact] = useState({});
    const [search, setSearch] = useState('');
    const [fab, setFab] = useState(false);

    useEffect(() => {
        if (!user) {
            navigate('/login');
            toast.error('Você precisa estar autenticado para acessar esta página');
        }

        listContacts();
    }, []);

    return (
        <>
            {fab && <RegisterContact closeModal={() => setFab(false)} />}
            {viewModal && <ContactModal
                contact={contact}
                deleteContact={deleteContact}
                updateContact={updateContact}
                closeModal={() => setViewModal(false)
                } />
            }
            <DinamicHud>
                <DashContainer>
                    <ul>
                        {
                            contacts.length > 0 ?
                                contacts.map((contact) => {
                                    return (
                                        <li key={contact._id} onClick={() => {
                                            setContact(contact);
                                            setViewModal(true);
                                        }}>
                                            <div>
                                                <h4>{contact.name}</h4>
                                                <p>{contact.phone}</p>
                                            </div>
                                            <small>Clique para ver o contato.</small>
                                        </li>
                                    )
                                }) : <div style={{
                                    textAlign: 'center'
                                }}>
                                    <h3>Nenhum contato encontrado.</h3>
                                    <p>Adicione um contato para começar.</p>
                                </div>
                        }
                    </ul>
                    <button className="fab" onClick={() => setFab(true)}>+ Adicionar contato</button>
                </DashContainer>
            </DinamicHud>
        </>
    )


}