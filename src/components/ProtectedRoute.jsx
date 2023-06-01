import { useDispatch, useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';
import { useGetOwnerDetailsQuery } from '../services/authService';
import { useEffect } from 'react';
import { logout, setCredentials } from '../redux/auth/authSlice';

const ProtectedRoute = () => {
	const { userToken, userInfo } = useSelector((state) => state.auth);
	const dispatch = useDispatch();

	const { data, isLoading, isError } = useGetOwnerDetailsQuery(null, {
		pollingInterval: 900000, // 15mins
	});

	useEffect(() => {
		if (data) {
			dispatch(setCredentials(data));
		}
	}, [data, dispatch]);

	if (isLoading || !userInfo) {
		return <div>Loading...</div>;
	}

	if (!userToken || isError) {
		dispatch(logout);
		return <Navigate to={'/sign-in'} replace={true} />;
	}

	return <Outlet />;
};
export default ProtectedRoute;
