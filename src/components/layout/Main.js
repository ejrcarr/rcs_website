import React from 'react';
import { Achievements } from '../achievements/Achievements';
import './HomeMain.css';
import { NewsCards } from './news/NewsCards';

export const Main = () => {
	return (
		<>
			<Achievements />
			<div className='news-section'>
				<h1 className='newscards-title'>News</h1>
				<NewsCards />
			</div>
		</>
	);
};
