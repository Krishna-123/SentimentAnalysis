import React, { Component } from 'react';

export default class LeftSidebar extends Component{

	render(){

		return(
			<div className="col-sm-12 col-md-3">
				<h1>this is LeftSideBar with some dummy text
				</h1> 
				<div className="lead">
			    <p>
			      Looking for wifi and a seat? Loc8r helps you find places to work when out and
			      about. Perhaps with coffee, cake or a pint? Let Loc8r help you find the place you're looking for.
			   
			   </p>
			  </div>
			</div>
			);
	}

}