import React, { Component } from 'react';

import Navbar from './components/Navbar';

import Footer from './components/Footer';
import ImageCaurosel from './components/ImageCaurosel';


export default class Pricing extends Component{

	render(){
		return (
        	    <div>

                     <Navbar />

                       <img src="images/menu3.jpg" height="500" width="1500"/>
                       <br></br>
                        <div class="container">
                            <div class="row">
                                <div class="col-md-offset-2 col-md-8 col-sm-12 text-center">
                                    <h1 class="heading">Special Menu</h1>
                                    <hr></hr>
                                </div>
                                <div class="col-md-6 col-sm-6">
                                    <h4>Lemon-Rosemary Vegetable ................ <span>$20.50</span></h4>
                                    <h5>Chicken / Rosemary / Lemon</h5>
                                </div>
                                <div class="col-md-6 col-sm-6">
                                    <h4>Lemon-Rosemary Meat ........................... <span>$30.50</span></h4>
                                    <h5>Meat / Rosemary / Lemon</h5>
                                </div>
                                <div class="col-md-6 col-sm-6">
                                    <h4>Lemon-Rosemary Pork ........................ <span>$40.75</span></h4>
                                    <h5>Pork / Tooplate / Lemon</h5>
                                </div>
                                <div class="col-md-6 col-sm-6">
                                    <h4>Orange-Rosemary Salad .......................... <span>$55.00</span></h4>
                                    <h5>Salad / Rosemary / Orange</h5>
                                </div>
                                <div class="col-md-6 col-sm-6">
                                    <h4>Lemon-Rosemary Squid ...................... <span>$65.00</span></h4>
                                    <h5>Squid / Rosemary / Lemon</h5>
                                </div>
                                <div class="col-md-6 col-sm-6">
                                    <h4>Orange-Rosemary Shrimp ........................ <span>$70.50</span></h4>
                                    <h5>Shrimp / Rosemary / Orange</h5>
                                </div>
                                <div class="col-md-6 col-sm-6">
                                    <h4>Lemon-Rosemary Prawn ................... <span>$110.75</span></h4>
                                    <h5>Chicken / Rosemary / Lemon</h5>
                                </div>
                                <div class="col-md-6 col-sm-6">
                                    <h4>Lemon-Rosemary Seafood ..................... <span>$220.50</span></h4>
                                    <h5>Seafood / Rosemary / Lemon</h5>

                                </div>
                            </div>
                       </div>
             </div>
		);
}
}

