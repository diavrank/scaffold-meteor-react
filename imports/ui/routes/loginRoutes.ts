import LytAuth from '/imports/ui/layouts/LytAuth';
import Login from '/imports/ui/views/Auth/Login';
import ForgotPassword from '/imports/ui/views/Auth/ForgotPassword';
import ResetPassword from '/imports/ui/views/Auth/ResetPassword';
import VerifyAccount from '/imports/ui/views/Auth/VerifyAccount';
import SetInitialPassword from '/imports/ui/views/Auth/SetInitialPassword';

export default {
	path: '/',
	component: LytAuth,
	children: [
		{
			name: 'login',
			path: 'login',
			exact: true,
			components: {
				sectionView: Login
			}
		},
		{
			name: 'forgotPassword',
			path: '/forgot-password',
			components: {
				sectionView: ForgotPassword
			}
		},
		{
			name: 'resetPassword',
			path: '/reset-password',
			components: {
				sectionView: ResetPassword
			}
		},
		{
			name: 'verifyAccount',
			path: '/verify-email',
			components: {
				sectionView: VerifyAccount
			}
		},
		{
			name: 'enrollAccount',
			path: '/enroll-account',
			components: {
				sectionView: SetInitialPassword
			}
		}
	]
}
