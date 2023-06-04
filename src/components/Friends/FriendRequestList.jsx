import { useState, useEffect } from 'react';
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline';
import { Link } from 'react-router-dom';

const FriendRequestList = () => {
	const [searchText, setSearchText] = useState('');
	const [activeTab, setActiveTab] = useState(0);
	useEffect(() => {
		let tab;
		switch (activeTab) {
			case 0:
				tab = 'Вхідні запити';
				break;
			case 1:
				tab = 'Відправлені запити';
				break;
			default:
				tab = '';
				break;
		}
		document.title = 'Petto - ' + tab;
		return () => {
			document.title = 'Petto';
		};
	}, [activeTab]);

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
				<div className="px-3 py-2 space-x-2">
					<button
						onClick={() => setActiveTab(0)}
						className={
							'px-2 py-2 border-2 hover:bg-violet-300/50 transition-all font-medium leading-none min-w-[10rem] border-violet-300 rounded-md' +
							(activeTab === 0 ? ' bg-violet-300/50' : '')
						}>
						Вхідні
					</button>
					<button
						onClick={() => setActiveTab(1)}
						className={
							'px-2 py-2 border-2 hover:bg-violet-300/50 transition-all font-medium leading-none min-w-[10rem] border-violet-300 rounded-md' +
							(activeTab === 1 ? ' bg-violet-300/50' : '')
						}>
						Відправлені
					</button>
				</div>
				<div className="flex flex-col">
					{activeTab === 0 &&
						new Array(10).fill(0).map((obj, index) => (
							<div key={index} className="flex w-full px-3 py-2">
								<div className="flex items-center space-x-3">
									<Link to={'/profile'}>
										<img
											src="https://cdn.discordapp.com/attachments/905893715170697216/1096881731530920077/image.png"
											alt="avatar"
											className="w-12 h-12 rounded-full max-w-none"
										/>
									</Link>
									<div>
										<Link to={'/profile'}>
											<p>Василь Пупкін</p>
										</Link>
										<div className="flex flex-wrap items-center">
											<Link to={'/profile'} className="text-neutral-300 hover:underline">
												Переглянути профіль
											</Link>
											<div className="flex items-center px-4 space-x-2">
												<button className="p-1 leading-none transition-all border rounded-md border-amber-400 hover:bg-amber-400 bg-amber-300">
													Прийняти запит
												</button>
												<button className="leading-none text-violet-700 hover:underline">
													Відхилити запит
												</button>
											</div>
										</div>
									</div>
								</div>
							</div>
						))}
					{activeTab === 1 &&
						new Array(10).fill(0).map((obj, index) => (
							<div key={index} className="flex w-full px-3 py-2">
								<div className="flex items-center space-x-3">
									<Link to={'/profile'}>
										<img
											src="https://cdn.discordapp.com/attachments/905893715170697216/1096881731530920077/image.png"
											alt="avatar"
											className="w-12 h-12 rounded-full max-w-none"
										/>
									</Link>
									<div>
										<Link to={'/profile'}>
											<p>Василь Пупкін</p>
										</Link>
										<div className="flex flex-wrap items-center">
											<Link to={'/profile'} className="text-neutral-300 hover:underline">
												Переглянути профіль
											</Link>
											<div className="flex items-center px-4 space-x-2">
												<button className="leading-none text-violet-700 hover:underline">
													Відхилити запит
												</button>
											</div>
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

export default FriendRequestList;
