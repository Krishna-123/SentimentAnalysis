import React, { Component } from 'react';
import './Navbar.css'
import { Link } from 'react-router';
export default class Navbar extends Component{
	

  render(){
 
		return(
			<div >
			 <nav className="navbar navbar-default navbar-fixed-top">
      		 	<div className="container ">
      		 	
      		 	<a href="/" className="navbar-brand heading"><b>Resturants</b></a>
      		 	<button type="button" className="navbar-toggle" 
      		 		data-toggle="collapse"
      		 		data-target=".navbar-collapse">
      		 	<span className= "sr-only">ToggleNavigation</span>
      		 	<span className= "icon-bar "></span>
      		 	<span className= "icon-bar "></span>
      		 	<span className= "icon-bar "></span>	
      		 	</button>
      		      		 	
      		 	<div className="navbar-collapse collapse navbar-right">
      		 	  <ul className="nav navbar-nav  navbar-right">
      		 	  	<li> <Link to="/"> <b> HOME </b></Link> </li>
      		 	  	<li> <Link to="/about"> <b> Our Story </b> </Link> </li>
      		 	  </ul>
      		 	</div>

      		 	</div>
    	    </nav>
          {this.props.children}
    		</div>
			);
	}
}

