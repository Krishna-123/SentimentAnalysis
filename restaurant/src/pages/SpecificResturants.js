import React, { Component } from 'react';
import $ from 'jquery';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import './specificResturants.css';

let id;
export default class SpecificResturants extends Component{

constructor(){
     super();
     this.state = {	
     				id:[],
     				name:[],
     				address:[],
					rating:[],
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
	      type: 'POST',
	      cache:false,
	      success: function() {
	        console.log('success');
	        console.log('id is '+ ido);
	        // this.setState({ id: Details.id, name: Details.name, address: Details.address, rating: Details.rating,
	        // 	 facilities: Details.facilities });
	      
	      },
	      error: function(xhr, status, err) {
	          console.error(url, status, err.toString());
	          console.log('fail to post');
	      }
	  });
	}	
	
	componentWillMount(){
      id= this.props.params.id;
      this.getDataForHome(id);
    }


	render(){
		return(
			<div className="backgroundColor">
				<Navbar /><br/>
					<div className="container">
					
					 <div className="row page-header">
					  <div className="col-lg-6">
					   <h1><strong>{this.props.params.id}</strong></h1>
					  </div>
					 </div>		

					 <div className="row">
					  <div className="col-xs-12 col-md-6">
					     
					     <p className="rating">

						    <span className="glyphicon glyphicon-star"></span>
						    <span className="glyphicon glyphicon-star"></span>
						    <span className="glyphicon glyphicon-star"></span>
						    <span className="glyphicon glyphicon-star-empty"></span>
						    <span className="glyphicon glyphicon-star-empty"></span>
					     </p>

					     <p className="address">
						   125, High Street, Reading, RG6 1Ps</p>&nbsp;
						  <div className="panel panel-primary ">
							  <div className="panel-heading "> 
							  	<h2 className="panel-title"><b>Opening hours</b></h2>
							  </div>
							  <div className="panel-body">
							  	<p> Monday - Friday :&nbsp; 7:00am - 7:00pm   </p>
							  	<p> Saturday :&nbsp; 8:00am - 4:00pm   </p>
							  	<p> Sunday :&nbsp; Closed</p>
							  </div>
						  </div>&nbsp;

						  <div className="panel panel-primary">
						  		<div className="panel-heading ">
						  		  <h2 className="panel-title"><b>Facilities</b></h2>
						  		 </div>
						  		 <div className="panel-body">
						  		 <p> <span className="badge">
						  		 	  <span className="glyphicon glyphicon-ok"> </span>
						  		 	   &nbsp; Hot Drinks &nbsp;</span>&nbsp;
						  		 	 <span className="badge">
						  		 	  <span className="glyphicon glyphicon-ok"></span>&nbsp; Food &nbsp;</span>&nbsp;
						  		 	 <span className="badge">
						  		 	  <span className="glyphicon glyphicon-ok"></span>&nbsp; Premium Wifi &nbsp;</span>&nbsp;
						  		 </p>
						  		</div>
						  </div>
						
 				   </div>
 				   <div className="col-xs-12 col-md-6">
 				   	  <h1> <b className="reviewsColor">Add Reviews</b></h1>

 				   	  <form action="/location" method="get" className="form-horizontal">
 				   	    <div className="form-group">
 				   	     <label for="name" className="col-xs-10 col-sm-2 control-label"><h4>Name</h4></label>
 				   	     <div className="col-xs-11 col-sm-10">
 				   	      <input id="name" name="name" className="form-control"/>
 				   	     </div>
 				   	    </div>
 				   	    <div className="form-group">
 				   	     <label for="review" className="col-xs-10 col-sm-2 control-label"><h4>Review</h4></label>
 				   	     <div className="col-xs-11 col-sm-10">
 				   	      <textarea id="review" name="review" rows="4" className="form-control"></textarea>
 				   	     </div>
 				   	    </div>
 				   	    <div className="col-xs-11 arrg col-sm-12">
 				   	     <button className="btn btn-danger pull-right"><b>Add my review</b></button>
 				   	    </div>
 				   	  </form>
 				   </div>
				</div>			

				<div className="panel panel-primary">
					<div className="panel-heading ">
					  <h2 className="panel-title"><b>Customer Reviews</b></h2>
					</div>
				    <div className="panel-body review-container">
					     <div className="row">
					     <div className="review">
					     <div className="well well-sm review-header">
					     <span className="rating">
						     <span className="glyphicon glyphicon-star"></span>
						     <span className="glyphicon glyphicon-star"></span>
						     <span className="glyphicon glyphicon-star"></span>
						     <span className="glyphicon glyphicon-star"></span>
						     <span className="glyphicon glyphicon-star"></span>
					     </span>
					     <span className="reviewAuthor"><b className="reviewsColor"> GoogleUser </b></span>
					     <small className="reviewTimestamp"> 16 July 2017</small>
				   		 </div>
				    	<div className="col-xs-12">
				      		<p>  What a great place. I can't say enough good things about it.</p>
				   		</div>
				   		</div>
				    	</div>
					

				    	<div className="row">
					     <div className="review">
					     <div className="well well-sm review-header">
					     <span className="rating">
						     <span className="glyphicon glyphicon-star"></span>
						     <span className="glyphicon glyphicon-star"></span>
						     <span className="glyphicon glyphicon-star"></span>
						     <span className="glyphicon glyphicon-star"></span>
						     <span className="glyphicon glyphicon-star"></span>
					     </span>
					     <span className="reviewAuthor"><b className="reviewsColor"> GoogleUser </b></span>
					     <small className="reviewTimestamp"> 16 July 2017</small>
				   		 </div>
				    	<div className="col-xs-12">
				      		<p>  What a great place. I can't say enough good things about it.</p>
				   		</div>
				   		</div>
				    	</div>


				    	<div className="row">
					     <div className="review">
					     <div className="well well-sm review-header">
					     <span className="rating">
						     <span className="glyphicon glyphicon-star"></span>
						     <span className="glyphicon glyphicon-star"></span>
						     <span className="glyphicon glyphicon-star"></span>
						     <span className="glyphicon glyphicon-star"></span>
						     <span className="glyphicon glyphicon-star"></span>
					     </span>
					     <span className="reviewAuthor"><b className="reviewsColor"> GoogleUser </b></span>
					     <small className="reviewTimestamp"> 16 July 2017</small>
				   		 </div>
				    	<div className="col-xs-12">
				      		<p>  What a great place. I can't say enough good things about it.</p>
				   		</div>
				   		</div>
				    	</div>
				    	
						
					</div>   
				</div>	
				</div>
				<Footer />

			 </div>
			);
	}
}