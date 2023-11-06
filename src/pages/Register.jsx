import React from 'react'
import Navbar from '../components/nav'
import { Container, Form, Button } from 'react-bootstrap';
import './Register.css'



function Register() {
  return (
    <>
    <Navbar />
    <div style={{backgroundColor:"#FFF6F3"}}>
    <Container className="d-flex justify-content-center align-items-center" style={{ height: '80vh', marginBottom:'0' }}>
      <Form style={{ width: '400px' }}>
        <h2 className="text-center mb-3 fontform" style={{fontSize:'35px'}}>Sign up to your account</h2>

        <Form.Group controlId="formBasicEmail" className="mb-3">
          <Form.Control type="email" placeholder="Email" className='fontform' style={{backgroundColor:'#DFD4D0', fontSize:'25px'}}/>
        </Form.Group>

        <Form.Group controlId="formBasicPassword" className="mb-3">
          <Form.Control type="password" placeholder="Password" className='fontform' style={{backgroundColor:'#DFD4D0' , fontSize:'25px'}}/>
        </Form.Group>

        <Form.Group controlId="formBasicCheckbox" className="mb-3">
          <Form.Check type="checkbox" label="By continuing, you agree to Terms of Company Service and Privacy Policy" className='fontform'/>
        </Form.Group>

        <Button variant="secondary" type="submit" className="w-100 mb-2"  style={{backgroundColor:'#AFA09B', borderColor:'#AFA09B' , padding: '15px 25px' , fontSize:'25px' , color:'#68615E' }}>
          Sign up →
        </Button>
      </Form>
    </Container>
    <hr style={{margin: '0', width: '95%', marginLeft: 'auto'}}/>
        <div className="text-center">
          <a href="#login" style={{color:'#68615E'}}>Already have an account? Log in</a>
        </div>
    </div>
    <div style={{backgroundColor:'#A58E74'}}>
      <p className='fontbuttom' style={{display:'flex' , justifyContent:'flex-end', alignItems:'center', fontSize:30 , color:'#FFF'}}>ENGRAVE COMPANY LIMITED</p>
    </div>
    </>
  )
}

export default Register