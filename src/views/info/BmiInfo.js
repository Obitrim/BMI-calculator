import './BmiInfo.css';
import React, { useState } from 'react';
import QuickLinks from '../../components/quick-links/QuickLinks';
import HealthEffectListItem from '../../components/health-effect-list-item/HealthEffectListItem';

const BmiInfo = (props) => {
	const [healthEffects] = useState([
		'All-causes of death (mortality)',
		'High blood pressure (hypertension)',
		'High LDL cholesterol, low HDL cholesterol, or high levels of triglycerides (dyslipidemia)',
		'Type 2 diabetes',
		'Coronary heart disease',
		'Stroke',
		'Gallbladder disease',
		'Osteoarthritis (a breakdown of cartilage and bone within a joint)',
		'Sleep apnea and breathing problems',
		'Chronic inflammation and increased oxidative stress',
		'Some cancers (endometrial, breast, colon, kidney, gallbladder, and liver)',
		'Low quality of life',
		'Mental illness such as clinical depression, anxiety, and other mental disorders',
		'Body pain and difficulty with physical functioning'
	]);

  return (
    <div className="BmiInfo">
    	<img src="/images/obesity.png" alt="human with food illustration" />
    	<section className="InfoDefinition PneumoShadow">
    		<h1 className="Section__Heading">What is BMI</h1>
    		<p>
    			Body mass index (BMI) is a person’s weight in kilograms divided by the square 
    			of height in meters. BMI is an inexpensive and easy screening method for weight category—underweight, healthy weight, overweight, and obesity.	
    		</p>
    		<p>
    			BMI does not measure body fat directly, but BMI is moderately correlated with more direct measures
    			of body fat. Furthermore, BMI appears to be as strongly correlated with various metabolic and disease outcome as are these more direct measures of body fatness.
    			BMI can be a screening tool, but it does not diagnose the body fatness or health of an individual. To determine if BMI is a health risk, a healthcare provider 
    			performs further assessments. Such assessments include skinfold thickness measurements, evaluations of diet, physical activity, and family history
    		</p>
    	</section>
    	<section className="Interpretation PneumoShadow">
    		<h1 className="Section__Heading">How is BMI interpreted for adults?</h1>
    		<p>
    			For adults 20 years old and older, BMI is interpreted using standard weight status categories. 
    			These categories are the same for men and women of all body types and ages.	
    		</p>
    		<p>
    			The standard weight status categories associated with BMI ranges for adults are shown in the following table.
    		</p>
    		<div className="TableResponsive">
				<table className="Table TableBordered">
					<caption className="sr-only">The standard weight status categories associated with BMI ranges for adults are shown in the following table.</caption>
					<thead>
						<tr>
							<th scope="col">BMI</th>
							<th scope="col">Weight Status</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td>Below 18.5</td>
						<td>Underweight</td>
						</tr>
						<tr>
							<td>18.5 – 24.9</td>
							<td>Normal or Healthy Weight</td>
						</tr>
						<tr>
							<td>25.0 – 29.9</td>
							<td>Overweight</td>
						</tr>
						<tr>
							<td>30.0 and Above</td>
							<td>Obese</td>
						</tr>
					</tbody>
				</table>
				</div>
    	</section>
    	<section className="InfoConsequences PneumoShadow">
    		<h2 className="Section__Heading">Health consequences for Obesity</h2>
    		<p>People who have obesity are at increased risk for many diseases and health conditions, including the following: </p>
    		<ul className="InfoConsequences__HealthEffectsList">
    			{ healthEffects.map((healthEffect, index) => (
    				<HealthEffectListItem 
    					text={healthEffect} 
    					key={healthEffect + index}
    					/>)
    				)
    			}
    		</ul>
    		<p>
    			For more information on the effects of obesity visit <a href="https://www.cdc.gov/healthyweight/effects/index.html">health effects</a>
    		</p>
    	</section>
    	<QuickLinks/>
    </div>
  )
}

export default BmiInfo;