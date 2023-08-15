import React from "react";
import './visitor.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import videoBg from '../assets/clothing.mp4'


export default function Visitor() {
    return (
        <div>
            <Navbar bg="light" data-bs-theme="light">
                <Container>
                    <Navbar.Brand href="#home">Outfit Maker</Navbar.Brand>
                    <Nav className="me-auto">
                        <Nav.Link href="#login">Login</Nav.Link>
                        <Nav.Link href="#register">Register</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
            <div className="overlay"></div>
            <video src={videoBg} autoPlay loop muted />
            <div className="content">
                <h1>Outfit Tracker</h1>
                <p>Outfit planning made easy!</p>
            </div>
        </div>
    )
}
