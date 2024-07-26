import axios from 'axios';
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

const API_BASE_URL = 'https://fs23-babayoo.cyclic.app/favorit-bacaan-harian';

export const addFavoriteDailyRequest = () => ({
	type: ADD_FAVORITE_DAILY_REQUEST,
});

export const addFavoriteDailySuccess = (bacaan_id, userId) => ({
	type: ADD_FAVORITE_DAILY_SUCCESS,
	payload: { bacaan_id, userId },
});

export const addFavoriteDailyFailure = (error) => ({
	type: ADD_FAVORITE_DAILY_FAILURE,
	payload: { error },
});

export const addFavoriteDaily = (bacaan_id, userId) => {
	return async (dispatch) => {
		dispatch(addFavoriteDailyRequest());

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

			const body = {
				bacaan_id: `${bacaan_id}`,
				user_id: `${userId}`,
			};

			const response = await axios.post(`${API_BASE_URL}`, body, config);

			if (!response.data) {
				throw new Error('Gagal menambahkan ke favorit');
			}

			dispatch(addFavoriteDailySuccess(bacaan_id, userId));
		} catch (error) {
			dispatch(addFavoriteDailyFailure(error.message));
		}
	};
};

export const getFavoriteDailysRequest = () => ({
	type: GET_FAVORITE_DAILYS_REQUEST,
});

export const getFavoriteDailysSuccess = (favoriteDailys) => ({
	type: GET_FAVORITE_DAILYS_SUCCESS,
	payload: favoriteDailys,
});

export const getFavoriteDailysFailure = (error) => ({
	type: GET_FAVORITE_DAILYS_FAILURE,
	payload: error,
});

export const getFavoriteDailys = (page, searchQuery) => {
	return async (dispatch) => {
		dispatch(getFavoriteDailysRequest());

		try {
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

			dispatch(getFavoriteDailysSuccess(response.data));
		} catch (error) {
			console.error('Error fetching favorite dailys:', error);
			dispatch(getFavoriteDailysFailure(error.message));
		}
	};
};

export const deleteFavoriteDailyRequest = () => ({
	type: DELETE_FAVORITE_DAILY_REQUEST,
});

export const deleteFavoriteDailySuccess = (bacaan_id) => ({
	type: DELETE_FAVORITE_DAILY_SUCCESS,
	payload: bacaan_id,
});

export const deleteFavoriteDailyFailure = (error) => ({
	type: DELETE_FAVORITE_DAILY_FAILURE,
	payload: { error },
});

export const deleteFavoriteDaily = (favDailyId) => {
	return async (dispatch) => {
		dispatch(deleteFavoriteDailyRequest());

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

			const response = await axios.delete(
				`${API_BASE_URL}/${favDailyId}`,
				config
			);

			if (!response.data) {
				throw new Error('Gagal menghapus bacaan');
			}

			dispatch(deleteFavoriteDailySuccess(favDailyId));
			alert('Bacaan berhasil dihapus!');
		} catch (error) {
			dispatch(deleteFavoriteDailyFailure(error.message));
		}
	};
};

const API_DAILY_URL = 'https://fs23-babayoo.cyclic.app/bacaan-harian';

export const addDailyRequest = () => ({
	type: ADD_DAILY_REQUEST,
});

export const addDailySuccess = (dailyData) => ({
	type: ADD_DAILY_SUCCESS,
	payload: dailyData,
});

export const addDailyFailure = (error) => ({
	type: ADD_DAILY_FAILURE,
	payload: { error },
});

export const addDaily = (dailyData) => {
	return async (dispatch) => {
		dispatch(addDailyRequest());

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

			const response = await axios.post(API_DAILY_URL, dailyData, config);

			dispatch(addDailySuccess(response.data));
			alert('Bacaan berhasil ditambahkan!');
		} catch (error) {
			dispatch(addDailyFailure(error.message));
		}
	};
};

export const updateDailyRequest = () => ({
	type: UPDATE_DAILY_REQUEST,
});

export const updateDailySuccess = (dailyData) => ({
	type: UPDATE_DAILY_SUCCESS,
	payload: dailyData,
});

export const updateDailyFailure = (error) => ({
	type: UPDATE_DAILY_FAILURE,
	payload: { error },
});

export const updateDaily = (dailyId, dailyData) => {
	return async (dispatch) => {
		dispatch(updateDailyRequest());

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

			const response = await axios.put(
				`${API_DAILY_URL}/${dailyId}`,
				dailyData,
				config
			);

			dispatch(updateDailySuccess(response.data));
			alert('Bacaan berhasil diperbarui!');
		} catch (error) {
			dispatch(updateDailyFailure(error.message));
		}
	};
};

export const deleteDailyRequest = () => ({
	type: DELETE_DAILY_REQUEST,
});

export const deleteDailySuccess = (dailyId) => ({
	type: DELETE_DAILY_SUCCESS,
	payload: dailyId,
});

export const deleteDailyFailure = (error) => ({
	type: DELETE_DAILY_FAILURE,
	payload: { error },
});

export const deleteDaily = (dailyId) => {
	return async (dispatch) => {
		dispatch(deleteDailyRequest());

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

			const response = await axios.delete(
				`${API_DAILY_URL}/${dailyId}`,
				config
			);

			if (!response.data) {
				throw new Error('Gagal menghapus bacaan');
			}

			dispatch(deleteDailySuccess(dailyId));
			alert('Bacaan berhasil dihapus!');
		} catch (error) {
			dispatch(deleteDailyFailure(error.message));
		}
	};
};
