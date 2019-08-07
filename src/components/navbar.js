import React from 'react';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
function Navigation () {
    return(
    <div>
  <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Navbar.Brand href="#home">B R Architects</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mr-auto">
        </Nav>
        <Nav>
        <Nav.Link href="projects">Projects</Nav.Link>
        <Nav.Link eventKey={2} href="about">About</Nav.Link>
        <Nav.Link eventKey={2} href="contacts">Contacts</Nav.Link>
    </Nav>
  </Navbar.Collapse>
  </Navbar>
    </div>
    )
}

export default Navigation;