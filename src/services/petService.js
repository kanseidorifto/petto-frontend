// React-specific entry point to allow generating React hooks
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const backendURL = process.env.REACT_APP_API_URL;

export const petApi = createApi({
	reducerPath: 'petApi',
	tagTypes: ['Pets'],
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
	endpoints: (builder) => ({
		getMyPetList: builder.query({
			query: () => ({
				url: `/pet/me`,
				method: 'GET',
			}),
			// providesTags: () => [{ type: 'Post', id: 'LIST' }],
		}),
		getUserPetList: builder.query({
			query: (id) => ({
				url: `/pet/user/`,
				method: 'GET',
				params: { id },
			}),
			// providesTags: () => [{ type: 'Post', id: 'LIST' }],
		}),
	}),
});

// export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetMyPetListQuery, useGetUserPetListQuery } = petApi;
