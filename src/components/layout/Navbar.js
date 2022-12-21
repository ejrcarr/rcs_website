import React from 'react';
import './Navbar.css';
import logo from '../../imgs/rcs_logo.png';
import { Hamburger } from './Hamburger';

export const Navbar = () => {
	return (
		<div className='navbar-container flex-apart'>
			<a href='/'>
				<div className='logo-container flex-center pd-5'>
					<img className='navbar-logo' src={logo} alt='rcs logo' />
					<h1 className='logo-long-text'>
						<span className='bold'>R</span>oxboro{' '}
						<span className='bold'>C</span>ommunity{' '}
						<span className='bold'>S</span>chool
					</h1>
					<h1 className='logo-short-text'>RCS</h1>
				</div>
			</a>
			<div className='navbar-items-container flex-vertical'>
				<div className='navbar-upper-items'>
					<ul>
						<li>Staff</li>
						<li>Careers</li>
						<li>
							About Us <i className='fa fa-caret-down' aria-hidden='true'></i>
						</li>
						{/* Why RCS? */}
						<li className='language-menu-item'>
							Language <i className='fas fa-globe'></i>
							<div className='dropdown language-dropdown'>
								<ul>
									<li>English</li>
									<li>Spanish</li>
								</ul>
							</div>
						</li>
						<li>Donate</li>
					</ul>
				</div>
				<div className='navbar-items'>
					<ul>
						<li>Events</li>
						<li>Enrollment</li>
						<li>
							Resources <i className='fa fa-caret-down' aria-hidden='true'></i>
						</li>
						<li>News</li>
						<li>
							More <i className='fa fa-caret-down' aria-hidden='true'></i>
						</li>
					</ul>
				</div>
			</div>
			<Hamburger />
		</div>
	);
};
