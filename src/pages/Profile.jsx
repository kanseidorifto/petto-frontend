import { useState } from 'react';

import Post from '../components/Post';
import ProfileHeader from '../components/Profile/ProfileHeader';
import ProfilePetCard from '../components/Profile/ProfilePetCard';
import CreatePostModal from '../components/CreatePostModal';

const Profile = () => {
	const [showModal, setShowModal] = useState({ show: false });
	const openModal = () => {
		setShowModal({ show: true });
	};

	const closeModal = () => {
		setShowModal({ show: false });
	};
	return (
		<>
			<ProfileHeader />
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
								<button className="w-64 bg-violet-600 text-white text-xs leading-none p-2.5 rounded-xl">
									Переглянути більше
								</button>
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
