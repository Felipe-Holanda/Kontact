import styled from "styled-components";
import { Link } from "react-router-dom";

export const Form = styled.form`
    margin: 3em auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    max-width: 400px;
    border-radius: .5em;
    padding: 2em 1em;
    text-align: initial;
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
    background-color: #fff;

    @keyframes scaleUp {
        from{
            transform: scale(0);
            transform: opacity(0);
        }to{
            transform: scale(1);
            transform: opacity(1);
        }
    }

    &:not(:focus){
        animation: scaleUp .5s;
    }

    div{
        text-align: center;

        a{
            font-size: 14px;
        }
    }
`

export const Input = styled.input`
    outline: 1px solid #c9c9c9;
    border: none;
    border-radius: .5em;
    background-color: #f5f5f5;
    width: fit-self;
    padding: .5em;
    margin: .5em 0;
    color: #000;

    &:focus{
        outline: 1px solid #000;
    }
`

export const Button = styled.button`
    outline: none;
    border: none;
    border-radius: .5em;
    background-color: #7d02dd;
    color: #fff;
    font-weight: 600;
    padding: 1em .5em;
    margin: .5em 0;
    width: fit-self;

    &:hover{
        background-color: #5c02a3;
        cursor: pointer;
    }

    &:focus{
        outline: 1px solid #000;
    }
`

export const Label = styled.label`
    font-size: 1em;
    font-weight: 600;
    margin-top: .5em;
    text-align: left;
`

export const Error = styled.span`
    color: #f00;
    font-size: .6em;
    font-weight: 600;
    margin-top: .5em;
    text-align: center;
`

export const CaptiveLink = styled(Link)`
    color: #7d02dd;
    font-size: 14px;
    font-weight: 600;
    text-decoration: none;
`

export const CaptiveText = styled.span`
    margin-top: .5em;
    color: #000;
    font-size: 14px;
    font-weight: 400;
    text-align: center;
`