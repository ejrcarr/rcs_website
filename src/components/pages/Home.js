import React, { Fragment } from 'react';
import { Alert } from '../layout/Alert';
import { Hero } from '../layout/Hero';
import { Main } from '../layout/Main';

export const Home = () => {
	return (
		<Fragment>
			<Alert />
			<Hero />
			<Main />
		</Fragment>
	);
};
