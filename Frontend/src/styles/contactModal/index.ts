import styled from "styled-components";

export const ModalFog = styled.div`
    position: fixed;
    top: 0;
    left: 0;

    width: 100vw;
    height: 100vh;

    background-color: rgba(0, 0, 0, 0.3);
    z-index: 10;

    display: flex;
    justify-content: center;
    align-items: center;
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

    form{
        width: 80%;

        input{
            transition: all .3s;
            padding: .5em;
            border: none;
            border-radius: .5em;
            outline: 1px solid #f2f2f2;
            background-color: #f5f5f5;
        }

        input:focus{
            outline: 1px solid #000;
        }

        button{
            transition: all .3s;
            padding: .5em;
            border: none;
            border-radius: .5em;
            color: white;
            background-color: #7d02dd;
            font-weight: bolder;
        }
        
        button:hover{
            cursor: pointer;
            background-color: #000;
        }

        button:focus{
            outline: 2px solid #000;
        }

    }
`

export const ModalHeader = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;

    nav{
        display: flex;
        align-items: center;
        justify-content: center;

            i:hover{
                background-color: rgba(200,200,200,.5);
                border-radius: 50%;
            }
    }
`

export const ModalTitle = styled.h2`
    font-size: 1.5em;
    font-weight: 500;
    color: #000;
`

export const ModalClose = styled.button`
    background-color: transparent;
    border: none;
    font-size: 1.5em;
    font-weight: 500;
    color: #000;
    cursor: pointer;

    &:hover {
        color: #300000;
    }
`

export const ModalContent = styled.div`
    width: 100%;
    padding: .5em;
    transition: all .3s;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    

    &:hover{
        background-color: rgba(200,200,200,.5)
    }
    
`

export const ModalFooter = styled.div`
    width: 100%;
    display: flex;
    text-align: center;
    display: flex;
    flex-direction: column;
    small{
        font-size: 1em;
        font-weight: 400;
        color: #424242;
        opacity: .5;
    }
`