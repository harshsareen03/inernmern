import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { LinkContainer } from 'react-router-bootstrap'
const HeaderT = () => {
  return (
    <>
        <Navbar bg="primary" variant="dark">
        <Container style={{maxWidth:'1500px'}}>
        {/* <LinkContainer to="Filter">
              <NavItem eventKey={1}>Filter</NavItem>
          </LinkContainer> */}
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
          <LinkContainer to="/"><Nav.Link >Home</Nav.Link></LinkContainer>  
          <LinkContainer to="/about"><Nav.Link >About</Nav.Link></LinkContainer>
            {/* <Nav.Link href="#features">About</Nav.Link> */}
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  )
}

export default HeaderT