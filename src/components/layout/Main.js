import React from 'react';
import { Achievements } from '../achievements/Achievements';
import './HomeMain.css';
import { NewsCards } from './news/NewsCards';

export const Main = () => {
	return (
		<>
			<Achievements />
			<div className='rcs-experience-section'>
				<h1 className='newscards-title'>News</h1>
				<NewsCards />
			</div>
			<div className='news-section'></div>
		</>
	);
};
