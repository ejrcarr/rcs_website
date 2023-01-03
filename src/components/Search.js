import React, { useState } from 'react';
import './Search.css';

export const Search = () => {
	const [text, setText] = useState('');
	const [searchActive, setSearchActive] = useState(false);

	const onSubmit = (e) => {
		e.preventDefault();
		if (text === '') {
			console.log('empty');
		} else {
			setText('');
		}
		deactivateSearchbar();
	};

	const onChange = (e) => {
		setText(e.target.value);
	};

	const handleSearch = (e) => {
		e.preventDefault();
		document.querySelector('.navbar-items').classList.toggle('inactive');
		document.querySelector('.navbar-searchbar').focus();
		setSearchActive(!searchActive);
	};

	const deactivateSearchbar = () => {
		document.querySelector('.navbar-items').classList.toggle('inactive');
		setSearchActive(false);
	};

	return (
		<div className='navbar-search'>
			<form
				className='searchbar-form'
				onSubmit={searchActive ? onSubmit : handleSearch}
			>
				<input
					type='text'
					name='text'
					placeholder='Search RCS...'
					value={text}
					className={
						searchActive
							? 'navbar-searchbar active-searchbar'
							: 'navbar-searchbar'
					}
					onChange={onChange}
				/>
				<button className='search-icon' id='search-icon'>
					<i className='fas fa-search'></i>
				</button>
			</form>
		</div>
	);
};
