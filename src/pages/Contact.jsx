import React from 'react'
import { Container, Row, Col } from 'react-bootstrap';
import Navbar from '../components/Nav'
import logo from '../assets/logo3.png'
import '../pages/Contact.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { faLine } from '@fortawesome/free-brands-svg-icons';

function Contact() {
  return (
    <>
      <Navbar />
      <div style={{ backgroundColor: '#FFF6F3' }}>
        <Container className="d-flex flex-column align-items-center" style={{ minHeight: '30vh', paddingBottom: '10px' }}>
          <div className='mt-auto w-100 text-center'>
            <img src={logo} />  
          </div>
          <div>
            <p className='text-center fonttab' style={{ fontSize: '25px' }}>
              Engrave Company Limited
            </p>
            <p className='text-center fonttab ' style={{ fontSize: '35px' }}>
              Thailand
            </p>
            <p className='text-center fonttab ' style={{ fontSize: '25px' }}>
              111, University Road, Suranaree Subdistrict,<br /> Mueang Nakhon Ratchasima District, brNakhon Ratchasima 30000
            </p>
            <p>

            </p>
          </div>
        </Container>
        <div className='text-center'>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <FontAwesomeIcon icon={faPhone} size='2xl' />
            <p style={{ marginLeft: '8px' , fontSize:'20px'}}>012 345 6789</p>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <FontAwesomeIcon icon={faLine} size='2xl' />
            <p style={{ marginLeft: '8px' , fontSize:'20px' }}>@engrave23</p>
          </div>
        </div>
        <div style={{ backgroundColor: '#A58E74' }}>
          <p className='fontbuttom' style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center', fontSize: 30, color: '#FFF' }}>ENGRAVE COMPANY LIMITED</p>
        </div>
      </div>

    </>
  )
}

export default Contact