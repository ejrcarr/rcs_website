import React from 'react';
import './Achievements.css';

export const AchievementCard = ({ icon, title, description }) => {
	return (
		<div className='achievement-card'>
			<i className={icon}></i>
			<h2>{title}</h2>
			<p>{description}</p>
		</div>
	);
};
