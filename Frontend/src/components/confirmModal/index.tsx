import { ModalFog } from "../../styles/contactModal";
import { CancelButton, ConfirmButton, DeleteModalContent, DeleteModalFooter, ModalBody } from './style'

export default function ConfirmModal({ closeModal, deleteFn }: { closeModal: () => void, deleteFn: () => void }): JSX.Element {

    return (
        <ModalFog>
            <ModalBody>
                <DeleteModalContent>
                    <h1>Tem certeza que deseja excluir este contato?</h1>
                    <p>Esta ação não poderá ser desfeita.</p>
                </DeleteModalContent>
                <DeleteModalFooter>
                    <CancelButton onClick={() => { closeModal() }}>Cancelar</CancelButton>
                    <ConfirmButton onClick={() => { deleteFn() }}>Confirmar</ConfirmButton>
                </DeleteModalFooter>
            </ModalBody>
        </ModalFog>
    )
}