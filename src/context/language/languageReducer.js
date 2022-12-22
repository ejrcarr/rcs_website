import { IS_ENGLISH_ACTIVE, IS_SPANISH_ACTIVE } from '../types';

const reducer = (state, action) => {
	switch (action.type) {
		case IS_SPANISH_ACTIVE:
			return action.payload;
		case IS_ENGLISH_ACTIVE:
			return null;
		default:
			return state;
	}
};

export default reducer;
