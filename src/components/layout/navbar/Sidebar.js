import React from 'react';
import './Sidebar.css';

export const Sidebar = ({ active }) => {
	return (
		<div className={active ? 'sidebar open-container' : 'sidebar'}>
			<div
				id='sidebar'
				className={
					active ? 'sidebar-container open' : 'sidebar-container closed'
				}
			>
				<ul>
					<li>News</li>
					<li>Events</li>
					<li>Enrollment</li>
					<li>Students</li>
					<li>Parents</li>
					<li>Faculty & Staff</li>
				</ul>
			</div>
		</div>
	);
};
