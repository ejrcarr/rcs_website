import React, { useContext } from 'react';
import logo from '../../imgs/rcs_logo.png';
import LanguageContext from '../../context/language/languageContext';
// import rcs_phone_app from '../../imgs/rcs-phone-app.png';
import './Footer.css';

export const Footer = () => {
	const languageContext = useContext(LanguageContext);
	const { active } = languageContext;

	return (
		<footer className='footer-container flex-vertical'>
			<div className='social-links-dock flex-center'>
				<a
					href='https://www.youtube.com/@rcscommunications9968'
					target='_blank'
					rel='noreferrer'
				>
					<i className='fab fa-youtube'></i>
				</a>
				<a
					href='https://twitter.com/rcsbulldogs'
					target='_blank'
					rel='noreferrer'
				>
					<i className='fab fa-twitter'></i>
				</a>
				<a
					href='https://www.instagram.com/rcsbulldogs/'
					target='_blank'
					rel='noreferrer'
				>
					<i className='fab fa-instagram'></i>
				</a>
				<a
					href='https://www.facebook.com/RoxboroCS/'
					target='_blank'
					rel='noreferrer'
				>
					<i className='fab fa-facebook'></i>
				</a>
			</div>
			<div className='info-container flex-center'>
				<div className='links-container'></div>
				<div className='contact-container flex-vertical'>
					<img src={logo} alt='' />
					<h3>Roxboro Community School</h3>
					<p>
						<i className='fas fa-map-marker-alt'></i> 115 Lake Drive Roxboro |
						North Carolina 27573
					</p>
					<p>
						<i className='fas fa-phone-square-alt'></i> 336-597-0020
					</p>
					<p>
						<i className='fas fa-phone-square-alt'></i> 336-419-4551
					</p>
					<p>
						<i className='fas fa-envelope'></i> information@roxborocs.org
					</p>
				</div>
				<div className='app-container'></div>
			</div>
			{active === null && (
				<div className='copyright flex-center'>
					<p>Copyright © 2022 Roxboro Community School. All rights reserved.</p>
				</div>
			)}
			{active !== null && (
				<div className='copyright flex-center'>
					<p>
						Derechos de autor © 2022 Roxboro Community School. Reservados todos
						los derechos.
					</p>
				</div>
			)}
		</footer>
	);
};
