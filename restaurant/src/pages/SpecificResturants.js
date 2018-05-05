import React, { Component } from 'react';
import $ from 'jquery';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import './specificResturants.css';
import SpecificRes from './components/SpecificRes';


let id;
export default class SpecificResturants extends Component{

constructor(){
     super();
     this.state = {	
     				id:null,
     				name:null,
     				address:null,
					rating:null,
					facilities:[],
					openingTimes:[],
					reviews:[]
				  };
  	}
	
	getDataForHome(ido) {
	  var url="http://localhost:3001/specific?id="+ido;
	  $.ajax({
	      url: url,
	      dataType: 'json',
	      type: 'GET',
	      cache:false,
	      success: function(Details) {
	        console.log('success');
	        
	        this.setState({ id: Details.id, name: Details.name, address: Details.address, rating: Details.rating,
	         facilities: Details.facilities, openingTimes: Details.openingTimes, reviews: Details.reviews });
	      	

	      }.bind(this),
	      
	      error: function(xhr, status, err) {
	          console.error(url, status, err.toString());
	          console.log('fail to post');
	      }
	  });
	}	
	
	componentWillMount(){
      id = this.props.params.id;
      this.getDataForHome(id);
    }

	render(){
		return(
			<div className="backgroundColor">
				<Navbar /><br/>
					<SpecificRes key = {this.state.id} id={this.state.id} name={this.state.name} 
					address={this.state.address} facilities={this.state.facilities} stars={this.state.rating}
					openingTimes={this.state.openingTimes} reviews={this.state.reviews} />
				<Footer />

			 </div>
			);
	}
}