import axios from 'axios';
import {
	ADD_FAVORITE_BOOK_REQUEST,
	ADD_FAVORITE_BOOK_SUCCESS,
	ADD_FAVORITE_BOOK_FAILURE,
	GET_FAVORITE_BOOKS_REQUEST,
	GET_FAVORITE_BOOKS_SUCCESS,
	GET_FAVORITE_BOOKS_FAILURE,
    DELETE_FAVORITE_BOOK_REQUEST,
	DELETE_FAVORITE_BOOK_SUCCESS,
	DELETE_FAVORITE_BOOK_FAILURE,
	ADD_BOOK_REQUEST,
	ADD_BOOK_SUCCESS,
	ADD_BOOK_FAILURE,
	UPDATE_BOOK_REQUEST,
	UPDATE_BOOK_SUCCESS,
	UPDATE_BOOK_FAILURE,
	DELETE_BOOK_REQUEST,
	DELETE_BOOK_SUCCESS,
	DELETE_BOOK_FAILURE,
} from '../constant/bookConstants';

const API_BASE_URL = 'https://fs23-babayoo.cyclic.app/favorit-buku';

export const addFavoriteBookRequest = () => ({
	type: ADD_FAVORITE_BOOK_REQUEST,
});

export const addFavoriteBookSuccess = (buku_id, userId) => ({
	type: ADD_FAVORITE_BOOK_SUCCESS,
	payload: { buku_id, userId },
});

export const addFavoriteBookFailure = (error) => ({
	type: ADD_FAVORITE_BOOK_FAILURE,
	payload: { error },
});

export const addFavoriteBook = (buku_id, userId) => {
	return async (dispatch) => {
		dispatch(addFavoriteBookRequest());

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
				buku_id: `${buku_id}`,
				user_id: `${userId}`,
			};

			const response = await axios.post(`${API_BASE_URL}`, body, config);

			if (!response.data) {
				throw new Error('Gagal menambahkan ke favorit');
			}

			dispatch(addFavoriteBookSuccess(buku_id, userId));
		} catch (error) {
			dispatch(addFavoriteBookFailure(error.message));
		}
	};
};

export const getFavoriteBooksRequest = () => ({
	type: GET_FAVORITE_BOOKS_REQUEST,
});

export const getFavoriteBooksSuccess = (favoriteBooks) => ({
	type: GET_FAVORITE_BOOKS_SUCCESS,
	payload: favoriteBooks,
});

export const getFavoriteBooksFailure = (error) => ({
	type: GET_FAVORITE_BOOKS_FAILURE,
	payload: error,
});

export const getFavoriteBooks = (page, searchQuery) => {
	return async (dispatch) => {
		dispatch(getFavoriteBooksRequest());

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

			dispatch(getFavoriteBooksSuccess(response.data));
		} catch (error) {
			console.error('Error fetching favorite books:', error);
			dispatch(getFavoriteBooksFailure(error.message));
		}
	};
};

export const deleteFavoriteBookRequest = () => ({
	type: DELETE_FAVORITE_BOOK_REQUEST,
});

export const deleteFavoriteBookSuccess = (bookId) => ({
	type: DELETE_FAVORITE_BOOK_SUCCESS,
	payload: bookId,
});

export const deleteFavoriteBookFailure = (error) => ({
	type: DELETE_FAVORITE_BOOK_FAILURE,
	payload: { error },
});

export const deleteFavoriteBook = (favBookId) => {
	return async (dispatch) => {
		dispatch(deleteFavoriteBookRequest());

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

			const response = await axios.delete(`${API_BASE_URL}/${favBookId}`, config);

			if (!response.data) {
				throw new Error('Gagal menghapus buku');
			}

			dispatch(deleteFavoriteBookSuccess(favBookId));
			alert('Buku berhasil dihapus!');
		} catch (error) {
			dispatch(deleteFavoriteBookFailure(error.message));
		}
	};
};

const API_BOOK_URL = 'https://fs23-babayoo.cyclic.app/books';

export const addBookRequest = () => ({
	type: ADD_BOOK_REQUEST,
});

export const addBookSuccess = (bookData) => ({
	type: ADD_BOOK_SUCCESS,
	payload: bookData,
});

export const addBookFailure = (error) => ({
	type: ADD_BOOK_FAILURE,
	payload: { error },
});

export const addBook = (bookData) => {
	return async (dispatch) => {
		dispatch(addBookRequest());

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

			const response = await axios.post(API_BOOK_URL, bookData, config);

			dispatch(addBookSuccess(response.data));
			alert('Buku berhasil ditambahkan!');
		} catch (error) {
			dispatch(addBookFailure(error.message));
		}
	};
};

export const updateBookRequest = () => ({
	type: UPDATE_BOOK_REQUEST,
});

export const updateBookSuccess = (bookData) => ({
	type: UPDATE_BOOK_SUCCESS,
	payload: bookData,
});

export const updateBookFailure = (error) => ({
	type: UPDATE_BOOK_FAILURE,
	payload: { error },
});

export const updateBook = (bookId, bookData) => {
	return async (dispatch) => {
		dispatch(updateBookRequest());

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
				`${API_BOOK_URL}/${bookId}`,
				bookData,
				config
			);

			dispatch(updateBookSuccess(response.data));
			alert('Buku berhasil diperbarui!');
		} catch (error) {
			dispatch(updateBookFailure(error.message));
		}
	};
};

export const deleteBookRequest = () => ({
	type: DELETE_BOOK_REQUEST,
});

export const deleteBookSuccess = (bookId) => ({
	type: DELETE_BOOK_SUCCESS,
	payload: bookId,
});

export const deleteBookFailure = (error) => ({
	type: DELETE_BOOK_FAILURE,
	payload: { error },
});

export const deleteBook = (bookId) => {
	return async (dispatch) => {
		dispatch(deleteBookRequest());

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

			const response = await axios.delete(`${API_BOOK_URL}/${bookId}`, config);

			if (!response.data) {
				throw new Error('Gagal menghapus buku');
			}

			dispatch(deleteBookSuccess(bookId));
			alert('Buku berhasil dihapus!');
		} catch (error) {
			dispatch(deleteBookFailure(error.message));
		}
	};
};
