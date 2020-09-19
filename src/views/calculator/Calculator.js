import React, { useState } from 'react';
import './Calculator.css';
import BaseRadio from '../../components/radio-btn';
import SliderBox from "../../components/slider-box";
import CheckCircleIcon from '@material-ui/icons/CheckCircle'

const BMICalculator = (props) => {
	const [height, setHeight] = useState(1.6);
	const [weight, setWeight] = useState(48);
	const [age, setAge] = useState(0);
	const [gender, setGender] = useState('male');
	/**
	 *
	 * Handles changes made to the Radio buttons
	 * Sets value of checked radio button to value of checked radio button
	 *
	 * @param {Object} evt - Event Object
	 *
	 * @returns {undefined};
	 */
	function onGenderChangeHandler(evt){
		setGender(evt.target.value);
	}
	/**
	 *
	 * Handles changes made to the weight range
	 *
	 * @param {Object} evt - Event Object
	 *
	 * @returns {undefined};
	 */
	function onWeightChangeHandler(evt){
		setWeight(Number(evt.target.value));
	}
	/**
	 *
	 * Handles changes made to the height range
	 *
	 * @param {Object} evt - Event Object
	 *
	 * @returns {undefined};
	 */
	function onHeightChangeHandler(evt){
		setHeight(Number(evt.target.value));
	}
	/**
	 *
	 * Handles changes made to the age range
	 *
	 * @param {Object} evt - Event Object
	 *
	 * @returns {undefined};
	 */
	function onAgeChangeHandler(evt){
		setAge(Number(evt.target.value));
	}

	return (
		<div className="Calculator">
			<div className="GenderBox">
				<BaseRadio
					iconImgUrl="/icons/male-icon.png" 
					alt="Male icon"
					id="maleRadio"
					label="Male"
					onChangeHandler={onGenderChangeHandler}
					isSelected={gender === 'male'}
					value="male"
					/>
				<BaseRadio 
					iconImgUrl="/icons/female-icon.png" 
					id="femaleRadio"
					label="Female"
					onChangeHandler={onGenderChangeHandler}
					alt="Female icon"
					isSelected={gender === 'female'}
					value="female"
					/>
			</div>
			<div className="ControlWrapper PneumoShadow">
				<SliderBox 
					id="heightInputBox" 
					label="Height (m)"
					max={3}
					step={0.01}
					onRangeChangeHandler={onHeightChangeHandler}
					value={height} 
					/>
			</div>
			<div className="ControlWrapper PneumoShadow">
				<SliderBox 
					id="weightInputBox" 
					label="Weight (kg)"
					onRangeChangeHandler={onWeightChangeHandler}
					value={weight} 
					/>
			</div>
			<div className="ControlWrapper PneumoShadow">
				<SliderBox 
					id="ageInputBox" 
					label="Age (years)"
					max={300}
					onRangeChangeHandler={onAgeChangeHandler}
					value={age} 
					/>
			</div>
			<button type="submit" className="Calculator__SubmitBtn">
				Calculate
				<CheckCircleIcon/>
			</button>
		</div>
	)
}

export default BMICalculator;