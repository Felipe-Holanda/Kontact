import styled from 'styled-components'

export const Container = styled.div`
header{
    background-color: #fff;
    padding: .5em;
    box-shadow: 0 0 10px rgba(0,0,0,.2);
    transition: all .5s;
    margin-bottom: 1em;
}

header h1{
    color: #7d02dd;
}

header a{
    text-decoration: none;
    color: #7d02dd;
    outline: 1px solid #7d02dd;
    padding: .5em;
    border-radius: 5px;
}

header a:hover{
    background-color: #7d02dd;
    color: #fff;
    cursor: pointer;
    transition: all .5s;
}

header a:focus{
    background-color: #7d02dd;
    color: #fff;
    transition: all .5s;
}

header button{
    background-color: #fff;
    border: none;
    cursor: pointer;
    color: #7d02dd;
    font-size: 1.5em;
}

header .main{
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
}

header .menu{
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;
}

`