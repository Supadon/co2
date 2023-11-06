import React from 'react'
import { Navbar, Nav, Container } from 'react-bootstrap';
import './Nav.css'


function nav() {
  return (
    <Navbar  variant="dark" expand="lg" style={{ marginBottom: '20px' , backgroundColor:'#6A6F4C'}}>
    <Container>
      <Navbar.Brand href="#home" style={{float:'left'}}>
        <img
          alt=""
          src="/src/assets/logo.png" // Replace with your logo image path
          width="230"
          height="150"
          className="d-inline-block align-top"
        />
        <div style={{float:'right'}}>
          <h1 className='fontband' style={{fontSize: 100}} >
          ENGRAVE
          </h1>
          <p style={{paddingLeft:50 , lineHeight:0 , fontSize: 30}}>
          Zero Carbon Architechure
          </p>
        </div>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      {/* <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link href="#home">Homepage</Nav.Link>
          <Nav.Link href="#design">Design</Nav.Link>
          <Nav.Link href="#register">Register</Nav.Link>
          <Nav.Link href="#contact">Contact us</Nav.Link>
        </Nav>
      </Navbar.Collapse> */}
    </Container>
  </Navbar>
  )
}

export default nav