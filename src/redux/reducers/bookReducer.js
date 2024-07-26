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

const initialState = {
	favoriteBooks: [],
	loading: false,
	error: null,
	addingBook: false,
	addBookError: null,
	updatingBook: false,
	updateBookError: null,
};

const bookReducer = (state = initialState, action) => {
	switch (action.type) {
		case ADD_FAVORITE_BOOK_REQUEST:
			return {
				...state,
				loading: true,
				error: null,
			};
		case ADD_FAVORITE_BOOK_SUCCESS:
			return {
				...state,
				favoriteBooks: [
					...state.favoriteBooks,
					{ buku_id: action.payload.buku_id, userId: action.payload.userId },
				],
				loading: false,
				error: null,
			};
		case ADD_FAVORITE_BOOK_FAILURE:
			return {
				...state,
				loading: false,
				error: action.payload.error,
			};
		case GET_FAVORITE_BOOKS_REQUEST:
			return {
				...state,
				loading: true,
				error: null,
			};
		case GET_FAVORITE_BOOKS_SUCCESS:
			return {
				...state,
				favoriteBooks: action.payload,
				loading: false,
				error: null,
			};
		case GET_FAVORITE_BOOKS_FAILURE:
			return {
				...state,
				loading: false,
				error: action.payload,
			};
		case DELETE_FAVORITE_BOOK_REQUEST:
			return {
				...state,
				loading: true,
				error: null,
			};
		case DELETE_FAVORITE_BOOK_SUCCESS:
			const updatedDeletedFavoriteBooks = state.books.filter(
				(favoriteBooks) => favoriteBooks.id !== action.payload
			);
			return {
				...state,
				favoriteBooks: updatedDeletedFavoriteBooks,
				loading: false,
				error: null,
			};
		case DELETE_FAVORITE_BOOK_FAILURE:
			return {
				...state,
				loading: false,
				error: action.payload.error,
			};
		case ADD_BOOK_REQUEST:
			return {
				...state,
				addingBook: true,
				addBookError: null,
			};
		case ADD_BOOK_SUCCESS:
			return {
				...state,
				books: [...state.books, action.payload],
				addingBook: false,
				addBookError: null,
			};
		case ADD_BOOK_FAILURE:
			return {
				...state,
				addingBook: false,
				addBookError: action.payload.error,
			};
		case UPDATE_BOOK_REQUEST:
			return {
				...state,
				updatingBook: true,
				updateBookError: null,
			};
		case UPDATE_BOOK_SUCCESS:
			const updatedBooks = state.books.map((book) =>
				book.id === action.payload.id ? action.payload : book
			);
			return {
				...state,
				books: updatedBooks,
				updatingBook: false,
				updateBookError: null,
			};
		case UPDATE_BOOK_FAILURE:
			return {
				...state,
				updatingBook: false,
				updateBookError: action.payload.error,
			};
		case DELETE_BOOK_REQUEST:
			return {
				...state,
				loading: true,
				error: null,
			};
		case DELETE_BOOK_SUCCESS:
			const updatedDeletedBooks = state.books.filter(
				(book) => book.id !== action.payload
			);
			return {
				...state,
				books: updatedDeletedBooks,
				loading: false,
				error: null,
			};
		case DELETE_BOOK_FAILURE:
			return {
				...state,
				loading: false,
				error: action.payload.error,
			};
		default:
			return state;
	}
};

export default bookReducer;
