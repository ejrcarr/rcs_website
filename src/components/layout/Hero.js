import React, { useContext } from 'react';
import LanguageContext from '../../context/language/languageContext';
import './Hero.css';

export const Hero = () => {
	const languageContext = useContext(LanguageContext);
	const { active } = languageContext;

	return (
		<div className='hero-container'>
			<div className='hero-banner'>
				{active === null && (
					<h2 className='hero-text'>We place children first.</h2>
				)}
				{active !== null && (
					<h2 className='hero-text'>Ponemos a los niños primero.</h2>
				)}
				<button>Enroll</button>
			</div>
		</div>
	);
};
