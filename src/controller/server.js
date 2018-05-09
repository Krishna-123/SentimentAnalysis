
var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var cors = require('cors');
var MongoClient = require('mongodb').MongoClient;// npm install mongodb --save
var url = "mongodb://Krishna123:vkrishna123@ds149309.mlab.com:49309/resturantsdetails";
const port = process.env.PORT || 3001;
var request = require('ajax-request');

var details = {
	id:[],
	name:[],
	address:[],
	rating:[],
	facilities:[],
	openingTimes:[],
	reviews:[]
}

	app.use(cors());      // to support JSON-encoded bodies
	app.use( bodyParser.json() );       // to support JSON-encoded bodies
	app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
	  extended: true
	})); 

	app.use(express.json());       // to support JSON-encoded bodies
	app.use(express.urlencoded()); // to support URL-encoded bodies

	app.get('/homerender.json', (req, res) => { //es6 style
    console.log('get is received for home page');
    MongoClient.connect(url, function(err, dbo) {
	    if (err) throw err;
	    // var query = { id: 1 };
	    var database = dbo.db('resturantsdetails');
	    database.collection("resturants").find({}).toArray( function(err, resturants) {
	    if (err) throw err;
	    for (var i = 0; i < resturants.length; i++) {
	    	details.id[i] = resturants[i].id;
	    	details.name[i] = resturants[i].name;
	    	details.address[i] = resturants[i].address;
	    	details.rating[i] = resturants[i].rating;
	    	details.facilities[i] = resturants[i].facilities;
	    	details.openingTimes[i] = resturants[i].openingTimes;
	    	details.reviews[i] = resturants[i].reviews;
	    }
	    
	    dbo.close();
		res.setHeader('Cache-Control', 'no-cache');
   		res.json(details);
	    });
         
      }); 
	 
	});

	app.get('/specific', (req, res) => {
		  console.log('get is received for specific page ' + req.query.id);
		  var id = req.query.id - 1 ;

		  var SpecificDetails = {
   		  	id : details.id[id],
   		  	name: details.name[id],
			address: details.address[id],
			rating: details.rating[id],
			facilities: details.facilities[id],
			openingTimes: details.openingTimes[id],
			reviews: details.reviews[id]
   		  };

		  console.log(SpecificDetails);
		  res.setHeader('Cache-Control', 'no-cache');
   		  res.json(SpecificDetails);
	});

	app.post('/addreview', (req, res) => {
		var name  = req.body.author,
			review = req.body.reviewText;

		console.log("post received as new review is added " + name )
		console.log("post received as new review is added " + review )
		addReview(review)	
		 res.setHeader('Cache-Control', 'no-cache');
   		 res.json("{success}");
	});


	app.post('/addtodatabase', (req,res) => {
		
		var restaurantId = req.body.restaurantID;
		
		console.log("here is the thing to check :- " + req.body.restaurantReview.author +
		     "\nhere is the review :- " + req.body.restaurantReview.reviewText )
		
		author =  req.body.restaurantReview.author
		review = req.body.restaurantReview.reviewText 
		rating = req.body.restaurantReview.rating 
		var Rid = 	4
		
	  MongoClient.connect(url, function(err, dbo) {
	     if (err) throw err;
	    var query = { id: 5 }
	    query.id = Rid
		 console.log("id of the resturant is :- " + query.id)	    
	    var database = dbo.db('resturantsdetails');
	    database.collection("resturants").update( query,  
	    	{ $push: {reviews: { author: author, reviewText: review, rating: rating } 
	 	
	 	 } 
	   } ,
	    function(err, resturants) {
	    if (err) throw err;
	    console.log("document updated successfully!")
	    dbo.close();
		res.setHeader('Cache-Control', 'no-cache');
   		res.json("{success}");
	    });
         
      }); 

	})


app.listen(port,  function () {
  console.log("server is created!!");
})

	// var getRestaurantsDetails = function(){

 //    	MongoClient.connect(url, function(err, dbo) {
	//     if (err) throw err;
	//     // var query = { id: 1 };
	//     var database = dbo.db('resturantsdetails');
	//     database.collection("resturants").find({}).toArray( function(err, res) {
	//     if (err) throw err;
	//     restaurantsDetails = res;
	//     dbo.close();
	//     });
         
 //      });   

 // 	}

// restaurantsDetails = res;
	    
	    // lengthRes = res.length; 
// for (var i = 0 ; i < res.length; i++) {
// 	    	details.name[i] = res[i].name;
// 	    	details.address[i] = res[i].address;
// 	    	details.rating[i] = res[i].rating;
// 	    	details.facilities[i] = res[i].facilities;
// 	    }
 // MongoClient.connect(url, function(err, dbo) {
 //  if (err) throw err;
 //  	var myobj = { Date: "todayDate", Message: "mess" }; 
 //  	var database = dbo.db('resturantsdetails');
 // 	 database.collection("resturants").insertOne(myobj, function(err, res) {
 //        if (err) throw err;
 //        console.log("documents inserted");
 //        dbo.close();
 //       });
 //      });
