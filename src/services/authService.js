import { baseApi } from './baseService';

export const authApi = baseApi.injectEndpoints({
	reducerPath: 'authApi',
	endpoints: (builder) => ({
		getOwnerDetails: builder.query({
			query: () => ({
				url: '/user/me',
				method: 'GET',
			}),
			providesTags: (result) =>
				result
					? [
							{ type: 'Auth', id: 'user-' + result._id },
							{ type: 'Auth', id: 'userProfileDetails' },
					  ]
					: [{ type: 'Auth', id: 'userProfileDetails' }],
		}),
		getUserDetails: builder.query({
			query: (id) => ({
				url: `/user/${id}`,
				method: 'GET',
			}),
			providesTags: (result) => [{ type: 'Auth', id: 'user-' + result._id }],
		}),
		updateOwnerDetails: builder.mutation({
			query: (details) => ({
				url: `/user/me`,
				method: 'PATCH',
				body: details,
			}),
			invalidatesTags: (result) => [
				{ type: 'Auth', id: 'user-' + result._id },
				{ type: 'Auth', id: 'userProfileDetails' },
			],
		}),
	}),
});

// export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetOwnerDetailsQuery, useGetUserDetailsQuery, useUpdateOwnerDetailsMutation } =
	authApi;
