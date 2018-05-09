import React, { Component } from  'react';
import './Navbar.css';

export default class Navbar extends Component{

	render(){
		return (
			<div>
				<nav className="navbar navbar-default navbar-fixed-top">
  				<div className="container">
    	   	   	  <a className="navbar-brand" href="/">Loc8r</a>
    	   	   	 
    	   	   	  	 <div className="col-md-7">
    	   	   	  		<div className="input-group">
  						  <input type="text" className="form-control search" id="basic-url"
  						    aria-describedby="basic-addon3"  value="KOLKATA"/>
  						<span className="dropdown">
				  		  <input className="form-control search dropdown-toggle " data-toggle="dropdown"
				  		     role="button" aria-haspopup="true" aria-expanded="true" 
				  		     	value="please select items!!"/>
				  		      <ul className="dropdown-menu">
            					<li><a href="#">itme1</a></li>
           						<li><a href="#">item2</a></li>
          						<li><a href="#">item3</a></li>
          					</ul>
          				</span>	
				  		</div>	
				  	</div>		
			       <ul className="nav nav-tabs navbar-right" >
			      	<li  className="active listitem"><a href="/"> Home </a></li>
  				  	<li  className="listitem"><a href="/"> About </a></li>
  				 </ul>
  				 </div>

  				 <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">

  				 </div>
				 </nav>
     		</div> 
			 

			);
	}
}	
