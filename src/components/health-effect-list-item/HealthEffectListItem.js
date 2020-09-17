import React from 'react';
import './HealthEffectListItem.css';
import StarIcon from '@material-ui/icons/Stars';

const HealthEffectListItem = ({ text }) => {
  return (
    <li className="HealthEffectsList__Item">
		<StarIcon className="StarIcon"/>
		{text}
	</li>
  )
}

export default HealthEffectListItem;