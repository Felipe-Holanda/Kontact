import React, { useState } from 'react';
import { Container } from './style'
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { UserContext } from '../../contexts/user.context';

const DinamicHud = ({ children }) => {
    const [isOpen, setIsOpen] = useState(false);
    const { signOut } = useContext(UserContext);
    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <Container>
            <header>
                <div className='main'>
                    <h1>Kontact</h1>
                    <button onClick={toggleMenu}><i className={isOpen ? 'bx bx-x' : 'bx bx-menu'} /></button>
                </div>
                <div className={'menu'} style={{
                    display: isOpen ? 'flex' : 'none'
                }}>
                    <Link to='/home'>Inicio</Link>
                    <a onClick={signOut}>Sair</a>
                </div>
            </header >
            <main>
                {children}
            </main>
        </Container >
    );
};

export default DinamicHud;