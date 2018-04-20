import React, { Component } from 'react';
import Carousel from 'react-bootstrap/lib/Carousel';
import './ImageCaurosel.css';

export default class ImageCaurosel extends Component{

	render(){

		return (
			
   <Carousel className="col-lg-12">
    <Carousel.Item >
     <img style={{'width':'1300'}} alt="1080x2" src="http://image.nj.com/home/njo-media/width620/img/entertainment_impact/photo/15404027-mmmain.jpg" />
     <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img style={{'width':'1300'}} alt="1080x2" src="http://images.nymag.com/restaurants/reviews/apiary081027_560.jpg" />
    <Carousel.Caption>
      <h3>Second slide label</h3>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img style={{'width':'1300'}} alt="1080x2" src="https://cdn.pixabay.com/photo/2016/02/24/22/15/munich-1220908__340.jpg" />
    <Carousel.Caption>
      <h3>Third slide label</h3>
      <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
  
</Carousel>

			);
	}
}
 