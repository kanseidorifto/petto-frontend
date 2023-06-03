import Post from './Post';
import { useGetUserPostListQuery } from '../../services/postService';

const PostList = ({ profileId, own }) => {
	const profilePostList = useGetUserPostListQuery(profileId);
	return (
		<>
			{profilePostList?.data?.length > 0 ? (
				profilePostList.data.map((post) => <Post key={post._id} {...post} profileId={profileId} />)
			) : (
				<section className="text-white rounded-md bg-violet-400">
					<p className="px-6 py-10 text-lg font-medium text-center">
						{profilePostList.isLoading
							? 'Завантаження... 🏃‍♂️'
							: own
							? 'Схоже у вас поки немає дописів 😿'
							: 'Користувач ще не додав жодного допису 😔'}
					</p>
				</section>
			)}
		</>
	);
};

export default PostList;