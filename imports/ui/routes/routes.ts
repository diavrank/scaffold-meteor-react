import { normalizeRoutes } from 'react-view-router';
import LytSpa from '/imports/ui/layouts/LytSPA';
import LytAuth from '/imports/ui/layouts/LytAuth';
import Login from '/imports/ui/views/Auth/Login';
import ForgotPassword from '/imports/ui/views/Auth/ForgotPassword';
import ResetPassword from '/imports/ui/views/Auth/ResetPassword';
import VerifyAccount from '../views/Auth/VerifyAccount';
import SetInitialPassword from '/imports/ui/views/Auth/SetInitialPassword';
import ListUsers from '/imports/ui/views/Users/ListUsers';
import Home from '/imports/ui/views/Home/Home';
import SaveUser from '/imports/ui/views/Users/SaveUser';
import AnonymousView from '/imports/ui/routes/AnonymousView';

export default normalizeRoutes([
	{
		path: '/home',
		component: LytSpa,
		children: [
			{
				name: 'home',
				path: '/',
				exact: true,
				components: {
					sectionView: Home
				}
			},
			{
				path: '/users',
				components: {
					sectionView: AnonymousView
				},
				children: [
					{
						name: 'home.users',
						path: '/',
						exact: true,
						component: ListUsers
					},
					{
						name: 'home.users.create',
						path: '/create',
						component: SaveUser
					},
					{
						name: 'home.users.edit',
						path: '/edit',
						component: SaveUser
					}
				]
			}
		]
	},
	{
		path: '/',
		redirect: '/login'
	},
	{
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
]);
