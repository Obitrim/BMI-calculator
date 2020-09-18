import './ChildView.css';
import React from 'react';
import propTypes from 'prop-types';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft'

const index = ({ view, backHome, navText }) => {
  return (
    <div className="ChildView">
    	<div className="Container">
            <nav className="Navbar">
                <button className="Navbar__BackBtn PneumoShadow" 
                    type="button" 
                    onClick={() => backHome()}
                    >
                    <ChevronLeftIcon/>
                </button>
                <span className="Navbar__Text">{ navText }</span>
            </nav>
        <div className="ChildView__View">
            {view}  
        </div> 
        </div>
    </div>
  )
}

index.propTypes = {
	view: propTypes.object,
	backHome: propTypes.func.isRequired,
    navText: propTypes.string
}

index.defaultProps = {
    navText: 'Back'
}

export default index;