import "./Faq.css";
import React, { useState } from 'react';
import QuickLinks from '../../components/quick-links/QuickLinks';
import CollapsibleCard from '../../components/collapsible-card';

const Faq = (props) => {
	const [faqs] = useState([
		{
			question: 'Who invented BMI?',
			answer: `The BMI formula and its name were invented by different people, living 
				in different centuries. The BMI formula was developed in the 1830s by Adolphe Quetelet, a Belgian mathematician and social statistician. He used his skills in calculus and statistics to analyse the relationship between height and weight in populations, and formulated what was known for 140 years as the Quetelet Index. In 1972 the American biologist and physiologist Ancel Keys published a paper endorsing the 
				validity of the index, and in the process he renamed it and popularised it as the Body Mass Index.`
		},{
			question: 'Why is BMI important?',
			answer: `BMI is important as it is able to predict, with considerable accuracy, 
				mortality and morbidity rates in populations. What this means is that BMI is 
				not only able to predict the rates at which people within a given population or group will die and suffer disease, but it is able to predict the incidence of the different types of diseases which occur in the population and which cause those deaths. However, as Adolphe Quetelet (see ‘Who invented BMI?’ above) 
				and Ancel Keys stressed, BMI’s predictive abilities apply to populations only, and not to individuals within it.`
		},{
			question: 'How is BMI calculated?',
			answer: `BMI is calculated using only the variables of weight and height. 
				Your BMI is equal to your weight in kilograms divided by your height in metres squared. 
				You can also calculate your BMI using imperial units, in which case your BMI is equal to your weight in pounds divided by your height in inches squared, multiplied by 703. 
				See the BMI page for these equations and for further information on the Body Mass Index. To calculate your own BMI, use our BMI calculator.`
		},{
			question: 'When should BMI be used?',
			answer: `The calculation of BMI can be used for males and non-pregnant females between the ages of 18 and 65. 
				Although BMI is calculated for children in exactly the same way as for adults, the results are used in an 
				entirely different way and for that reason a standard BMI calculator should not be used for those under the age of 18.
				Also, the physiology of elderly people differs from other adults (due to factors such as muscle wasting and height reduction), and consequently BMI calculations should not be made for that group. BMI calculations are also unsuitable for those who have developed significant 
				amounts of muscle mass through physical exercise, as the results will tend to indicate higher levels of body fat than is actually the case.`
		},{
			question: 'Where can I calculate my BMI?',
			answer: `You can calculate your BMI right here at KiwiCover. 
				Unlike most (if not all) other BMI calculators, our BMI calculator will also calculate the number of kilograms by which you need 
				to reduce (or increase) your weight in order to place yourself just inside the healthy weight range. Also, the KiwiCover BMI calculator 
				takes your gender and ethnicity into account, unlike many other BMI calculators which disregard these important evidence-based factors. 
				To add even more value, our BMI calculator takes your waist metrics into account, 
				and uses the indicators of waist circumference and waist-to-height ratio as important supplementary measures to BMI.`
		},{
			question: 'What BMI categories are there?',
			answer: `The five principal categories for BMI are detailed in the <a href="/your-health/bmi">BMI Categories and Ranges</a> 
				section of the main BMI page. That section contains a table which provides an example of BMI categories and ranges based on 
				New Zealand European males and females, but it is important to note that this is an example only. While category descriptions 
				remain the same, BMI ranges tend to differ according to ethnicity, 
				and those differences can be significant. That is why ethnicity is an important factor in the KiwiCover BMI calculator.`
		},{
			question: 'Is BMI used by doctors?',
			answer: `Yes, BMI is used by life and health insurers when assessing applications for life, health, trauma, income protection and permanent disability insurance. On its own it can act as a trigger point for requesting medical examinations or tests, but it is more often used in combination with other health factors and particular health conditions.`
		},{
			question: 'Is gender a factor in BMI?',
			answer: `Yes, gender is a factor in BMI, even though the World Health Organisation (for simplicity) uses the same BMI categories 
				and ranges for both males and females. However, it is well documented that women tend to carry higher levels of stored fat than 
				men. For women with a BMI in the healthy weight range, fat comprises around 15% to 20% of total body weight, whereas the 
				corresponding percentages in men are 10% to 15%. The reason why women tend to carry more fat than men is the biological expectation of pregnancy, and the imperative to nourish the feotus.`
		},
	]);

	return (
		<div className="Container Faq">
			<img src="/images/faq.png" alt="" className="Faq__Img" />
			<div className="Faq__Questions PneumoShadow">
				{faqs.map((faq, index) => (
					<CollapsibleCard title={faq.question} content={faq.answer} key={index}/>
					))}
			</div>
			<QuickLinks/>
		</div>
	)
}

export default Faq;