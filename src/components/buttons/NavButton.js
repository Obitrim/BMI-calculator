import React from 'react';
import './NavButton.css';
import propTypes from 'prop-types';
import ChevronRightIcon from "@material-ui/icons/ChevronRight"

const NavButton = ({ icon, text, onClick }) => {
  return (
    <button className="NavButton PneumoShadow" onClick={onClick}>
    	<div className="IconBox">
    		{icon}
    	</div>
    	<strong className="BtnText">{ text }</strong>
    	<ChevronRightIcon className="ChevronRight"/>
    </button>
  )
}

NavButton.propTypes = {
	icon: propTypes.object,
	text: propTypes.string.isRequired,
	onClick: propTypes.func
}

NavButton.defaultProps = {
	icon: {},
	onClick: function(){
		alert("Requesting navigation. Pass navigation logic as prop to NavButton");
	}
}

export default NavButton;