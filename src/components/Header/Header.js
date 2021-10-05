import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <div>
            <Navbar bg="primary" variant="dark">
                <Container>
                    <Navbar.Brand className="logo">IELTS</Navbar.Brand>
                    <Nav className="mx-auto">
                        <NavLink className="link" to="/home">Home</NavLink>
                        <NavLink className="link" to="/about">About</NavLink>
                        <NavLink className="link" to="/ielts">IELTS</NavLink>
                        <NavLink className="link" to="/contact">Contact</NavLink>
                    </Nav>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;