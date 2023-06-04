import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const backendURL = process.env.REACT_APP_API_URL;

export const baseApi = createApi({
	baseQuery: fetchBaseQuery({
		// base url of backend API
		baseUrl: backendURL,
		// prepareHeaders is used to configure the header of every request and gives access to getState which we use to include the token from the store
		prepareHeaders: (headers, { getState }) => {
			const token = getState().auth.userToken;
			if (token) {
				// include token in req header
				headers.set('authorization', `Bearer ${token}`);
				return headers;
			}
		},
	}),
	tagTypes: ['Auth', 'Posts', 'Pets'],
	endpoints: () => ({}),
});