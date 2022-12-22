import React, { useState } from 'react';
import './Hamburger.css';
import { Sidebar } from './Sidebar';

export const Hamburger = () => {
	const [navbarOpen, setNavbarOpen] = useState(false);
	const handleToggle = () => {
		setNavbarOpen(!navbarOpen);
		document.querySelector('body').classList.toggle('darken');
		document.querySelector('body').classList.toggle('fixed');
	};

	return (
		<>
			<button
				id='hamburger'
				className={navbarOpen ? 'open' : 'closed'}
				onClick={handleToggle}
			>
				<span></span>
				<span></span>
				<span></span>
				<span></span>
			</button>
			<Sidebar active={navbarOpen} />
		</>
	);
};
