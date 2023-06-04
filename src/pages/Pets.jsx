import { useState, useEffect } from 'react';

import PetCard from '../components/Pets/PetCard';
import CreatePetModal from '../components/Pets/CreatePetModal';

const Pets = () => {
	useEffect(() => {
		document.title = 'Petto - Улюбленці';
		return () => {
			document.title = 'Petto';
		};
	}, []);
	const [showModal, setShowModal] = useState({ show: false });
	const openModal = () => {
		setShowModal({ show: true });
	};

	const closeModal = () => {
		setShowModal({ show: false });
	};
	return (
		<>
			<main className="rounded-md bg-violet-400">
				<div className="flex items-center justify-between px-6 py-3 text-white bg-violet-500 rounded-t-md">
					<h2 className="text-base font-medium">Улюбленці користувача</h2>
					<button
						onClick={openModal}
						className="px-4 py-2 text-xs font-semibold leading-none rounded-full bg-violet-700">
						Додати
					</button>
				</div>
				<div className="p-4 space-y-4">
					<div className="grid grid-cols-4 gap-4 place-items-center max-lg:grid-cols-2">
						{new Array(20).fill(0).map((obj, index) => (
							<PetCard key={index} />
						))}
					</div>
				</div>
			</main>
			<CreatePetModal modalIsOpen={showModal} closeModal={closeModal} />
		</>
	);
};

export default Pets;
