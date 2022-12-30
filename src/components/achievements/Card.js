import React from 'react';
import './Card.css';

export const Card = ({ image, title, description }) => {
	return (
		<div className='display-card'>
			<div className='card-image'>
				<img src={image} alt='' />
			</div>

			<div className='card-content'>
				<h2>{title}</h2>
				<p>{description}</p>
				<a href='/' className='learn-more-link'>
					Learn more <i className='fas fa-long-arrow-alt-right'></i>
					<i className='fas fa-link'></i>
				</a>
			</div>
		</div>
	);
};
