import {
	GET_DAILY_SUCCESS,
	GET_DAILY_FAILURE,
	CHANGE_PAGE,
} from '../constant/detailDailyConstants';

const initialState = {
	daily: [],
	loading: false,
	error: null,
	currentPage: 1,
};

const detailDailyReducer = (state = initialState, action) => {
	switch (action.type) {
		case GET_DAILY_SUCCESS:
			return {
				...state,
				daily: action.payload,
				loading: false,
				error: null,
			};
		case GET_DAILY_FAILURE:
			return {
				...state,
				daily: [],
				loading: false,
				error: action.payload,
			};
		case CHANGE_PAGE:
			return {
				...state,
				currentPage: action.payload,
				loading: true,
				error: null,
			};

		default:
			return state;
	}
};

export default detailDailyReducer;
