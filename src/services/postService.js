// React-specific entry point to allow generating React hooks
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const backendURL = process.env.REACT_APP_API_URL;

export const postApi = createApi({
	reducerPath: 'postApi',
	tagTypes: ['Posts'],
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
		getUserPostList: builder.query({
			query: (id) => ({
				url: `/post/user/`,
				method: 'GET',
				params: { id },
			}),
			providesTags: (result) =>
				// is result available?
				result
					? // successful query
					  [
							...result.map(({ _id }) => ({ type: 'Posts', id: _id })),
							{ type: 'Posts', id: 'LIST' },
					  ]
					: // an error occurred, but we still want to refetch this query when `{ type: 'Posts', id: 'LIST' }` is invalidated
					  [{ type: 'Posts', id: 'LIST' }],
		}),
		createUserPost: builder.mutation({
			query: (data) => ({
				url: `/post/me/`,
				method: 'POST',
				body: data,
			}),
			invalidatesTags: [{ type: 'Posts', id: 'LIST' }],
		}),
		removeUserPost: builder.mutation({
			query: (postId) => ({
				url: `/post/${postId}`,
				method: 'DELETE',
			}),
			invalidatesTags: (result, error, id) => [
				{ type: 'Posts', id: result._id },
				{ type: 'Posts', id: 'LIST' },
			],
		}),
		sendPostLike: builder.mutation({
			query: (postId) => ({
				url: `/post/like`,
				method: 'POST',
				body: { postId },
			}),
			invalidatesTags: (result, error, id) => [{ type: 'Posts', id: result.post }],
		}),
		cancelPostLike: builder.mutation({
			query: (postId) => ({
				url: `/post/like`,
				method: 'DELETE',
				body: { postId },
			}),
			invalidatesTags: (result, error, id) => [{ type: 'Posts', id: result.post }],
		}),
		sendPostComment: builder.mutation({
			query: ({ postId, writtenText }) => ({
				url: `/post/comment`,
				method: 'POST',
				body: { postId, writtenText },
			}),
			invalidatesTags: (result, error, id) => [{ type: 'Posts', id: result.post }],
		}),
		removePostComment: builder.mutation({
			query: (commentId) => ({
				url: `/post/comment`,
				method: 'DELETE',
				body: { commentId },
			}),
			invalidatesTags: (result, error, id) => [{ type: 'Posts', id: result.post }],
		}),
	}),
});

// export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const {
	useGetUserPostListQuery,
	useCreateUserPostMutation,
	useRemoveUserPostMutation,
	useSendPostLikeMutation,
	useCancelPostLikeMutation,
	useSendPostCommentMutation,
	useRemovePostCommentMutation,
} = postApi;
