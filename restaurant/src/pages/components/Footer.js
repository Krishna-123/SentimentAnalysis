import React, { Component } from 'react';
import './Footer.css';

export default class Footer extends Component{

	render(){

		
		return (
			<div className="row ">
			    <div className="navbar navbar-inverse navbar-fixed-bottom fSize">
				<div className="container">	
				<div className="col-sm-12">
				<div className="navbar-text-pull-right">
				<a href="/facebook">
					<b ><i className="fab fa-facebook-f fa-3x icon"></i></b>
				</a>
				<a href="/github">
					<b ><i className="fab fa-github fa-3x icon"></i></b>
				</a>
				<a href="/google+">
					<b ><i className="fab fa-google-plus-g fa-3x icon"></i></b>
				</a>
				</div>
				<div className="navbar-text-pull-left ">
					<p className="textStyle ">&copy; <b>Vkrishna Agarwal</b> 2018 Resturant Reviews<br/>
						Designed and built with all the love in the world by <b>@krishna</b>. Maintained by 
						the core team of <b>@AITL</b>.
					 </p>
				</div>	
									
				
				</div>
				</div>
				</div>
			</div>

			);
	}
}