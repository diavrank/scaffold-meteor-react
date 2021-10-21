import { normalizeRoutes } from 'react-view-router';
import LytSpa from '/imports/ui/layouts/LytSPA';
import Home from '/imports/ui/views/Home/Home';
import userRoutes from '/imports/ui/routes/userRoutes';
import loginRoutes from '/imports/ui/routes/loginRoutes';
import ConfigureAccount from '../views/Account/ConfigureAccount';
import profileRoutes from '/imports/ui/routes/profileRoutes';

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
				path: 'account',
				name: 'home.account',
				components: {
					sectionView: ConfigureAccount
				}
			},
			userRoutes,
			profileRoutes
		]
	},
	{
		path: '/',
		redirect: '/login'
	},
	loginRoutes
]);
