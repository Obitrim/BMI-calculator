import React from 'react';
import './slider-box.css';
import propTypes from 'prop-types';

const Index = ({maxWidth, label, id, value, min, max, step, onRangeChangeHandler}) => {
  return (
    <div className="SliderWrapper" style={{maxWidth}}>
    	<div className="SliderWrapper__Box">
    		<label htmlFor={id}>{ label }</label>
    		<output className="SliderOutput">{ value }</output>
    	</div>
    	<input type="range" 
    		className="SliderWrapper__RangeInput"
    		onChange={onRangeChangeHandler}
    		value={value} 
    		min={min}
    		max={max}
    		id={id} 
    		step={step}
    		/>
    </div>
  )
}

Index.propTypes = {
	label: propTypes.string,
	maxWidth: propTypes.string,
	id: propTypes.string.isRequired,
	value: propTypes.number.isRequired,
	min: propTypes.number,
	max: propTypes.number,
	step: propTypes.number
}

Index.defaultProps = {
	maxWidth: '100%',
	label: 'Input Label',
	min: 0.01,
	max: 100,
	step: 0.1
}

export default Index;