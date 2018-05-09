import React, { Component } from 'react';

import Navbar from './components/Navbar';
import Footer from './components/Footer';

export default class NoPage extends Component{
	render(){
		return(
			<div className="col-lg-12">
			  <Navbar />
			  <div  style={{overflow: 'auto'}}>	
			  <div id="banner" className="page-header">
			   <div className="row">
			    <div className="col-md-6 col-sm-12">
			       <h1 style={{'margin-left':10}}> No Such Page</h1>
			    </div>
			   </div>
			  </div>
			 
			   <div className="col-sm-12 col-md-12">
			   </div> 
			   <div className="col-sm-12">  
			    <p><strong>Sorry for inconvenience but there are no page to this link </strong>
			       <br/><br/>
			       Try out Something Else or better to use the valid url
			    </p>
			  </div>  
			  </div>
			  <Footer />
			</div>  
			);
	}


}