import React, { Component } from 'react';
import './Home.css';

import Navbar from './components/Navbar';
import LeftSidebar from './components/LeftSidebar';


import MainComponent from './components/MainComponent';

import Footer from './components/Footer';

class Home extends Component {
  render() {
    return (
      <div>
         <Navbar />	<br/>
                     <div class="img-section">
                       <img src="images/steak.jpg" height="700" width="1800"/>
                     </div>
             <LeftSidebar />



         <div className="row styleRow" >

            <div  className="col-md-6">
               <body>
                <MainComponent />
               </body>

            </div>
         </div>
      </div>
    );
  }
}

export default Home;
