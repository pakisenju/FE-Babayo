import {
	GET_BOOK_SUCCESS,
	GET_BOOK_FAILURE,
	CHANGE_PAGE,
} from '../constant/detailBookConstants';

const initialState = {
	book: [],
	loading: false,
	error: null,
	currentPage: 1,
};

const detailBookReducer = (state = initialState, action) => {
	switch (action.type) {
		case GET_BOOK_SUCCESS:
			return {
				...state,
				book: action.payload,
				loading: false,
				error: null,
			};
		case GET_BOOK_FAILURE:
			return {
				...state,
				book: [],
				loading: false,
				error: action.payload, // Pass the error message to the state
			};
		case CHANGE_PAGE:
			return {
				...state,
				currentPage: action.payload,
				loading: true,
				error: null, // Reset the error when changing the page
			};

		default:
			return state;
	}
};

export default detailBookReducer;
