import React from 'react';
import './radio-btn.css';
import propTypes from 'prop-types';

const Index = ({ id, label, iconImgUrl, value, isSelected, alt, onChangeHandler }) => {
  return (
    <div className="CustomRadio">
    	<input type="radio" 
    		className="RadioBtn__Input" 
    		id={id} 
    		checked={isSelected} 
    		onChange={onChangeHandler}
    		value={value}
    		/>
    	<label htmlFor={id} className="RadioBtn__Toggler PneumoShadow">
    		<img src={iconImgUrl} alt={ alt } />
    		{label}
    	</label>
    </div>
  )
}

Index.propTypes = {
	alt: propTypes.string,
	id: propTypes.string.isRequired,
	iconImgUrl: propTypes.string.isRequired,
	isSelected: propTypes.bool,
	label: propTypes.string
}

Index.defaultProps = {
	alt: 'Radio button icon',
	isSelected: false,
	label: ''
}

export default Index;