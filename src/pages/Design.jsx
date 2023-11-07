import React from 'react'
import Navbar from '../components/nav'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Desing1 from '../assets/Rectangle19.png'
import Desing2 from '../assets/Rectangle21.png'
import '../pages/Design.css'

function Design() {
  return (
    <>
    <Navbar />
<div style={{display: 'flex', justifyContent: 'center', flexWrap:'wrap', gap:'2rem', paddingTop:'50px', paddingBottom:'100px' , backgroundColor:"#FFF6F3"}}>
<Card style={{ width: '30rem', position: 'relative' , borderRadius:20 }}>
  <Card.Img variant="top" src={Desing1} style={{ borderRadius: 20 }} />
  <div style={{
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundImage: 'linear-gradient(to bottom, white, black)', // ตั้งค่า gradient ที่นี่
    opacity: 0.5, // ปรับค่าความทึบตามที่คุณต้องการ
    borderRadius:15
  }} />
  <Card.Body style={{padding:0}}>
    <Card.Title className='fontdesign' style={{ position: 'absolute', bottom: '50px', left: '150px', color: 'white' , fontSize:'50px'}}>
      Classic
    </Card.Title>
  </Card.Body>
</Card>

<Card style={{ width: '30rem', position: 'relative' , borderRadius:20 }}>
  <Card.Img variant="top" src={Desing2} style={{ borderRadius: 20 }} />
  <div style={{
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    backgroundImage: 'linear-gradient(to bottom, white, black)', // ตั้งค่า gradient ที่นี่
    opacity: 0.5, // ปรับค่าความทึบตามที่คุณต้องการ
    borderRadius:15
  }} />
  <Card.Body style={{padding: 0 }}>
    <Card.Title className='fontdesign' style={{ position: 'absolute', bottom: '50px', left: '150px', color: 'white', fontSize:'50px' }}>
      Natural
    </Card.Title>
  </Card.Body>
</Card>
    
</div>
<div style={{backgroundColor:'#A58E74'}}>
      <p className='fontbuttom' style={{display:'flex' , justifyContent:'flex-end', alignItems:'center', fontSize:30 , color:'#FFF'}}>ENGRAVE COMPANY LIMITED</p>
    </div>
    </>
  )
}

export default Design