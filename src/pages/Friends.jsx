import { Navigate, Route, Routes } from 'react-router-dom';
import FriendList from '../components/FriendList';
import FriendRequestList from '../components/FriendRequestList';

const Friends = () => {
	return (
		<div>
			<Routes>
				<Route path="/" element={<FriendList />} />
				<Route path="/requests" element={<FriendRequestList />} />
				<Route path="*" element={<Navigate to={'/friends'} />} />
			</Routes>
		</div>
	);
};

export default Friends;
