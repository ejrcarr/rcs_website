import React from 'react';
import logo from '../../imgs/rcs_logo.png';
import './Footer.css';

export const Footer = () => {
	return (
		<footer className='footer-container flex-vertical'>
			<div className='social-links-dock flex-center'>
				<a
					href='https://www.facebook.com/RoxboroCS/'
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
				<div className='info-wrapper flex-center'>
					<div className='location-container'></div>
					<div className='contact-container flex-vertical'>
						<img src={logo} alt='' />
						<h3>Roxboro Community School</h3>
						<p>
							<i class='fas fa-map-marker-alt'></i> 115 Lake Drive Roxboro |
							North Carolina 27573
						</p>
						<p>
							<i class='fas fa-phone-square-alt'></i> 336-597-0020
						</p>
						<p>
							<i class='fas fa-phone-square-alt'></i> 336-419-4551
						</p>
						<p>
							<i class='fas fa-envelope'></i> information@roxborocs.org
						</p>
					</div>
					<div className='links-container'></div>
				</div>
			</div>
			<div className='copyright flex-center'>
				<p>Copyright © 2022 Roxboro Community School. All rights reserved.</p>
			</div>
		</footer>
	);
};
