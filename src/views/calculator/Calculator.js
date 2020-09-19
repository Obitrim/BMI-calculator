import React, { useState } from 'react';
import './Calculator.css';
import BaseRadio from '../../components/radio-btn';

const BMICalcualtor = (props) => {
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
	function onChangeHandler(evt){
		setGender(evt.target.value);
	}

	return (
		<div className="Calculator">
			<div className="Container">
				<div className="GenderBox">
					<BaseRadio
						iconImgUrl="/icons/male-icon.png" 
						alt="Male icon"
						id="maleRadio"
						label="Male"
						onChangeHandler={onChangeHandler}
						isSelected={gender == 'male'}
						value="male"
						/>
					<BaseRadio 
						iconImgUrl="/icons/female-icon.png" 
						id="femaleRadio"
						label="Female"
						onChangeHandler={onChangeHandler}
						alt="Female icon"
						isSelected={gender == 'female'}
						value="female"
						/>
				</div>
			</div>
		</div>
	)
}

export default BMICalcualtor;