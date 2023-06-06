import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import { useCancelFriendRequestMutation, useGetFriendListQuery } from '../../services/authService';
import { useSelector } from 'react-redux';

const FriendList = () => {
	const { userInfo } = useSelector((state) => state.auth);
	useEffect(() => {
		document.title = 'Petto - Список друзів';
		return () => {
			document.title = 'Petto';
		};
	}, []);
	const [searchText, setSearchText] = useState('');
	const friendListQuery = useGetFriendListQuery();
	const [cancelFriendRequest] = useCancelFriendRequestMutation();

	const friendList = friendListQuery.isFetching
		? []
		: searchText !== ''
		? friendListQuery.data
				.map((friendRequest) =>
					friendRequest.profileRequest._id === userInfo._id
						? friendRequest.profileAccept
						: friendRequest.profileRequest,
				)
				.filter((friend) => {
					const match =
						(friend.givenName + ' ' + friend.surname)
							.toLowerCase()
							.indexOf(searchText.toLowerCase()) > -1;
					return match;
				})
		: friendListQuery.data.map((friendRequest) =>
				friendRequest.profileRequest._id === userInfo._id
					? friendRequest.profileAccept
					: friendRequest.profileRequest,
		  );

	const handleCancelFriend = async (friend) => {
		if (
			confirm('❌ Видалити' + ' ' + friend.givenName + ' ' + friend.surname + ' із друзів ' + '?')
		)
			cancelFriendRequest(friend._id);
	};

	return (
		<main className="rounded-md bg-violet-400">
			<div className="flex items-center px-6 py-3 space-x-1 text-white bg-violet-500 rounded-t-md">
				<MagnifyingGlassIcon className="w-6 h-6" />
				<input
					type="text"
					className="flex-1 p-1 text-base bg-transparent rounded appearance-none resize-none placeholder:text-white placeholder:font-light focus:bg-violet-300/50 focus:outline-none focus:border-none focus:ring-none"
					value={searchText}
					onChange={(e) => setSearchText(e.target.value)}
					placeholder="Пошук..."
				/>
			</div>
			<div className="px-4 py-2 space-y-2 text-white">
				{!friendListQuery.isFetching ? (
					<div className="flex flex-col">
						{friendList.length > 0 ? (
							friendList.map((friend, index) => (
								<div key={index} className="flex w-full px-3 py-2">
									<div className="flex items-center flex-1 space-x-3">
										<Link to={`/profile/${friend._id}`}>
											<img src={friend.avatarUrl} alt="avatar" className="w-12 h-12 rounded-full" />
										</Link>
										<div className="flex-1">
											<Link className="inline-block" to={`/profile/${friend._id}`}>
												<p>{friend.givenName + ' ' + friend.surname}</p>
											</Link>
											<div className="flex items-center justify-between space-x-2">
												<Link
													to={`/profile/${friend._id}`}
													className="text-neutral-300 hover:underline">
													Переглянути профіль
												</Link>
												{false && (
													<Link
														to={`/message/${friend._id}`}
														className="text-neutral-300 hover:underline">
														Написати повідомлення
													</Link>
												)}
												<button
													onClick={() => handleCancelFriend(friend)}
													className="p-1.5 leading-none transition-all bg-red-600 border border-red-700 rounded-md hover:bg-red-100 hover:text-red-400">
													Видалити із друзів
												</button>
											</div>
										</div>
									</div>
								</div>
							))
						) : (
							<p className="px-6 py-4 text-lg font-medium text-center">Нічого не знайдено. 😔</p>
						)}
					</div>
				) : (
					<p className="px-6 py-4 text-lg font-medium text-center">Завантаження... 🏃‍♂️</p>
				)}
			</div>
		</main>
	);
};

export default FriendList;
