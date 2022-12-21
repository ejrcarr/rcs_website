import React, { useState } from 'react';
import './Hamburger.css';

export const Hamburger = () => {
	const [navbarOpen, setNavbarOpen] = useState(false);
	const handleToggle = () => {
		setNavbarOpen(!navbarOpen);
	};

	return (
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
	);
};
