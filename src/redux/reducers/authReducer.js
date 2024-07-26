import {
	REGISTER_SUCCESS,
	LOGIN_SUCCESS,
	LOGOUT,
	USER_INFO_SUCCESS,
	REAUTHENTICATE_SUCCESS,
} from '../constant/authConstants';

const initialState = {
	user: null,
	isAuthenticated: false,
	userInfo: null,
};

const authReducer = (state = initialState, action) => {
	switch (action.type) {
		case REGISTER_SUCCESS:
		case LOGIN_SUCCESS:
			return {
				...state,
				user: action.payload,
				isAuthenticated: true,
			};
		case LOGOUT:
			return {
				...state,
				user: null,
				isAuthenticated: false,
			};
		case USER_INFO_SUCCESS:
			return {
				...state,
				userInfo: action.payload,
			};
		case REAUTHENTICATE_SUCCESS:
			return {
				...state,
				user: action.payload,
				isAuthenticated: true,
			};
		default:
			return state;
	}
};

export default authReducer;
