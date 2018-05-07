import React, { Component } from 'react' ;
import $ from 'jquery';
export default class SpecificRes extends Component{
 
  constructor(){
     super();
     this.state = { name: "enter the name",
     				review: "enter what you think about the restaurant",
     				allreviews:[]
     			  };
    this.addAuthor = this.addAuthor.bind(this);
    this.addReviewText = this.addReviewText.bind(this);		
    this.addReview = this.addReview.bind(this);	
   	}


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

  openingTimes = (Times) => {
 	var timesArray = [];
 	for (var i = 0; i < Times.length; i++) {
 		timesArray.push(<p>{Times[i]}</p>)
 	}
 	return timesArray
  }

  facilities = (facilitie) => {
  	var facilityArray = [];
  	for (var i = 0; i < facilitie.length; i++) {
 		facilityArray.push(  <span>&nbsp;<span className="badge">
 							  <span className="glyphicon glyphicon-ok"> </span>
 							   &nbsp; {facilitie[i]} &nbsp;
 							  </span>
 							 </span> 	
 						   )
 	}
 	return facilityArray

  }

  allReviews = (review) => {
  	var reviewArray = [];
  	 for (var i = 0; i < review.length; i++ ){
  	 	reviewArray.push( <div className="row">
					     <div className="review">
					     <div className="well well-sm review-header">
					     <span className="rating">
						     {
						     	this.nOfStars(review[i].rating)
						     }
					     </span>
					     <span className="reviewAuthor"><b className="reviewsColor"> {review[i].author} </b></span>
					     <small className="reviewTimestamp"> {review[i].timestamp} </small>
				   		 </div>
				    	<div className="col-xs-12">
				      		<p> {review[i].reviewText}.</p>
				   		</div>
				   		</div>
				    	</div>)
  	 } 
  	 return reviewArray
  }

  addReview() {
	  var url="http://localhost:3002";
	  var temp = [];        
	  var review = {
	  	author: null,
	  	reviewText: null,
	  	rating: null
	  }		

	  $.ajax({
	      url: url,
	      dataType: 'json',
	      type: 'POST',
	      cache:false,
	      data: {
	      	"author":  this.state.name,
	      	"reviewText": this.state.review
	      },
	      success: function(Data) {
	        console.log('success server  ' + Data.category); 

	          review.author = this.state.name;
	          review.reviewText = this.state.review;
	          if (Data.category === "positive") {
	              review.rating = 5;
	          }
	          else{
	          	  review.rating = 3;		
	          }
	          temp = this.state.allreviews;
	          temp.push(review)
	          this.setState({allreviews:temp})
	          this.addReviewDatabase(this.props.id , review)


	      }.bind(this),
	      
	      error: function(xhr, status, err) {
	          console.error(url, status, err.toString());
	          console.log('fail to post');
	          console.log("data to send :- " + this.state.name);

	         
	      }.bind(this)
	  });
	}	

	addReviewDatabase(Id, Data){
		var url="http://localhost:3001/addtodatabase";

		$.ajax({
	      url: url,
	      dataType: 'json',
	      type: 'POST',
	      cache:false,
	      data: 
	       {
	        restaurantID: Id,
	       	restaurantReview:{
		      	author: Data.author,
		      	reviewText: Data.reviewText,
		      	rating: Data.rating	

	      	}
	      },

	      success: function() {
	        console.log('success');
	      }.bind(this),
	      
	      error: function(xhr, status, err) {
	          console.error(url, status, err.toString());
	          console.log('fail to post');

	      }
	  });
	}


   addAuthor(event) {
    this.setState({name: event.target.value});
  }

  addReviewText(event){
  	this.setState({review: event.target.value});
  }  


componentWillMount(){
	this.setState({allreviews:this.props.reviews})
}

	render (){

		return (
			<div className="container">
				<div className="row page-header">
				<div className="col-lg-6">
				  <h1><strong>{this.props.name}</strong></h1>
				</div>
				</div>	

				 <div className="row">
					<div className="col-xs-12 col-md-6">
					   <p className="rating">
			  	       	{
			  		   	  this.nOfStars(this.props.stars)
				       	}
					   </p>

					   <p className="address">						       
					     {this.props.address}
					   </p>&nbsp;
					   
					   <div className="panel panel-primary ">
					     <div className="panel-heading ">
					       <h2 className="panel-title"><b>Opening hours</b></h2>
						 </div>
						 <div className="panel-body">
							  {
							  	this.openingTimes(this.props.openingTimes)
         					  }
						 </div>
						</div>&nbsp;

						<div className="panel panel-primary">
						  <div className="panel-heading ">
						    <h2 className="panel-title"><b>Facilities</b></h2>
						  </div>
						  <div className="panel-body"> 
						  	 <p>
						  	  {
						  	  	this.facilities(this.props.facilities)
						  	  }
						  	  </p> 
						  </div>
						</div>	  	    
					</div>
					
					<div className="col-xs-12 col-md-6">
 				   	  <h1> <b className="reviewsColor">Add Reviews</b></h1>

 				   	  <form className="form-horizontal" onSubmit={this.addReview}>
 				   	    <div className="form-group">
 				   	     <label className="col-xs-10 col-sm-2 control-label"><h4>Name</h4></label>
 				   	     <div className="col-xs-11 col-sm-10">
 				   	      <input type="text" value={this.state.name} onChange={this.addAuthor} className="form-control"/>
 				   	     </div>
 				   	    </div>
 				   	    <div className="form-group">
 				   	     <label className="col-xs-10 col-sm-2 control-label"><h4>Review</h4></label>
 				   	     <div className="col-xs-11 col-sm-10">
 				   	      <textarea type="text" value={this.state.review} onChange={this.addReviewText} rows="4" className="form-control"></textarea>
 				   	     </div>
 				   	    </div>
 				   	    <div className="col-xs-11 arrg col-sm-12">
 				   	      <input type="submit" className="btn btn-danger pull-right" value="Add my review" />
 				   	    </div>
 				   	  </form>
 				   </div>
				</div>	

				<div className="panel panel-primary">
					<div className="panel-heading ">
					  <h2 className="panel-title"><b>Customer Reviews</b></h2>
					</div>
					<div className="panel-body review-container">
					   
					   	  {
			  		   	 	this.allReviews(this.state.allreviews)
				       	  }
				    </div>
				</div>       	  

			
	</div>	


			);

		
		
	}


}

