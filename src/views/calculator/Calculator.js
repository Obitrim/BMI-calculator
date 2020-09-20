import React, { useState } from 'react';
import './Calculator.css';
import swal from 'sweetalert';
import BaseRadio from '../../components/radio-btn';
import SliderBox from "../../components/slider-box";
import CheckCircleIcon from '@material-ui/icons/CheckCircle'

const BMICalculator = (props) => {
	const [age, setAge] = useState(1);
	const [weight, setWeight] = useState(48);
	const [height, setHeight] = useState(1.6);
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

	function isUnderweight(bmiVal, age, gender){
		let isUnderweight = false;
		if(gender.toUpperCase() === "MALE"){
			if((age <= 44 && bmiVal < 23) ||
				(age >= 45 && age < 65 && bmiVal < 24) ||
				(age >= 66 && bmiVal < 25)){
				isUnderweight = true;
			}
		} else {
			if((age <= 34 && bmiVal < 15.5) ||
				(age >= 35 && age < 45 && bmiVal < 19) || 
				(age >= 45 && age < 50 && bmiVal < 20) || 
				(age >= 50 && age < 55 && bmiVal < 22) || 
				(age >= 55 && age < 65 && bmiVal < 23) || 
				(age >= 65 && bmiVal < 19)){
				isUnderweight = true;
			}
		}
		return isUnderweight;
	}

	function hasOptimalBmi(bmiVal, age, gender){
		let bmiIsOptimal = false;
		if(gender.toUpperCase() === "MALE"){
			if((age <= 44 && bmiVal >= 23 && bmiVal < 27) ||
				(age >= 45 && age < 75 && bmiVal >= 24 && bmiVal < 31.5) ||
				(age >= 75 && bmiVal >= 25 && bmiVal < 35)){
				bmiIsOptimal = true;
			} 
		} else {
			if((age <= 34 && bmiVal < 15.5) ||
				(age >= 35 && age < 45 && bmiVal >= 19 && bmiVal < 25) || 
				(age >= 45 && age < 50 && bmiVal >= 20 && bmiVal < 24) || 
				(age >= 50 && age < 55 && bmiVal >= 22 && bmiVal < 26) || 
				(age >= 55 && age < 65 && bmiVal >= 23 && bmiVal < 27) || 
				(age >= 65 && bmiVal >= 24 && bmiVal < 30)){
				bmiIsOptimal = true;
			}
		}
		return bmiIsOptimal;
	}

	function isOverweight(bmiVal, age, gender){
		let isOverweight = false;
		if(gender.toUpperCase() === "MALE"){
			if((age <= 44 && bmiVal >= 27) ||
				(age >= 45 && age < 75 && bmiVal >= 31.5) ||
				(age >= 75 && bmiVal >= 35)){
				isOverweight = true;
			} 
		} else {
			if((age <= 34 && bmiVal < 15.5) ||
				(age >= 35 && age < 45 && bmiVal >=25) || 
				(age >= 45 && age < 50 && bmiVal >=24) || 
				(age >= 50 && age < 55 && bmiVal >= 26) || 
				(age >= 55 && age < 65 && bmiVal >= 27) || 
				(age >= 65 && bmiVal >= 24 && bmiVal < 30)){
				isOverweight = true;
			}
		}
		return isOverweight;
	}

	function handleSubmit(evt){
		evt.preventDefault();
		let bmiVal = weight / (height ** 2);
		bmiVal = bmiVal.toFixed(2);
		let status = "Normal"

		if(isUnderweight(bmiVal, age, gender)){
			status = "Underweight";
		} else if(hasOptimalBmi(bmiVal, age, gender)){
			status = "Normal";
		} else if(isOverweight(bmiVal, age, gender)){
			status = "Overweight";
		} else {
			status = "Obese";
		}
		swal({
			title: 'Evaluation Results',
			text: `Gender: ${gender}\nBMI value: ${bmiVal}\nStatus: ${status}`,
			icon: 'success'
		})
	}

	return (
		<form onSubmit={ handleSubmit } className="Calculator">
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
					step={1}
					/>
			</div>
			<button type="submit" className="Calculator__SubmitBtn">
				Calculate
				<CheckCircleIcon className="CheckCircleIcon"/>
			</button>
		</form>
	)
}

export default BMICalculator;