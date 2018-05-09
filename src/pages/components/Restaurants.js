import React, { Component } from 'react';
import { Link } from 'react-router';


export default class Restaurants extends Component{

	nOfStars = (stars) => {
		let Stars = [];
		var i;
		for (i = 1; i <= stars; i++) {
			Stars.push( <span className="glyphicon glyphicon-star"></span>)
		}

		for (; i <= 5; i++) {
			Stars.push( <span className="glyphicon glyphicon-star-empty"></span>)
		}

		return Stars
	}

	render(){
		return (

			<div className="row list-group card">
			<div className="col-xs-12 list-group-item">
			<div className="row">
			<div className="col-xs-10">	
			<h2> 
			<Link to={`/specific/${this.props.id}`}>{this.props.name}</Link>
			<small><br/>
			  	{
			  		this.nOfStars(this.props.stars)
				}

			</small>
			 </h2>
			</div>
			<div className="col-xs-2">
 			<span className="badge pull-right badge-default glyphicon glyphicon-heart"><b>&nbsp;{this.props.likes}</b></span>
			</div>  
			</div>
			<p className="address">{this.props.address}</p>
			<p>
			    {
					this.props.facilities.map((facility, i) => {
						
						return (<span className="badge" style={{'marginLeft':'5px', 'marginRight':'5px'}}> 
									<span className="glyphicon glyphicon-ok"></span>
									&nbsp; {facility} &nbsp;
								</span>
								);

					})
				}
			
			</p>
			</div>
			{this.props.children}
			</div> 

			);
	}


}