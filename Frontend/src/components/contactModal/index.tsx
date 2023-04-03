import { ModalFog, ModalBody, ModalHeader, ModalTitle, ModalClose, ModalContent, ModalFooter } from '../../styles/contactModal'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import ConfirmModal from '../confirmModal'

interface iContact {
    _id?: string;
    name?: string;
    phone?: string;
    email?: string;
    secondaryPhone?: string;
    secondaryEmail?: string;
    createdAt?: string;
    updatedAt?: string;
}

interface iUpdateData {
    name?: string;
    phone?: string;
    email?: string;
    secondaryPhone?: string;
    secondaryEmail?: string;
}

export default function ContactModal(
    { contact, closeModal, updateContact, deleteContact }: {
        contact: iContact,
        closeModal: () => void,
        updateContact: (data: iUpdateData, id: string) => void,
        deleteContact: (id: string) => void
    }): JSX.Element {

    const [edit, setEdit] = useState(false);
    const [isOpen, setIsOpen] = useState(false);
    const { register, handleSubmit } = useForm();

    return (



        <ModalFog>

            {isOpen && <ConfirmModal closeModal={() => { setIsOpen(false) }} deleteFn={() => { deleteContact(contact._id); closeModal() }} />}

            <ModalBody>

                {edit ? (
                    <>
                        <ModalHeader>
                            <ModalTitle>Editar contato</ModalTitle>
                            <nav>
                                <ModalClose onClick={() => { setIsOpen(true) }}>
                                    <i className="bx bxs-trash" />
                                </ModalClose>
                                <ModalClose onClick={() => { setEdit(false) }}><i className="bx bx-x" /></ModalClose>
                            </nav>
                        </ModalHeader>
                        <small>Altere apenas os campos desejados.</small>
                        <form onSubmit={handleSubmit((data) => { updateContact(data, contact._id); setEdit(false) })}>

                            <ModalContent>
                                <p className="content">Nome:</p>
                                <input type="text" defaultValue={contact.name} placeholder="Nome do contato" {...register("name")} />
                            </ModalContent>
                            <ModalContent>
                                <p className="content">Número principal:</p>
                                <input type="text" defaultValue={contact.phone} placeholder="Telefone do contato" {...register("phone")} />
                            </ModalContent>
                            <ModalContent>
                                <p className="content">Número secundário:</p>
                                <input type="text" defaultValue={contact.secondaryPhone} placeholder="Telefone secundario" {...register("secondaryPhone")} />
                            </ModalContent>
                            <ModalContent>
                                <p className="content">E-Mail principal:</p>
                                <input type="text" defaultValue={contact.email} placeholder="Email do contato" {...register("email")} />
                            </ModalContent>
                            <ModalContent>
                                <p className="content">E-Mail secundário:</p>
                                <input type="text" defaultValue={contact.secondaryEmail} placeholder="Email secundário" {...register("secondaryEmail")} />
                            </ModalContent>

                            <ModalFooter>
                                <button type="submit">Salvar</button>
                            </ModalFooter>
                        </form>
                    </>
                ) : (
                    <>

                        <ModalHeader>
                            <ModalTitle>{contact.name}</ModalTitle>
                            <nav>
                                <ModalClose onClick={() => { setEdit(true) }}><i className="bx bxs-pencil" /></ModalClose>
                                <ModalClose onClick={() => closeModal()}><i className="bx bx-x" /></ModalClose>
                            </nav>

                        </ModalHeader>
                        {contact.phone && <ModalContent>
                            <p className="content">Número principal:</p>
                            <p className="field">{contact.phone}</p>
                        </ModalContent>}
                        {contact.secondaryPhone && <ModalContent>
                            <p className="content">Número secundário:</p>
                            <p className="field">{contact.secondaryPhone}</p>
                        </ModalContent>}
                        {contact.email && <ModalContent>
                            <p className="content">E-Mail principal:</p>
                            <p className="field">{contact.email}</p>
                        </ModalContent>}
                        {contact.secondaryEmail && <ModalContent>
                            <p className="content">E-Mail secundário:</p>
                            <p className="field">{contact.secondaryEmail}</p>
                        </ModalContent>}

                        <ModalFooter>
                            <small>Criado em {new Date(contact.createdAt).toLocaleString('pt-BR').split(' ')[0] + ' às ' + new Date(contact.createdAt).toLocaleString('pt-BR').split(' ')[1]}</small>
                            <small>Ultima edição em {new Date(contact.createdAt).toLocaleString('pt-BR').split(' ')[0] + ' às ' + new Date(contact.createdAt).toLocaleString('pt-BR').split(' ')[1]}</small>
                        </ModalFooter>
                    </>
                )}

            </ModalBody>
        </ModalFog>
    )
}