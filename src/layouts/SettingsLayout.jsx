import { Outlet } from 'react-router-dom';

import Header from '../components/Header';
import SidebarMain from '../components/SidebarMain';
import SettingsSidebar from '../components/Settings/SettingsSidebar';

const SettingsLayout = () => {
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
					<SettingsSidebar />
				</div>
			</div>
		</div>
	);
};

export default SettingsLayout;
