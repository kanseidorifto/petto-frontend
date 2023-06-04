import { baseApi } from './baseService';

export const petApi = baseApi.injectEndpoints({
	reducerPath: 'petApi',
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
