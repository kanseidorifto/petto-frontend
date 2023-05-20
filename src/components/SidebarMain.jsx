import {
	UserCircleIcon,
	RectangleStackIcon,
	MagnifyingGlassIcon,
	UserGroupIcon,
} from '@heroicons/react/24/outline';
import { NavLink } from 'react-router-dom';

const options = [
	{
		icon: <UserCircleIcon className="w-6 h-6" />,
		label: 'Мій профіль',
		href: '/profile',
	},
	{
		icon: <RectangleStackIcon className="w-6 h-6" />,
		label: 'Стрічка новин',
		href: '',
	},
	{
		icon: <MagnifyingGlassIcon className="w-6 h-6" />,
		label: 'Пошук',
		href: '',
	},
	{
		icon: <UserGroupIcon className="w-6 h-6" />,
		label: 'Друзі',
		href: '',
	},
];

const Option = ({ icon, label, href }) => {
	return (
		<NavLink
			to={href}
			className={({ isActive }) => {
				return (
					'flex items-center px-2 py-1 space-x-2 rounded-md hover:bg-violet-300/50 ease-out delay-75 transition' +
					(isActive ? ' bg-violet-300/50' : ' ')
				);
			}}>
			{icon}
			<span className="">{label}</span>
		</NavLink>
	);
};

const SidebarMain = () => {
	return (
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
	);
};

export default SidebarMain;
