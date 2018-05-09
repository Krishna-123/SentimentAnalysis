import React, { Component } from 'react';

import Navbar from './components/Navbar';

import Footer from './components/Footer';

export default class About extends Component{

	render(){
		return (
	      <div>
			     <Navbar /> <br/>


				       <div class="col-md-12">
					      <div class="img-section">
							   <img src="images/kabob.jpg" width="550" height="220" />
							   <img src="images/limes.jpg" width="550" height="220" />
							   <div class="img-section-space"></div>
							   <img src="images/radish.jpg"  width="550" height="220" />
							   <img src="images/corn.jpg"  width="550" height="220" />
				          </div>
				      </div>


    	 </div>
		);
	}

}