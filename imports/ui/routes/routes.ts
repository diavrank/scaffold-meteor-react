import LytSpa from '/imports/ui/layouts/LytSPA';
import LytAuth from '/imports/ui/layouts/LytAuth';
import Login from '/imports/ui/views/Auth/Login';
import ForgotPassword from '../views/Auth/ForgotPassword';
import ResetPassword from '/imports/ui/views/Auth/ResetPassword';
import VerifyAccount from '/imports/ui/views/Auth/VerifyAccount';
import SetInitialPassword from '/imports/ui/views/Auth/SetInitialPassword';

export default [
	{
		path: '/home',
		component: LytSpa
	},
	{
		path: '/',
		component: LytAuth,
		routes: [
			{
				path: '/forgot-password',
				component: ForgotPassword
			},
			{
				path: '/reset-password',
				component: ResetPassword
			},
			{
				path: '/verify-email',
				component: VerifyAccount
			},
			{
				path: '/enroll-account',
				component: SetInitialPassword
			},
			{
				path: '/login',
				component: Login
			}
		]
	}
];
