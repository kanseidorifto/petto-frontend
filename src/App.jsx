import { Routes, Route, Navigate } from 'react-router-dom';

import Login from './pages/Login';
import Profile from './pages/Profile';
import MainLayout from './layouts/MainLayout';

function App() {
	return (
		<Routes>
			<Route path="/sign-in" element={<Login />} />
			<Route element={<MainLayout />}>
				<Route path="/profile" element={<Profile />} />
			</Route>
			<Route path="*" element={<Navigate to={'/profile'} />} />
		</Routes>
	);
}

export default App;
