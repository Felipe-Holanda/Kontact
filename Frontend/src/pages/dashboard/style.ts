import styled from 'styled-components';

export const DashContainer = styled.div`
    section {
        display: flex;
        flex-direction: column;
        align-items: center;

        
        input{
            padding: .5em;
            border: none;
            outline: 1px solid #e2e2e2;
            border-radius: 5px;
            margin: 1em 0;
            width: 90%;

            &:focus {
                outline: 1px solid #000;
            }
        }
        @media (min-width: 768px) {
            input {
                width: 40%;
            }
        }
    }
    hr {
        border: 1px solid #e2e2e2;
    }


    ul{
        display: flex;
        flex-direction: column;
        margin: 0;
        padding: 0;

        h3{
            text-align: center;
        }
    }

    li {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0 1em;
        line-height: .4em;
        background-color: #fff;
        margin-bottom: 5px;
        box-shadow: 0 0 10px rgba(0,0,0,.2);

        div p{
            color: #000;
            font-size: .8em;
        }

        small{
            display: none;
            color: rgba(200,200,200,.8);
            font-size: .8em;
        }

        &:hover {
            small{
                display: block;
            }

            cursor: pointer;
            background-color: #e2e2e2;
        }
    }


    .fab{
        color: #000;
        font-size: 1em;
        position: fixed;
        bottom: 1em;
        right: 1em;
        z-index: 1;
        border: none;
        outline: none;
        padding: 1em;
        border-radius: .5em;
        background-color: #7d02dd;
        color: #fff;
        font-weight: 400;
        cursor: pointer;
        transition: .3s ease-in-out;

        &:hover {
            background-color: #000;
            
        }
    }
`