import axios from 'axios';
import {
	GET_BOOK_SUCCESS,
	GET_BOOK_FAILURE,
	CHANGE_PAGE,
} from '../constant/detailBookConstants';

const API_BASE_URL = 'https://fs23-babayoo.cyclic.app/books';

export const getBook = (page, searchQuery) => async (dispatch) => {
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

		dispatch({ type: GET_BOOK_SUCCESS, payload: response.data });
	} catch (error) {
		console.error('Error fetching books:', error);
		dispatch({ type: GET_BOOK_FAILURE, payload: error.message });
	}
};

export const getRecBook = () => async (dispatch) => {
	try {
		const params = {
			limit: 5,
		};

		const response = await axios.get(API_BASE_URL, params);

		dispatch({ type: GET_BOOK_SUCCESS, payload: response.data });
	} catch (error) {
		console.error('Error fetching recommended books:', error);
		dispatch({ type: GET_BOOK_FAILURE, payload: error.message });
	}
};

export const getBookByID = (buku_id) => async (dispatch) => {
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

		const response = await axios.get(`${API_BASE_URL}/${buku_id}`, config);

		console.log('Config:', config);
		console.log(response);

		dispatch({ type: GET_BOOK_SUCCESS, payload: response.data });
	} catch (error) {
		console.error('Error fetching book details:', error);
		dispatch({ type: GET_BOOK_FAILURE, payload: error.message });
	}
};
