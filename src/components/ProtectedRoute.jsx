import { useDispatch, useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';
import { useGetOwnerDetailsQuery } from '../services/authService';
import { useEffect } from 'react';
import { logout, setCredentials } from '../redux/auth/authSlice';

const ProtectedRoute = () => {
	const { userToken, userInfo } = useSelector((state) => state.auth);
	const dispatch = useDispatch();

	const { data, isFetching, isError, isSuccess } = useGetOwnerDetailsQuery(null, {
		pollingInterval: 0, // 15mins
	});

	useEffect(() => {
		if (data && isSuccess) {
			dispatch(setCredentials(data));
		}
	}, [data, isSuccess, dispatch]);

	if (!userToken || isError) {
		dispatch(logout);
		return <Navigate to={'/sign-in'} replace={true} />;
	}

	if (isFetching || !userInfo) {
		return <div>Loading...</div>;
	}

	return <Outlet />;
};
export default ProtectedRoute;
