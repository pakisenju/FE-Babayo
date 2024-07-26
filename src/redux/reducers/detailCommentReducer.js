import {
	GET_COMMENTS_SUCCESS,
	GET_COMMENTS_FAILURE,
} from '../constant/detailCommentConstants';

const initialState = {
	comments: [],
	loading: false,
	error: null,
};

const detailCommentReducer = (state = initialState, action) => {
	switch (action.type) {
		case GET_COMMENTS_SUCCESS:
			return {
				...state,
				comments: action.payload,
				loading: false,
				error: null,
			};
		case GET_COMMENTS_FAILURE:
			return {
				...state,
				comments: [],
				loading: false,
				error: action.payload,
			};
		default:
			return state;
	}
};

export default detailCommentReducer;
