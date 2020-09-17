import React from 'react';
import './Home.css';
import propTypes from 'prop-types';
import HelpIcon from '@material-ui/icons/Help';
import Navbutton from "../../components/buttons/NavButton";
import PhoneIphoneIcon from '@material-ui/icons/PhoneIphone';
import LocalLibraryIcon from '@material-ui/icons/LocalLibrary';
import LocalHospitalIcon from '@material-ui/icons/LocalHospital';

const Home = ({viewContent}) => {
  return (
    <div className="Home FullScreenHeight">
    	<div className="Container">
    		<header className="Header PneumoShadow">
	    		<div className="Header__ImgBox">
	    			<img className="Header__ImgBox__Img"src="/images/doctors.png" alt="doctors" />
	    		</div>
	    		<div className="Header__IntroBox">
	    			<p>Hi there</p>
	    			<h1 className="Header__IntroBox__Heading">
	    				Do you know unmanaged or ignored Body Mass Index checks can result in later complicattions?
	    			</h1>
	    		</div>
	    	</header>
	    	<main className="HomeMain">
	    		<Navbutton text="What is BMI" 
	    			onClick={() => viewContent('info')} 
	    			icon={<LocalLibraryIcon/>}/>
	    		<Navbutton text="Health Tips" 
	    			onClick={() => viewContent('tips')} 
	    			icon={<LocalHospitalIcon/>}/>
	    		<Navbutton text="Calculator" 
	    			onClick={() => viewContent('calculator')} 
	    			icon={<PhoneIphoneIcon/>}/>
	    		<Navbutton text="FAQ"
	    			onClick={() => viewContent('faq')}  
	    			icon={<HelpIcon/>}/>
	    	</main>
    	</div>
    </div>
  )
}

Home.propTypes = {
	viewContent: propTypes.func.isRequired
}

export default Home;