import React, { useState } from 'react';
import './App.css';
import FaqView from "../faq/Faq";
import AppHome from '../home/Home';
import BmiInfoView from '../info/BmiInfo';
import CalculatorView from '../calculator/Calculator';
import HealthTipsView from '../health-tips/HealthTips';
import ChildDisplayScreen from '../../components/layouts/child-display-screen';

const views = {
	faq: {
		navText: 'FAQ',
		view: <FaqView/>
	},
	tips: {
		navText: 'Health Tips',
		view: <HealthTipsView/>
	},
	calculator: {
		navText: "BMI Calculator",
		view: <CalculatorView/>
	},
	info: {
		navText: 'BMI',
		view: <BmiInfoView/>
	}
}

function App() {
	const [currentView, setCurrentView] = useState({});
	const [contentViewVisible, setContentViewVisible] = useState(false);

	function viewContent(childView){
		document.documentElement.scrollTop = "0px";
		childView = childView.trim().toLowerCase();
		setCurrentView(views[childView]);
		setContentViewVisible(true);
	}

	function backHome(){
		document.documentElement.scrollTop = "0px";
		setContentViewVisible(false);
	}

	return (
		<div className="App">
		  <div className={`App__Slider ${ contentViewVisible && 'App__Slider--ShiftLeft'}`} >
		    <AppHome viewContent={viewContent}/>
		    <ChildDisplayScreen view={ currentView.view } 
		    	navText={ currentView.navText } 
		    	backHome={backHome}/>
		  </div>
		</div>
	);
}

export default App;
