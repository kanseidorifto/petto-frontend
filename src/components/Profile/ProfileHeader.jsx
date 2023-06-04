import { useNavigate } from 'react-router-dom';

const backendURL = process.env.REACT_APP_API_URL;

const ProfileHeader = ({ givenName, surname, bio, avatarUrl, coverUrl, own }) => {
	const navigate = useNavigate();

	const onClickEditProfile = () => {
		navigate('/settings/profile');
	};
	return (
		<div>
			<div className="w-full rounded-md bg-violet-400">
				<div
					className="bg-center bg-no-repeat bg-cover shadow-inner select-none h-80 rounded-t-md"
					style={{ backgroundImage: `url('${backendURL + coverUrl}')` }}></div>
				<div className="flex p-6 space-x-4 text-white rounded-md ProfileInfo bg-violet-500">
					<div className="select-none -mt-36">
						<img
							className="w-48 h-48 bg-white rounded-full shadow-md border-amber-300"
							src={backendURL + avatarUrl}
							alt="avatar"
						/>
					</div>
					<div className="flex items-center justify-between flex-1">
						<div className="space-y-2">
							<h2 className="text-2xl font-semibold leading-none">{givenName + ' ' + surname}</h2>
							<p className="text-base font-light leading-none">{bio}</p>
						</div>
						<div>
							{own && (
								<button
									onClick={onClickEditProfile}
									className="text-xs leading-none bg-violet-600 min-w-[192px] p-3 rounded-xl">
									Редагувати профіль
								</button>
							)}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ProfileHeader;
