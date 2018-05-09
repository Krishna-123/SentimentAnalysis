import Navbar from './components/Navbar';

import Footer from './components/Footer';

export default class Reservation extends Component{

	render(){
		return (
	   <div>

			 <Navbar /> <br/>
               <div class="featured background_content">
                <h1>Reserve a Table!</h1>
            </div>
            <div class="text-content container">
                <div class="inner contact">

                    <div class="contact-form">

                        <form id="contact-us" method="post" action="reserve.php">

                            <div class="container">
                                <div class="row">
                                    <div class="col-lg-8 col-md-6 col-xs-12">
                                        <div class="row">
                                            <div class="col-lg-6 col-md-6 col-xs-6">

                                                <input type="text" name="first_name" id="first_name" required="required" class="form" placeholder="First Name" />
                                                <input type="text" name="last_name" id="last_name" required="required" class="form" placeholder="Last Name" />
                                                <input type="text" name="state" id="state" required="required" class="form" placeholder="State" />
                                                <input type="text" name="datepicker" id="datepicker" required="required" class="form" placeholder="Reservation Date" />
                                            </div>

                                            <div class="col-lg-6 col-md-6 col-xs-6">

                                                <input type="text" name="phone" id="phone" required="required" class="form" placeholder="Phone" />
                                                <input type="text" name="guest" id="guest" required="required" class="form" placeholder="Guest Number" />
                                                <input type="email" name="email" id="email" required="required" class="form" placeholder="Email" />
                                                <input type="text" name="subject" id="subject" required="required" class="form" placeholder="Subject" />
                                            </div>

                                            <div class="col-xs-6 ">

                                                <button type="submit" id="submit" name="submit" class="text-center form-btn form-btn">Reserve</button>
                                            </div>

                                        </div>
                                    </div>

                                    <div class="col-lg-4 col-md-6 col-xs-12">

                                        <div class="right-text">
                                            <h2>Hours</h2><hr></hr>
                                            <p>Monday to Friday: 7:30 AM - 11:30 AM</p>
                                            <p>Saturday & Sunday: 8:00 AM - 9:00 AM</p>
                                            <p>Monday to Friday: 12:00 PM - 5:00 PM</p>
                                            <p>Monday to Saturday: 6:00 PM - 1:00 AM</p>
                                            <p>Sunday to Monday: 5:30 PM - 12:00 AM</p>

                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="clear"></div>
                        </form>
                    </div>
                </div>
            </div>

	</div>
		);
	}

}