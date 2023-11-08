import React from 'react'
import { Navbar, Nav, Container } from 'react-bootstrap';
import './Nav.css'

function Headter() {
  return (
    <>
    <Navbar  variant="dark" expand="lg" style={{ background: 'linear-gradient(45deg, rgba(106, 111, 76, 1) 70%, rgba(61, 62, 56, 0.54) 20%, rgba(225, 233, 177, 0.54) 10%)'}}>
    <Container>
      <Navbar.Brand href="#home" style={{float:'left'}}>
        <img
          alt=""
          src="/src/assets/logo2.png" // Replace with your logo image path
          width={80}
          className="d-inline-block align-top"
          style={{paddingRight: 20}}
        />
        <div style={{float:'right'}}>
          <h1 className='fontband' style={{fontSize: 50}} >
          ENGRAVE
          </h1>
          <p style={{paddingLeft:50 , lineHeight:0 , fontSize: 20}}>
          Zero Carbon Architechure
          </p>
        </div>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
    </Container>
  </Navbar>
  <Nav defaultActiveKey="/home" as="ul" style={{backgroundColor:'#A58E74'}}>
      <Nav.Item as="li">
        <Nav.Link style={{color:'#fff', fontSize:25}} className='fonttab' href="/">Homepage</Nav.Link>
      </Nav.Item>
      <Nav.Item as="li">
        <Nav.Link style={{color:'#fff', fontSize:25}} className='fonttab' href="design">Design</Nav.Link>
      </Nav.Item>
      <Nav.Item as="li">
        <Nav.Link style={{color:'#fff', fontSize:25}} className='fonttab' href="register">Register</Nav.Link>
      </Nav.Item>
      <Nav.Item as="li">
        <Nav.Link style={{color:'#fff', fontSize:25}} className='fonttab' href="contact">Contact US</Nav.Link>
      </Nav.Item>
    </Nav>
  </>
  )
}

export default Headter