import { useState } from 'react';
import { Link } from 'react-router-dom';
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';

const FriendList = () => {
	const [searchText, setSearchText] = useState('');
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
				<div className="flex flex-col">
					{new Array(10).fill(0).map((obj, index) => (
						<div key={index} className="flex w-full px-3 py-2">
							<div className="flex items-center space-x-3">
								<Link to={'/profile'}>
									<img
										src="https://cdn.discordapp.com/attachments/905893715170697216/1096881731530920077/image.png"
										alt="avatar"
										className="w-12 h-12 rounded-full"
									/>
								</Link>
								<div>
									<Link to={'/profile'}>
										<p>Василь Пупкін</p>
									</Link>
									<div className="flex space-x-2">
										<Link to={'/profile'} className="text-neutral-300 hover:underline">
											Переглянути профіль
										</Link>
										<button to={'/profile'} className="text-neutral-300 hover:underline">
											Написати повідомлення
										</button>
									</div>
								</div>
							</div>
						</div>
					))}
				</div>
			</div>
		</main>
	);
};

export default FriendList;
