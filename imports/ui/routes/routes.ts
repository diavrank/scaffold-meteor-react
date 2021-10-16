import { normalizeRoutes } from 'react-view-router';
import LytSpa from '/imports/ui/layouts/LytSPA';
import LytAuth from '/imports/ui/layouts/LytAuth';
import Login from '/imports/ui/views/Auth/Login';
import ForgotPassword from '/imports/ui/views/Auth/ForgotPassword';

export default normalizeRoutes([
	{ path: '/', index: 'home' },
	{
		path: '/home',
		component: LytSpa
	},
	{
		path: '/login',
		component: LytAuth,
		children: [
			{
				path: '/forgot-password',
				components: {
					sectionView: ForgotPassword
				}
			},
			{
				path: '/',
				components: {
					sectionView: Login
				}
			}
		]
	}
]);
