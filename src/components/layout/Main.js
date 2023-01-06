import React from 'react';
import { Achievements } from '../achievements/Achievements';
import './HomeMain.css';

export const Main = () => {
	return (
		<>
			<Achievements />
			<div className='rcs-experience-section'></div>
			<div className='news-section'></div>
		</>
	);
};
