import { baseApi } from './baseService';

export const authApi = baseApi.injectEndpoints({
	reducerPath: 'authApi',
	endpoints: (builder) => ({
		getOwnerDetails: builder.query({
			query: () => ({
				url: '/user/me',
				method: 'GET',
			}),
			providesTags: [{ type: 'Auth', id: 'userProfileDetails' }],
		}),
		getUserDetails: builder.query({
			query: (id) => ({
				url: `/user/${id}`,
				method: 'GET',
			}),
		}),
		updateUserDetails: builder.mutation({
			query: (details) => ({
				url: `/user/me`,
				method: 'PATCH',
				body: details,
			}),
			invalidatesTags: [{ type: 'Auth', id: 'userProfileDetails' }],
		}),
	}),
});

// export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetOwnerDetailsQuery, useGetUserDetailsQuery, useUpdateUserDetailsMutation } =
	authApi;
