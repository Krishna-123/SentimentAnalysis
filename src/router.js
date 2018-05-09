import React, { Component } from 'react';
import { Router, Route, hashHistory } from 'react-router';


import Home from './pages/Home.js';
import Pricing from './pages/pricing.js';
import Contact from './pages/Contact.js';
//import Reservation from './pages/Reservation.js';
import About from './pages/About.js';
import NoPage from './pages/NoPage.js';
import SpecificResturants from './pages/SpecificResturants.js';

export default class RouterApp extends Component{

	render(){
		return(
			 <div>
			  <Router history={hashHistory}>
				  
		 			 <Route path="/" component={Home} />
		 			 <Route path="/pricing" component={Pricing} />
		 			 <Route path="/Contact" component={Contact} />
		 			 <Route path="/" component={Home} />
		 			 <Route path="/about" component={About} />
		 			 <Route path="/specific/:id" component={SpecificResturants} />
		 			 <Route path="*" component={NoPage}/>
				  
				  </Router> 
             </div>	
			);
	}
}

