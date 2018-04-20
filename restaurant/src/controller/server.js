
var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var cors = require('cors');
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://Krishna123:vkrishna123@ds149309.mlab.com:49309/resturantsdetails";
const port = process.env.PORT || 3001;

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

	app.post('/homerender.json', (req, res) => {
    console.log('post is received for home page');
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

	app.post('/specific', (req, res) => {
		  console.log('post is received for specific page ' + req.query.id);
		  res.setHeader('Cache-Control', 'no-cache');
   		  res.json(details);
	});

app.listen(port, function () {
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
