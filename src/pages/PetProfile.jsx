import { Link } from 'react-router-dom';
import Post from '../components/Post/Post';

const PetProfile = () => {
	return (
		<>
			<div className="flex space-x-4 max-lg:flex-col-reverse ">
				<main className="">
					<div className="flex items-center justify-between px-6 py-4 text-white bg-violet-500 rounded-t-md">
						<h2 className="text-base font-medium">Дописи</h2>
					</div>
					<div className="space-y-4 [&>*:first-child]:rounded-t-none">
						<Post />
						<Post />
						<Post />
					</div>
				</main>
				<div>
					<aside className="rounded-md bg-violet-400 text-white">
						<div className="flex items-center justify-between px-6 py-4 text-white bg-violet-500 rounded-t-md">
							<h2 className="text-base font-medium">Улюбленець</h2>
						</div>
						<div className="w-96 h-96">
							<img
								src="https://cdn.discordapp.com/attachments/905893715170697216/1096881731530920077/image.png"
								alt="petAvatar"
								className="w-full h-full object-cover"
							/>
						</div>
						<div className="text-center">
							<p className="text-xl font-semibold p-3">Барсик</p>
							<p className="text-base p-3">
								Порода: <span>Сибірська кішка</span>
							</p>
							<p className="text-base p-3">
								Вік: <span>3 роки</span>
							</p>
							<p className="text-base p-3">
								Біографія: <span>Любить спатки на підвіконнику.</span>
							</p>
							<p className="text-base p-3">
								Власник:{' '}
								<Link to={'/profile'} className="text-violet-500 hover:underline">
									Андрій Іваненко
								</Link>
							</p>
						</div>
					</aside>
				</div>
			</div>
		</>
	);
};

export default PetProfile;
