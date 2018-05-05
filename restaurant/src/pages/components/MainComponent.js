import React, { Component } from 'react';
import './MainComponent.css';
import Restaurants from './Restaurants.js';
import $ from 'jquery';

export default class MainComponent extends Component{

	constructor(){
     super();
     this.state = {	id:[],
     				name:[],
     				address:[],
					rating:[],
					facilities:[]
				  };
  	}
	
	getDataForHome() {
	  var url="http://localhost:3001/homerender.json";
	  $.ajax({
	      url: url,
	      dataType: 'json',
	      type: 'GET',
	      cache:false,
	      data:{
	        Switch:'on',
	      },
	      success: function(Details) {
	        console.log('success');
	        
	        this.setState({ id: Details.id, name: Details.name, address: Details.address, rating: Details.rating,
	        	 facilities: Details.facilities });
	      
	      }.bind(this),
	      error: function(xhr, status, err) {
	          console.error(url, status, err.toString());
	          console.log('fail to post');
	      }
	  });
	}
	
	componentWillMount(){
     
      this.getDataForHome();
    }

    	loopToRender = (id, name, address, rating, facilities) => {
	    	let RestaurantArray = [];
			var i;
			for (i = 0; i < id.length; i++) {
				RestaurantArray.push( <Restaurants key = {id[i]} id={id[i]} name={name[i]} address={address[i]}
					 facilities={facilities[i]} stars={rating[i]} likes={rating[i]}/>);
			}

			return RestaurantArray;
  		  };

	render(){
		return(
			<div className="col-sm-12 col-md-6 cardsPadding">
				{
	      	  		this.loopToRender(this.state.id, this.state.name, this.state.address,
	      	  				 this.state.rating, this.state.facilities )

				}

			</div>

			);
	}
}