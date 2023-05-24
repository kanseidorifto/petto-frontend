import { Outlet } from 'react-router-dom';

import Header from '../components/Header';
import SidebarMain from '../components/SidebarMain';
import RequestListSidebar from '../components/Friends/RequestListSidebar';

const FriendListLayout = () => {
	return (
		<div>
			<Header />
			<div className="container flex mx-auto my-4 space-x-4">
				<div>
					<SidebarMain />
				</div>
				<main className="w-full space-y-4">
					<Outlet />
				</main>
				<div>
					<RequestListSidebar />
				</div>
			</div>
		</div>
	);
};

export default FriendListLayout;
