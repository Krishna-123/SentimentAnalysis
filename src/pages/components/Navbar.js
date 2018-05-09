import React, { Component } from 'react';
import './Navbar.css'
import { Link } from 'react-router';
export default class Navbar extends Component{


  render(){

		return(

			<div >
      <body>
       <link rel="stylesheet" href="css/normalize.css"/>
        <link rel="stylesheet" href="css/main.css" media="screen" type="text/css"/>
        <link href='http://fonts.googleapis.com/css?family=Pacifico' rel='stylesheet' type='text/css' />
        <link href='http://fonts.googleapis.com/css?family=Playball' rel='stylesheet' type='text/css'/>
        <link rel="stylesheet" href="css/bootstrap.css"/>
        <link rel="stylesheet" href="css/style-portfolio.css" />
        <link rel="stylesheet" href="css/picto-foundry-food.css" />
        <link rel="stylesheet" href="css/jquery-ui.css" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link href="css/font-awesome.min.css" rel="stylesheet" />
        <link rel="icon" href="favicon-1.ico" type="image/x-icon" />
     </body>
			  <nav class="navbar navbar-default navbar-fixed-top" role="navigation">
            <div class="container">
                <div class="row">

                     <div class="navbar-header">
                        <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
                            <span class="sr-only">Toggle navigation</span>
                            <span class="icon-bar"></span>
                            <span class="icon-bar"></span>
                            <span class="icon-bar"></span>
                        </button>
                        <a class="navbar-brand" href="#">Restaurant</a>
                     </div>


                    <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                        <ul class="nav navbar-nav main-nav  clear navbar-right ">
                         <div class="color_animation">
                            <li><Link to="#">WELCOME</Link></li>
                            <li><Link to="/pricing">PRICING</Link></li>
                            <li><Link to="/about">ABOUT</Link></li>
                            <li><Link to="/Reservation">RESERVATION</Link></li>
                            <li><Link to="/Contact">CONTACT</Link></li>
                            <li><Link to="#">LOGIN</Link></li>
                            <li><Link to="#">SIGNUP</Link></li>
                        </div>
                        </ul>
                    </div>
                </div>
            </div>
        </nav>

        <div id="top" class="starter_container bg">
            <div class="follow_container">
                <div class="col-md-6 col-md-offset-3">
                    <h2 class="top-title"> Restaurant</h2>

                    <hr></hr>
                </div>
            </div>
        </div>
    		</div>
			);
	}
}

