import React, { useReducer } from 'react';
import LanguageContext from './languageContext';
import LanguageReducer from './languageReducer';
import { IS_ENGLISH_ACTIVE, IS_SPANISH_ACTIVE } from '../types';

const LanguageState = (props) => {
	const initialState = null;
	const [state, dispatch] = useReducer(LanguageReducer, initialState);

	const setSpanishActive = (active) => {
		dispatch({ type: IS_SPANISH_ACTIVE, payload: { active } });
	};

	const setEnglishActive = (active) => {
		dispatch({ type: IS_ENGLISH_ACTIVE, payload: { active } });
	};

	return (
		<LanguageContext.Provider
			value={{ active: state, setSpanishActive, setEnglishActive }}
		>
			{props.children}
		</LanguageContext.Provider>
	);
};

export default LanguageState;
