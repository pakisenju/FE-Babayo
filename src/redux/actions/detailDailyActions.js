import axios from 'axios';
import {
	GET_DAILY_SUCCESS,
	GET_DAILY_FAILURE,
	CHANGE_PAGE,
} from '../constant/detailDailyConstants';

const API_BASE_URL = 'https://fs23-babayoo.cyclic.app/bacaan-harian';

export const getDaily = (page, searchQuery) => async (dispatch) => {
	try {
		dispatch({ type: CHANGE_PAGE, payload: page });

		const token = localStorage.getItem('token');

		if (!token) {
			throw new Error('Token tidak ada!');
		}

		const config = {
			headers: {
				Authorization: `Bearer ${token}`,
			},
			params: {
				page,
				limit: 10,
				search: searchQuery,
			},
		};

		const response = await axios.get(API_BASE_URL, config);

		dispatch({ type: GET_DAILY_SUCCESS, payload: response.data });
	} catch (error) {
		console.error('Error fetching dailys:', error);
		dispatch({ type: GET_DAILY_FAILURE, payload: error.message });
	}
};

export const getDailyByID = (bacaan_id) => async (dispatch) => {
	try {
		const token = localStorage.getItem('token');

		if (!token) {
			throw new Error('Token tidak ada!');
		}

		const config = {
			headers: {
				Authorization: `Bearer ${token}`,
			},
		};

		const response = await axios.get(`${API_BASE_URL}/${bacaan_id}`, config);

		dispatch({ type: GET_DAILY_SUCCESS, payload: response.data });
	} catch (error) {
		console.error('Error fetching daily details:', error);

		if (error.response && error.response.data) {
			dispatch({ type: GET_DAILY_FAILURE, payload: error.response.data });
		} else {
			dispatch({
				type: GET_DAILY_FAILURE,
				payload: 'Failed to fetch daily details',
			});
		}
	}
};
