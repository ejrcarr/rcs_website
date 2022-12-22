import React, { useContext } from 'react';
import LanguageContext from '../../context/language/languageContext';

export const Alert = () => {
	const languageContext = useContext(LanguageContext);
	const { active } = languageContext;
	return (
		<div className='light-alert flex-center'>
			{active === null && (
				<h3>
					Learn more about our response to COVID-19{' '}
					<i className='fas fa-long-arrow-alt-right'></i>
				</h3>
			)}
			{active !== null && (
				<h3>
					Aprender más sobre nuestra reacción a COVID-19{' '}
					<i className='fas fa-long-arrow-alt-right'></i>
				</h3>
			)}
		</div>
	);
};
