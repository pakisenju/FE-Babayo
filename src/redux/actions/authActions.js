import axios from 'axios';
import {
	REGISTER_SUCCESS,
	LOGIN_SUCCESS,
	LOGOUT,
	USER_INFO_SUCCESS,
	REAUTHENTICATE_SUCCESS,
} from '../constant/authConstants';

const API_BASE_URL = 'https://fs23-babayoo.cyclic.app/auth';

const api = axios.create({
	baseURL: API_BASE_URL,
});

api.interceptors.request.use((config) => {
	const token = localStorage.getItem('token');

	if (token) {
		config.headers.Authorization = `Bearer ${token}`;
	}

	return config;
});

export const register = (userData) => async (dispatch) => {
	try {
		const response = await axios.post(`${API_BASE_URL}/register`, userData);
		dispatch({ type: REGISTER_SUCCESS, payload: response.data });
		alert('Registrasi berhasil');
	} catch (error) {
		console.error('Register Error:', error);
	}
};

export const login = (userData) => async (dispatch) => {
	try {
		const response = await axios.post(`${API_BASE_URL}/login`, userData);

		const token = response.data.token;
		localStorage.setItem('token', token);

		const userId = response.data.userId;
		localStorage.setItem('userId', userId);

		const username = response.data.username;
		localStorage.setItem('username', username);

		const role = response.data.role;
		localStorage.setItem('role', role);

		dispatch({ type: LOGIN_SUCCESS, payload: response.data });
	} catch (error) {
		console.error('Login Error:', error);
		throw error;
	}
};

export const logout = () => (dispatch) => {
	const confirmLogout = window.confirm('Apakah anda yakin untuk logout?');
	if (confirmLogout) {
		localStorage.removeItem('token');
		localStorage.removeItem('userId');
		localStorage.removeItem('username');
		localStorage.removeItem('role');

		dispatch({ type: LOGOUT });
	}
};

export const getUserInfo = () => async (dispatch) => {
	try {
		const response = await api.get(API_BASE_URL);
		dispatch({ type: USER_INFO_SUCCESS, payload: response.data });
	} catch (error) {
		console.error('Get User Info Error:', error);
		throw error;
	}
};

export const reauthenticate = () => async (dispatch) => {
	try {
		const response = await api.get(API_BASE_URL);
		dispatch({ type: REAUTHENTICATE_SUCCESS, payload: response.data });
	} catch (error) {
		console.error('Reauthentication Error:', error);
	}
};
