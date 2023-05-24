import { Routes, Route, Navigate } from 'react-router-dom';

import Login from './pages/Login';
import Profile from './pages/Profile';
import MainLayout from './layouts/MainLayout';
import Feed from './pages/Feed';
import Pets from './pages/Pets';
import PetProfile from './pages/PetProfile';
import Search from './pages/Search';
import Friends from './pages/Friends';
import FriendListLayout from './layouts/FriendListLayout';

function App() {
	return (
		<Routes>
			<Route path="/sign-in" element={<Login />} />
			<Route element={<MainLayout />}>
				<Route path="/profile/*" element={<Profile />} />
				<Route path="/feed/*" element={<Feed />} />
				<Route path="/pets/*" element={<Pets />} />
				<Route path="/pets/:petId" element={<PetProfile />} />
				<Route path="/search" element={<Search />} />
			</Route>
			<Route element={<FriendListLayout />}>
				<Route path="/friends/*" element={<Friends />} />
			</Route>
			<Route path="*" element={<Navigate to={'/profile'} />} />
		</Routes>
	);
}

export default App;
