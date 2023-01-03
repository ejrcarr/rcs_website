import React, { useContext } from 'react';
import LanguageContext from '../../../context/language/languageContext';
import './Navbar.css';
import logo from '../../../imgs/rcs_logo.png';
import { Link } from 'react-router-dom';
import { Hamburger } from './Hamburger';
import { Search } from '../../Search';

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
			<Link to='/'>
				<div className='logo-container flex-center pd-5'>
					<img className='navbar-logo' src={logo} alt='rcs logo' />
					<h1 className='logo-long-text'>
						<span className='bold'>R</span>oxboro{' '}
						<span className='bold'>C</span>ommunity{' '}
						<span className='bold'>S</span>chool
					</h1>
					<h1 className='logo-short-text'>RCS</h1>
				</div>
			</Link>

			{/* ENGLISH VERSION */}
			{active === null && (
				<div className='navbar-items-container flex-vertical'>
					<div className='navbar-upper-items'>
						<ul>
							<li>Faculty & Staff</li>
							<li>Students</li>
							<li>Parents</li>
							{/* Why RCS? */}
							<li onClick={toggleSpanishSetting}>Español</li>
							<li>Donate</li>
						</ul>
					</div>
					<div className='navbar-items'>
						<ul>
							<Link to='/about'>
								<li>About RCS</li>
							</Link>
							<li>Admissions</li>
							<li>Academics</li>
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
										<li>22-23 Calender</li>
									</ul>
								</div>
							</li>
							<Search />
						</ul>
					</div>
				</div>
			)}

			{/* SPANISH VERSION */}
			{active !== null && (
				<div lang='es' className='navbar-items-container flex-vertical'>
					<div className='navbar-upper-items'>
						<ul>
							<li>Profesores y Personal</li>
							<li>Estudiantes</li>
							<li>Padres</li>
							{/* Why RCS? */}
							<li onClick={toggleEnglishSetting}>English</li>
							<li>Donar</li>
						</ul>
					</div>
					<div className='navbar-items'>
						<ul>
							<Link to='/about'>
								<li>Sobre RCS</li>
							</Link>
							<li>Admisiónes</li>
							<li>Academia</li>
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
										<li>22-23 Calendario</li>
									</ul>
								</div>
							</li>
							<li className='search-icon' id='search-icon'>
								{/* <i className='fas fa-search'></i> */}
								<Search />
							</li>
						</ul>
					</div>
				</div>
			)}
			<Hamburger />
		</div>
	);
};
