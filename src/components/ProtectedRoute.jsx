import { useDispatch, useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';
import { useGetOwnerDetailsQuery } from '../services/authService';
import { useEffect } from 'react';
import { logout, setCredentials } from '../redux/auth/authSlice';
import { baseApi } from '../services/baseService';

const ProtectedRoute = () => {
	const { userToken, userInfo } = useSelector((state) => state.auth);
	const dispatch = useDispatch();

	const { data, isFetching, isError, isSuccess } = useGetOwnerDetailsQuery();

	useEffect(() => {
		if (userToken && data && isSuccess && !isFetching) {
			dispatch(setCredentials(data));
		}
	}, [data, isFetching, isSuccess, dispatch, userToken]);

	if (!userToken || isError) {
		dispatch(baseApi.util.resetApiState());
		dispatch(logout());
		return <Navigate to={'/sign-in'} replace={true} />;
	}

	if (isFetching || !userInfo) {
		return <div>Loading...</div>;
	}

	return <Outlet />;
};
export default ProtectedRoute;
