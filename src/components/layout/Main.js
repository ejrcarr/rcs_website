import React from 'react';
import { Achievements } from '../achievements/Achievements';
import './HomeMain.css';

export const Main = () => {
	return (
		<>
			<Achievements />
			<div className='rcs-experience-section'>
				<div className='home-main-content'>
					<p>RCS Experience</p>
					<h1>Be Yourself.</h1>
					<p>
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit dicta
						deleniti culpa sapiente iste! Repudiandae amet voluptatibus tempore
						at? Libero molestiae doloribus provident?{' '}
						<span className='bold'>
							Tempore omnis maxime inventore perspiciatis sapiente autem!
						</span>
					</p>
					<button>
						Explore <i className='fas fa-long-arrow-alt-right'></i>
					</button>
				</div>
				<div className='home-main-image-gallery'>somethin</div>
			</div>
			<div className='news-section'></div>
		</>
	);
};
