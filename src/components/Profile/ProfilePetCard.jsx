const ProfilePetCard = () => {
	return (
		<div className="w-40 rounded-md bg-violet-300">
			<div className="w-40 h-40">
				<img
					src="https://www.purina.co.uk/sites/default/files/styles/square_medium_440x440/public/2022-06/Siberian%20Forest.2.jpg?h=ac023024&itok=B1W2TQ2l"
					alt=""
					className="rounded-t-md"
				/>
			</div>
			<div className="p-1 bg-violet-500 rounded-b-md">
				<p className="text-center text-white truncate">Барсик</p>
			</div>
		</div>
	);
};

export default ProfilePetCard;
