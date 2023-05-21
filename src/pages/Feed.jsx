import { NavLink } from 'react-router-dom';
import Post from '../components/Post/Post';

const options = [
	{
		label: 'Підписки',
		href: '/feed',
	},
	{
		label: 'Популярне',
		href: '/feed/popular',
	},
];

const Option = ({ label, href }) => {
	return (
		<NavLink
			to={href}
			end
			className={({ isActive }) => {
				return (
					'flex items-center px-2 py-1 space-x-2 rounded-md hover:bg-violet-300/50 ease-out delay-75 transition' +
					(isActive ? ' bg-violet-300/50' : ' ')
				);
			}}>
			<span className="">{label}</span>
		</NavLink>
	);
};

const Feed = () => {
	return (
		<div className="flex space-x-4 max-lg:flex-col-reverse ">
			<div className="space-y-4">
				<Post />
				<Post />
				<Post />
				<Post />
			</div>
			<div>
				<aside className="inline-block w-64 text-white rounded-md bg-violet-400">
					<nav>
						<ul className="p-3 space-y-3 text-base leading-none">
							{options.map((option, index) => (
								<li key={index}>
									<Option {...option} />
								</li>
							))}
						</ul>
					</nav>
				</aside>
			</div>
		</div>
	);
};

export default Feed;
