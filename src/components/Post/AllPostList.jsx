import Post from './Post';
import { useGetAllPostListQuery } from '../../services/postService';

const AllPostList = () => {
	const allPostList = useGetAllPostListQuery();
	return (
		<>
			{allPostList?.data?.length > 0 ? (
				allPostList.data.map((post) => <Post key={post._id} {...post} />)
			) : (
				<section className="text-white rounded-md bg-violet-400">
					<p className="px-6 py-10 text-lg font-medium text-center">
						{allPostList.isFetching ? 'Завантаження... 🏃‍♂️' : 'Схоже у вас поки немає дописів 😿'}
					</p>
				</section>
			)}
		</>
	);
};

export default AllPostList;
