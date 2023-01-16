import React from 'react';
import './NewsCards.css';

export const NewsCard = ({ img, title, content }) => {
	return (
		<div className='newscard-container'>
			<img src={img} alt='' />
			<div className='newscard-content'>
				<h2>{title}</h2>
				<p>{content}</p>
			</div>
		</div>
	);
};
