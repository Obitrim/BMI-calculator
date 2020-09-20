import React from 'react';
import './ReferenceLinks.css';

const ReferenceLinks = (props) => {
  return (
    <div className="PneumoShadow ReferenceLinks">
    	<h3>References</h3>
    	<ol type="I" className="ReferenceLinks__ReferenceList">
    		<li><a href="https://www.cdc.gov/healthyweight/assessing/bmi/adult_bmi/index.html">BMI information from Centre for Disease Control and Prevention</a></li>
    		<li><a href="https://www.hioscar.com/blog/how-to-maintain-a-healthy-body-mass-index-bmi">Read Body Mass Index from Hioscor.com</a></li>
    		<li><a href="https://www.hioscar.com/blog/how-to-stay-active-and-why-it-matters-for-your-health">How to keep active to reduce your BMI</a></li>
    		<li><a href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC4681110/">How Age range and gender effects on BMI was gotten from the Korean Populace</a></li>
    	</ol>
    </div>
  )
}

export default ReferenceLinks;