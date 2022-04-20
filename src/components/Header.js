import React from 'react'
import {Container,Navbar, Nav,Form,FormControl,Button } from 'react-bootstrap'

function Header() {
  return (
    
    <Navbar bg="light" variant="light">
    <Container>
   
    <Navbar.Brand href="#home">LOGO</Navbar.Brand>
    <Nav className="me-auto">
      <Nav.Link href="#user">User</Nav.Link>
      <Nav.Link href="#Quick order">Quik order</Nav.Link>
      <Nav.Link href="#favourites">Favourites</Nav.Link>
      <Nav.Link href="#cart">Cart</Nav.Link>
    
  <Form className="d-flex">
        <FormControl
          type="search"
          placeholder="Search"
          className="me-2"
          aria-label="Search"
        />
        <Button variant="outline-success">Search</Button>
      </Form>
    
    </Nav>
    
    </Container>
    
  </Navbar>
   
  )
}

export default Header