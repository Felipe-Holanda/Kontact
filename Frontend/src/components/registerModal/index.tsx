import { ModalFog, ModalBody, ModalHeader, ModalTitle, ModalClose, ModalContent, ModalFooter } from '../../styles/contactModal'
import { useForm } from 'react-hook-form'
import { useContext } from 'react'
import { ContactContext } from '../../contexts/contact.context'
import { yupResolver } from '@hookform/resolvers/yup'
import { createContactSchema } from '../../schemas'

export default function RegisterContact({ closeModal }) {

    const { register, handleSubmit, formState: { errors }, reset } = useForm({
        resolver: yupResolver(createContactSchema)
    })

    const { createContact } = useContext(ContactContext)

    const onSubmit = (data) => {
        createContact(data)
        reset()
        closeModal()
    }

    return (
        <ModalFog>
            <ModalBody>
                <ModalHeader>
                    <ModalTitle>Cadastrar contato</ModalTitle>
                    <nav>
                        <ModalClose onClick={closeModal}>
                            <i className="bx bx-x" />
                        </ModalClose>
                    </nav>
                </ModalHeader>
                <form onSubmit={handleSubmit(data => {
                    onSubmit(data)
                    closeModal()
                })}>

                    <ModalContent>
                        <label htmlFor="name" className="content">Nome:</label>
                        <input type="text" placeholder="Nome do contato" {...register("name")} />
                    </ModalContent>
                    <ModalContent>
                        <label htmlFor="phone" className="content">Número principal:</label>
                        <input type="text" placeholder="Telefone do contato" {...register("phone")} />
                    </ModalContent>
                    <ModalContent>
                        <label htmlFor="secondaryPhone" className="content">Número secundário:</label>
                        <input type="text" placeholder="Telefone secundario" {...register("secondaryPhone")} />
                    </ModalContent>
                    <ModalContent>
                        <label htmlFor="email" className="content">E-Mail principal:</label>
                        <input type="text" placeholder="Email do contato" {...register("email")} />
                    </ModalContent>
                    <ModalContent>
                        <label htmlFor="secondaryEmail" className="content">E-Mail secundário:</label>
                        <input type="text" placeholder="Email secundário" {...register("secondaryEmail")} />
                    </ModalContent>

                    <ModalFooter>
                        <button type="submit">Salvar</button>
                    </ModalFooter>
                </form>
            </ModalBody>
        </ModalFog>

    )

}