import {
	ADD_FAVORITE_DAILY_REQUEST,
	ADD_FAVORITE_DAILY_SUCCESS,
	ADD_FAVORITE_DAILY_FAILURE,
	GET_FAVORITE_DAILYS_REQUEST,
	GET_FAVORITE_DAILYS_SUCCESS,
	GET_FAVORITE_DAILYS_FAILURE,
	DELETE_FAVORITE_DAILY_REQUEST,
	DELETE_FAVORITE_DAILY_SUCCESS,
	DELETE_FAVORITE_DAILY_FAILURE,
	ADD_DAILY_REQUEST,
	ADD_DAILY_SUCCESS,
	ADD_DAILY_FAILURE,
	UPDATE_DAILY_REQUEST,
	UPDATE_DAILY_SUCCESS,
	UPDATE_DAILY_FAILURE,
	DELETE_DAILY_REQUEST,
	DELETE_DAILY_SUCCESS,
	DELETE_DAILY_FAILURE,
} from '../constant/dailyConstants';

const initialState = {
	favoriteDailys: [],
	loading: false,
	error: null,
	addingDaily: false,
	addDailyError: null,
	updatingDaily: false,
	updateDailyError: null,
};

const dailyReducer = (state = initialState, action) => {
	switch (action.type) {
		case ADD_FAVORITE_DAILY_REQUEST:
			return {
				...state,
				loading: true,
				error: null,
			};
		case ADD_FAVORITE_DAILY_SUCCESS:
			return {
				...state,
				favoriteDailys: [
					...state.favoriteDailys,
					{
						bacaan_id: action.payload.bacaan_id,
						userId: action.payload.userId,
					},
				],
				loading: false,
				error: null,
			};
		case ADD_FAVORITE_DAILY_FAILURE:
			return {
				...state,
				loading: false,
				error: action.payload.error,
			};
		case GET_FAVORITE_DAILYS_REQUEST:
			return {
				...state,
				loading: true,
				error: null,
			};
		case GET_FAVORITE_DAILYS_SUCCESS:
			return {
				...state,
				favoriteDailys: action.payload,
				loading: false,
				error: null,
			};
		case GET_FAVORITE_DAILYS_FAILURE:
			return {
				...state,
				loading: false,
				error: action.payload,
			};
		case DELETE_FAVORITE_DAILY_REQUEST:
			return {
				...state,
				loading: true,
				error: null,
			};
		case DELETE_FAVORITE_DAILY_SUCCESS:
			const updatedDeletedFavoriteDailys = state.dailys.filter(
				(favoriteDailys) => favoriteDailys.id !== action.payload
			);
			return {
				...state,
				favoriteDailys: updatedDeletedFavoriteDailys,
				loading: false,
				error: null,
			};
		case DELETE_FAVORITE_DAILY_FAILURE:
			return {
				...state,
				loading: false,
				error: action.payload.error,
			};
		case ADD_DAILY_REQUEST:
			return {
				...state,
				addingDaily: true,
				addDailyError: null,
			};
		case ADD_DAILY_SUCCESS:
			return {
				...state,
				dailys: [...state.dailys, action.payload],
				addingDaily: false,
				addDailyError: null,
			};
		case ADD_DAILY_FAILURE:
			return {
				...state,
				addingDaily: false,
				addDailyError: action.payload.error,
			};
		case UPDATE_DAILY_REQUEST:
			return {
				...state,
				updatingDaily: true,
				updateDailyError: null,
			};
		case UPDATE_DAILY_SUCCESS:
			const updatedDailys = state.dailys.map((daily) =>
				daily.id === action.payload.id ? action.payload : daily
			);
			return {
				...state,
				dailys: updatedDailys,
				updatingDaily: false,
				updateDailyError: null,
			};
		case UPDATE_DAILY_FAILURE:
			return {
				...state,
				updatingDaily: false,
				updateDailyError: action.payload.error,
			};
		case DELETE_DAILY_REQUEST:
			return {
				...state,
				loading: true,
				error: null,
			};
		case DELETE_DAILY_SUCCESS:
			const updatedDeletedDailys = state.dailys.filter(
				(daily) => daily.id !== action.payload
			);
			return {
				...state,
				dailys: updatedDeletedDailys,
				loading: false,
				error: null,
			};
		case DELETE_DAILY_FAILURE:
			return {
				...state,
				loading: false,
				error: action.payload.error,
			};
		default:
			return state;
	}
};

export default dailyReducer;
