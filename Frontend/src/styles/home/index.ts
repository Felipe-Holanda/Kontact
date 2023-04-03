import styled from "styled-components";
import { Link } from "react-router-dom";

export const Header = styled.header`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: .5em 1em;
    box-shadow: 0 0 10px rgba(0,0,0,.1);
    background-color: #fff;
`
export const Title = styled.h1`
    font-size: 2rem;
    color: #7d02dd;
`
export const OutlineButton = styled(Link)`
    background-color: #fff;
    border-radius: .5em;
    padding: .5em 1em;
    color: #7d02dd;
    text-decoration: none;
    font-weight: bold;
    transition: all .2s ease-in-out;
    outline: 1px solid #7d02dd;
    &:hover {
        background-color: #7d02dd;
        color: #fff;
    }
    margin: .5em;
`
export const FilledButton = styled(Link)`
    background-color: #7d02dd;
    border-radius: .5em;
    padding: .5em 1em;
    color: #fff;
    text-decoration: none;
    font-weight: bold;
    transition: all .2s ease-in-out;
    background-color: #7d02dd;
    outline: 1px solid #7d02dd;
    &:hover {
        background-color: #fff;
        color: #7d02dd;
    }
`

export const Main = styled.main`
    display: flex;
    flex-direction: column;
    width: 90%;
    margin: 20px auto;

    @media (min-width: 800px) {
        
        margin-top: 100px;
        flex-direction: row;

    }

    a{
        cursor: pointer;
    }
`

export const WellcomeText = styled.h2`
    font-size: 1.5rem;
    color: #7d02dd;

    span{
        color: #000;
    }
`

export const Description = styled.p`
    font-size: 1rem;
    color: #000;
    text-align: initial;
    margin: 1em 0;
    span{
        color: #7d02dd;
    }
`

export const MagicDiv = styled.div`

    display: flex;
    flex-direction: column;
    width: 100%;

    img{
        width: 80%;
        effect: drop-shadow(0 0 0.75rem rgba(0, 0, 0, 0.5));
    }

    .row img{
        width: 200px;
    }

    .row img:last-child{
        width: 180px;
    }

    .row{
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
    }
    
`