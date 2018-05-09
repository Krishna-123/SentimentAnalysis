import React, { Component } from 'react';
import Carousel from 'react-bootstrap/lib/Carousel';
import './ImageCaurosel.css';

export default class ImageCaurosel extends Component{

	render(){

		return (

   <Carousel className="col-lg-12">
    <Carousel.Item >
     <img style={{'height':'800'}} alt="800x2" src="/images/starcup2.jpg" />
     <Carousel.Caption>
      <h3>First slide label</h3>

    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img style={{'width':'1300'}} alt="1200x2" src="/images/starcup4.jpg" />

    <Carousel.Caption>
      <h3>Second slide label</h3>

    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img style={{'width':'1300'}} alt="1200x2" src="/images/starcup3.jpg" />
    <Carousel.Caption>
      <h3>Third slide label</h3>

    </Carousel.Caption>
  </Carousel.Item>

</Carousel>

			);
	}
}
