import { useState } from 'react';

import Post from '../components/Post/Post';
import ProfileHeader from '../components/Profile/ProfileHeader';
import ProfilePetCard from '../components/Profile/ProfilePetCard';
import CreatePostModal from '../components/Post/CreatePostModal';
import { Link, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useGetUserDetailsQuery } from '../services/authService';

const Profile = () => {
	const { id } = useParams();
	const [showModal, setShowModal] = useState({ show: false });
	const { userInfo } = useSelector((state) => state.auth);

	const own = userInfo._id === id || !id;
	const profileId = own ? userInfo._id : id;

	const { data, isLoading, isError, error } = useGetUserDetailsQuery(profileId);

	if (isLoading) {
		return <div>Loading...</div>;
	}

	if (isError) {
		return <div className="text-red-700">Error {error.status}</div>;
	}

	const openModal = () => {
		setShowModal({ show: true });
	};

	const closeModal = () => {
		setShowModal({ show: false });
	};

	return (
		<>
			<ProfileHeader {...data} own={own} />
			<div className="flex space-x-4 max-lg:flex-col-reverse ">
				<main className="">
					<div className="flex items-center justify-between px-6 py-4 text-white bg-violet-500 rounded-t-md">
						<h2 className="text-base font-medium">Дописи</h2>
						<button
							onClick={openModal}
							className="rounded-full leading-none font-semibold text-xs py-1.5 px-2.5 bg-amber-500">
							Створити новий допис
						</button>
					</div>
					<div className="space-y-4 [&>*:first-child]:rounded-t-none">
						<Post />
						<Post />
						<Post />
					</div>
				</main>
				<div>
					<aside className="rounded-md bg-violet-400">
						<div className="flex items-center justify-between px-6 py-4 text-white bg-violet-500 rounded-t-md">
							<h2 className="text-base font-medium">Улюбленці користувача</h2>
						</div>
						<div className="p-4 space-y-4">
							<div className="grid grid-cols-[1fr,1fr] gap-4">
								<ProfilePetCard />
								<ProfilePetCard />
								<ProfilePetCard />
								<ProfilePetCard />
							</div>
							<div className="text-center">
								<Link
									to={'/pets'}
									className="w-64 bg-violet-600 text-white text-xs leading-none p-2.5 rounded-xl">
									Переглянути більше
								</Link>
							</div>
						</div>
					</aside>
				</div>
			</div>
			<CreatePostModal modalIsOpen={showModal} closeModal={closeModal} />
		</>
	);
};

export default Profile;
