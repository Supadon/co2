import React from 'react'
import Navbar from '../components/nav'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Desing1 from '../assets/Rectangle19.png'
import Desing2 from '../assets/Rectangle21.png'

function Design() {
  return (
    <>
    <Navbar />
<div style={{display: 'flex', justifyContent: 'center', flexWrap:'wrap', gap:'2rem', paddingTop:'30px' , backgroundColor:"#FFF6F3"}}>
<Card style={{ width: '25rem' }}>
      <Card.Img variant="top" src={Desing1} />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>

    <Card style={{ width: '25rem' }}>
      <Card.Img variant="top" src={Desing2} />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
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