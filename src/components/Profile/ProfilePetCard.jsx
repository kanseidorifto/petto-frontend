const ProfilePetCard = ({ givenName, avatarUrl }) => {
	return (
		<div className="w-40 rounded-md bg-violet-300">
			<div className="w-40 h-40">
				<img src={avatarUrl} alt="" className="rounded-t-md" />
			</div>
			<div className="p-1 bg-violet-500 rounded-b-md">
				<p className="text-center text-white truncate">{givenName}</p>
			</div>
		</div>
	);
};

export default ProfilePetCard;
