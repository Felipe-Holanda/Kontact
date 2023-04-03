import styled from "styled-components"

export const DeleteModalContent = styled.div`
    h1{
        text-align: center;
        font-size: 1.5em;
    }

    p{
        text-align: center;
    }
`

export const DeleteModalFooter = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    width: 100%;
`

export const ConfirmButton = styled.button`
    background-color: #fff;
    border: 1px solid #7d02dd;
    border-radius: .5em;
    padding: .5em;
    color: #7d02dd;
    transition: .3s;
    &:hover{
        cursor: pointer;
        background-color: #7d02dd;
        color: #fff;
    }
`
export const CancelButton = styled.button`
    border: 1px solid #7d02dd;
    border-radius: .5em;
    padding: .5em;
    background-color: #7d02dd;
    color: #fff;
    transition: .3s;
    &:hover{
        cursor: pointer;
        background-color: #fff;
        color: #7d02dd;
    }
`

export const ModalBody = styled.div`
    max-width: 500px;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;

    background-color: #fff;
    padding: 1em .5em;
    border-radius: .5em;
    z-index: 1000;

`