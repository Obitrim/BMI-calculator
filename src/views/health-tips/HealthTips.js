import React, { useState } from 'react';
import './HealthTips.css';
import CollapsibleCard from "../../components/collapsible-card";
import QuickLinks from "../../components/quick-links/QuickLinks";

const HealthTips = (props) => {
	const [activityTips] = useState([
		{
			title: "Bike or walk to work",
			details: `When a car is your main source of transportation, the hours of inactivity can add up. 
				If you live somewhat close to your job, try biking or walking to work instead of driving.`
		},{
			title: "Set some fitness goals",
			details: `Want to take the prize at the company bowling outing? Or PR at this year’s Turkey Trot? 
				Fitness goals are a great way to stay active, get in shape, and bask in the glory of victory. Start by setting goals that are SMART - Specific, Measurable, Attainable, Relevant, and Time-bound – so you can benchmark your progress against them. Meeting your goals requires some planning, a training routine – and yes, hard work and dedication. 
				But that feeling when you crush your goals will make it all worth it..`
		},{
			title: "Build a weekly workout routine",
			details: `Planning your workouts ahead of time will help you stay on track and meet your fitness goals. It’s challenging to 
				get used to a new routine, but as you start getting in shape, you’ll start feeling good. You may even want to amp up your fitness game more!\n\n
				The CDC recommends adults should do at least 2 hours and 30 minutes a week of moderate-intensity or 1 hour and 15 minutes a week of vigorous-intensity aerobic activity. Children and 
				adolescents should do 1 hour or more of physical activity daily. If you’re new to fitness, start slow, but stick to a routine.`
		},{
			title: "Hit the gym",
			details: `It’s sometimes tough to stay motivated, especially when your schedule is full and you’re feeling run down. 
				But truth be told, a bonus benefit of getting a gym membership is for the gymspiration. At the gym, you’ll be surrounded by like-minded people who make physical fitness a priority, which can help you stay motivated to achieve your fitness goals. 
				Lots of gyms also offer fun fitness classes, which are a great way to add some variety to your routine. `
		},{
			title: "Stay inspired",
			details: `Staying inspired can be a real challenge, especially if you’re working out and don’t notice immediate results. 
				One way you can stay motivated to be physically active is to make an inspiration board (or Pinterest board) of people who inspire you to stay active. You can also follow inspiring blogs or Instagram accounts. From pro-athletes to 2001 Britney, 
				there are definitely people out there whose bodies and dedication to an active lifestyle can motivate you to stay in the game.`
		},{
			title: "Plan group fitness activities with friends",
			details: `Peer pressure can sometimes be a good thing, especially when it comes to fitness. 
				The next time you’ve got plans with friends, suggest a group activity like dancing, bowling, or hiking. Building relationships that revolve solely around food and drink can build some hard-to-break habits. 
				Motivate yourself (and your friends) to get moving with some healthy new activities to try the next time you hang. `
		},{
			title: "Take a stand",
			details: `Too much sitting at work can decrease blood flow to your brain and body, causing mental and physical fatigue. 
				Try using a standing desk at work to keep your body and mind active while you beat that terrible case of the Mondays. 
				Remember to alternate between sitting and standing throughout the day to keep your feet, legs, and back happy.`
		},{
			title: "Climb your way to better health",
			details: `The next time you have a choice between escalators, elevators, and stairs, choose to climb your way to the top. 
				Stairs increase your heart rate and build muscle tone. 
				They’re a great way to implement physical activity in your day-to-day without planning ahead of time.`
		},{
			title: "Do those chores",
			details: `Cooking, house cleaning, and yard work are great ways to increase your physical activity and 
				cross items on your to-do list off at the same time. 
				If you’re feeling lethargic, now’s the perfect time to Marie Kondo that closet and spark joy.`
		},{
			title: "Get a pet",
			details: `Playing with a furry friend can help add you rack up activity points. Routine walking, grooming, 
				and playing fetch or catch-the-red-dot will get your heart pumping. Plus, pets can decrease anxiety, stress, 
				and depression, lower your blood pressure, and even reduce your risk of heart attack or stroke.`
		},{
			title: "Change the scenery",
			details: `It’s easy to become a couch potato, especially if you never leave the house. 
				Plan a weekend getaway or trip somewhere you’ve always wanted to travel to. Experiencing the unknown will make you more inclined to get moving, check out some sights, and try new things. 
				Be inspired to chase waterfalls, wander through ancient ruins, or swim with the dolphins`
		},{
			title: "Try a new hobby",
			details: `Get out of your comfort zone with a new hobby like yoga or salsa lessons. 
				Taking the plunge to follow a new passion will connect you with a community of 
				people who will inspire and challenge you in new ways. Plus, you might discover some muscles you never knew existed!`
		}
	])

	return (
		<div className="HealthTips">
			<article className="HealthTip PneumoShadow">
				<h1 className="HealthTip__Title">How to maintain a healthy <abbr title="Body Mass Index">BMI</abbr></h1>
				<p>People come in all shapes and sizes. While it’s good to embrace our differences, staying healthy is important for everyone. One key indicator of health is your body fat percentage.</p>
				<p>
					The first step in managing your body fat is to get an accurate measurement of how much body fat you have. The best way gage this is to measure your Body Mass Index (BMI), 
					which estimates your percentage of body fat based on your height and weight
				</p>
				<p>
					For adults, your BMI is calculated by dividing your weight over the square of your height. By factoring in both your height and weight (and not just your weight alone), 
					your BMI helps determine if you are at risk of certain diseases
				</p>
			</article>
			<article className="HealthTip PneumoShadow">
				<h1 className="HealthTip__Title">How to maintain a healthy <abbr title="Body Mass Index">BMI</abbr>?</h1>
				<p>
					Maintaining a healthy BMI takes some work. For starters, it’s important to exercise at least 60-90 minutes most days of the week. Staying hydrated and eat a balanced diet are equally important. If your BMI isn’t where it should be, 
					you may want to reduce your caloric intake and increase your exercise.
				</p>
			</article>
			<div className="HealthTip PneumoShadow">
				<h1 className="HealthTip__Title">Healthy Activities</h1>
				<p>
					Below are some activities to help you in your attempt to reduce your <abbr title="Body Mass Index">BMI</abbr>
				</p>
				{activityTips.map((tip, index) => (
					<CollapsibleCard 
						title={tip.title} 
						content={tip.details} 
						key={tip.title + index}
					/>
				))}
			</div>
			<article className="HealthTip PneumoShadow">
				<h1 className="HealthTip__Title">When to call in a doctor</h1>
				<p>
					If your BMI score is outside of a healthy percentile, it’s time to call a professional. Consult your primary care doctor for advice on ways you can achieve a healthy balance of body fat. 
					If needed, you may need to see a dietician to achieve your health goals.
				</p>
			</article>
			<QuickLinks className="HealthTip"/>
		</div>
	)
}

export default HealthTips;