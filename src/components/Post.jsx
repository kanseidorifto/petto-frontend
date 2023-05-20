import { useState } from 'react';

import {
	ChatBubbleOvalLeftIcon,
	EllipsisVerticalIcon,
	HeartIcon,
} from '@heroicons/react/24/outline';
import TextareaAutosize from 'react-textarea-autosize';
import Popup from 'reactjs-popup';
import PostPopup from './PostPopup';

const Post = () => {
	const [commentText, setCommentText] = useState('');
	return (
		<section className="text-white rounded-md bg-violet-400">
			<div className="flex items-center px-6 py-4 space-x-2">
				<img
					src="https://scontent-waw1-1.xx.fbcdn.net/v/t1.18169-9/15940916_690009601179378_1191888128728911677_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=MzNkMYC_sIAAX8eO01d&_nc_ht=scontent-waw1-1.xx&oh=00_AfDzQhxcX60W8SjCEJ0iFVn8YHN4P9a3FCpR3YbByU12tQ&oe=648C86AA"
					alt=""
					className="w-10 h-10 rounded-full"
				/>
				<div className="flex items-center justify-between flex-1">
					<div className="">
						<p className="text-sm font-semibold">Андрій Іваненко</p>
						<p className="text-sm font-light text-neutral-300">10 січня 2023</p>
					</div>
					<div>
						<Popup
							trigger={
								<button>
									<EllipsisVerticalIcon className="w-6 h-6" />
								</button>
							}
							position="bottom right">
							<PostPopup own />
						</Popup>

						{/* <EllipsisVerticalIcon className="w-6 h-6" /> */}
					</div>
				</div>
			</div>
			<div className="w-full h-96 bg-violet-500"></div>
			<div className="px-6 py-4 space-y-3">
				<div className="flex space-x-3">
					<div className="flex items-center space-x-1">
						<HeartIcon className="w-6 h-6" />
						<span className="text-base leading-none">123</span>
					</div>
					<div className="flex items-center space-x-1">
						<ChatBubbleOvalLeftIcon className="w-6 h-6" />
						<span className="text-base leading-none">123</span>
					</div>
				</div>
				<div>
					<span className="font-bold">Андрій Іваненко</span>{' '}
					<span>
						Звичайний текст для опису посту та дуже гарних тваринок цього користувача. Йой, які
						файні, дуже файні. Крутий сайт, буду рекомендувати його всім своїм друзям!!!
					</span>
				</div>
				<div className="flex flex-wrap">
					{new Array(4).fill(0).map((obj, index) => (
						<div key={index} className="flex items-center max-w-[256px] space-x-2 mx-2 my-1">
							<img
								className="w-10 h-10 border-2 rounded-full border-amber-400"
								src="https://www.purina.co.uk/sites/default/files/styles/square_medium_440x440/public/2022-06/Siberian%20Forest.2.jpg?h=ac023024&itok=B1W2TQ2l"
								alt=""
							/>
							<span className="text-sm font-normal truncate">Барсик</span>
						</div>
					))}
				</div>
				<div className="flex items-center space-x-2">
					<img
						src="https://scontent-waw1-1.xx.fbcdn.net/v/t1.18169-9/15940916_690009601179378_1191888128728911677_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=MzNkMYC_sIAAX8eO01d&_nc_ht=scontent-waw1-1.xx&oh=00_AfDzQhxcX60W8SjCEJ0iFVn8YHN4P9a3FCpR3YbByU12tQ&oe=648C86AA"
						alt=""
						className="w-10 h-10 rounded-full"
					/>
					<TextareaAutosize
						className="flex-1 p-1 text-base bg-transparent rounded appearance-none resize-none placeholder:text-white placeholder:font-light focus:bg-violet-300/50 focus:outline-none focus:border-none focus:ring-none"
						value={commentText}
						onChange={(e) => setCommentText(e.target.value)}
						placeholder="Додайте коментар..."
					/>
					<button className="p-2 text-base font-medium rounded-md text-violet-700 hover:bg-violet-300/50">
						Опублікувати
					</button>
				</div>
			</div>
		</section>
	);
};

export default Post;
