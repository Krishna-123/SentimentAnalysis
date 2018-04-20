import React, { Component } from 'react';
import './Home.css';
import Navbar from './components/Navbar';
import ImageCaurosel from './components/ImageCaurosel';
import LeftSidebar from './components/LeftSidebar';
import MainComponent from './components/MainComponent';
import RightSidebar from './components/RightSidebar';
import Footer from './components/Footer';

class Home extends Component {
  render() {
    return (
      <div>
         <Navbar />	<br/>
         <ImageCaurosel /> <br/>
         <div className="row styleRow" > 
           <LeftSidebar />
           <MainComponent />
           <RightSidebar />
         </div> 
         <Footer />
      </div>
    );
  }
}

export default Home;
