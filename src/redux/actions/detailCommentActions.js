// detailCommentActions.js

import axios from 'axios';
import {
	GET_COMMENTS_SUCCESS,
	GET_COMMENTS_FAILURE,
} from '../constant/detailCommentConstants';

const API_BASE_URL = 'https://fs23-babayoo.cyclic.app/komentar';

export const getComments = (bacaan_id) => async (dispatch) => {
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
		dispatch({ type: GET_COMMENTS_SUCCESS, payload: response.data });
	} catch (error) {
		console.error('Error fetching comments:', error);
		dispatch({ type: GET_COMMENTS_FAILURE, payload: error.message });
	}
};
