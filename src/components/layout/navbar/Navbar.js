import React, { useContext } from 'react';
import LanguageContext from '../../../context/language/languageContext';
import './Navbar.css';
import logo from '../../../imgs/rcs_logo.png';
import { Hamburger } from './Hamburger';

export const Navbar = () => {
	const languageContext = useContext(LanguageContext);
	const { active } = languageContext;

	const toggleEnglishSetting = () => {
		languageContext.setEnglishActive(true);
	};

	const toggleSpanishSetting = () => {
		languageContext.setSpanishActive(true);
	};

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

			{/* ENGLISH VERSION */}
			{active === null && (
				<div className='navbar-items-container flex-vertical'>
					<div className='navbar-upper-items'>
						<ul>
							<li>Staff</li>
							<li>Careers</li>
							<li>About Us</li>
							{/* Why RCS? */}
							<li onClick={toggleSpanishSetting}>Español</li>
							<li>Donate</li>
						</ul>
					</div>
					<div className='navbar-items'>
						<ul>
							<li>Events</li>
							<li>Enrollment</li>
							<li className='menu-drop resource-menu-item'>
								Resources{' '}
								<i
									className='fa fa-caret-down dropdown-arrow'
									aria-hidden='true'
								></i>
								<div className='dropdown resources-dropdown'>
									<ul>
										<li>Student</li>
										<li>Parent</li>
										<li>Faculty and Staff</li>
										<li>Alumni</li>
									</ul>
								</div>
							</li>
							<li>News</li>
							<li className='menu-drop more-menu-item'>
								More{' '}
								<i
									className='fa fa-caret-down dropdown-arrow'
									aria-hidden='true'
								></i>
							</li>
						</ul>
					</div>
				</div>
			)}

			{/* SPANISH VERSION */}
			{active !== null && (
				<div className='navbar-items-container flex-vertical'>
					<div className='navbar-upper-items'>
						<ul>
							<li>Personal</li>
							<li>Carreras</li>
							<li>Sobre RCS</li>
							{/* Why RCS? */}
							<li onClick={toggleEnglishSetting}>English</li>
							<li>Donar</li>
						</ul>
					</div>
					<div className='navbar-items'>
						<ul>
							<li>Eventos</li>
							<li>Inscripión</li>
							<li className='menu-drop resource-menu-item'>
								Recursos{' '}
								<i
									className='fa fa-caret-down dropdown-arrow'
									aria-hidden='true'
								></i>
								<div className='dropdown resources-dropdown'>
									<ul>
										<li>Estudiantes</li>
										<li>Padres</li>
										<li>Profesores y Personal</li>
										<li>Graduados</li>
									</ul>
								</div>
							</li>
							<li>Noticias</li>
							<li className='menu-drop more-menu-item'>
								Más{' '}
								<i
									className='fa fa-caret-down dropdown-arrow'
									aria-hidden='true'
								></i>
							</li>
						</ul>
					</div>
				</div>
			)}
			<Hamburger />
		</div>
	);
};
