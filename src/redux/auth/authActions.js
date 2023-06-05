import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

const backendURL = process.env.VITE_APP_API_URL; //'/api';

export const registerUser = createAsyncThunk(
	'auth/register',
	async ({ givenName, surname, email, password }, { rejectWithValue }) => {
		try {
			const config = {
				headers: {
					'Content-Type': 'application/json',
				},
				withCredentials: false,
			};
			const { data } = await axios.post(
				`${backendURL}/auth/register`,
				{ givenName, surname, email, password },
				config,
			);
			return data;
		} catch (error) {
			// return custom error message from backend if present
			if (error.response && error.response.data.message) {
				return rejectWithValue(error.response.data.message);
			} else {
				return rejectWithValue(error.message);
			}
		}
	},
);

export const userLogin = createAsyncThunk(
	'auth/login',
	async ({ email, password }, { rejectWithValue }) => {
		try {
			// configure header's Content-Type as JSON
			const config = {
				headers: {
					'Content-Type': 'application/json',
				},
				withCredentials: false,
			};
			const { data } = await axios.post(`${backendURL}/auth/login`, { email, password }, config);

			return data;
		} catch (error) {
			// return custom error message from API if any
			if (error.response && error.response.data.message) {
				return rejectWithValue(error.response.data.message);
			} else {
				return rejectWithValue(error.message);
			}
		}
	},
);
