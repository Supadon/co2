import React from 'react'
import Headter from '../components/Headter';
import './Homepage.css'
import Carousel from 'react-bootstrap/Carousel';
import CarouselImage1 from '../assets/1.png';
import CarouselImage2 from '../assets/2.png';
import CarouselImage3 from '../assets/3.png';
import CarouselImage4 from '../assets/4.png';



function Homepage() {
return (
  <>
 <Headter />
  <div>
  <Carousel>
    <Carousel.Item>
    <img
        style={{height: 750 , width: 500 }}
        className="d-block w-100"
        src={CarouselImage1}
        alt="First slide"
      />
      <Carousel.Caption>
        <h3 style={{ textShadow: '2px 2px 4px #000000' }}>Design Makes A Better Life.</h3>
        
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
    <img
        className="d-block w-100"
        src={CarouselImage2}
        alt="First slide"
      />
      <Carousel.Caption>
        <h3 style={{ textShadow: '2px 2px 4px #000000' }}>Design Makes A Better Life.</h3>
        
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
    <img
        className="d-block w-100"
        src={CarouselImage3}
        alt="First slide"
      />
      <Carousel.Caption>
        <h3 style={{ textShadow: '2px 2px 4px #000000' }}>Design Makes A Better Life.</h3>
        
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
    <img
        className="d-block w-100"
        src={CarouselImage4}
        alt="First slide"
      />
      <Carousel.Caption>
        <h3 style={{ textShadow: '2px 2px 4px #000000' }}>Design Makes A Better Life.</h3>
    
      </Carousel.Caption>
    </Carousel.Item>
  </Carousel>
  </div>
  <div style={{backgroundColor:'#A58E74'}}>
    <p className='fontbuttom' style={{display:'flex' , justifyContent:'flex-end', alignItems:'center', fontSize:30 , color:'#FFF'}}>ENGRAVE COMPANY LIMITED</p>
  </div>
  </>
  
)
}

export default Homepage