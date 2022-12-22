import React from 'react';
import './Sidebar.css';

export const Sidebar = ({ active }) => {
	return (
		<div
			id='sidebar'
			className={active ? 'sidebar-container open' : 'sidebar-container closed'}
		>
			<ul>
				<li>somehting</li>
				<li>somehting</li>
				<li>somehting</li>
				<li>somehting</li>
				<li>somehting</li>
			</ul>
		</div>
	);
};
