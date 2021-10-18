import { normalizeRoutes } from 'react-view-router';
import LytSpa from '/imports/ui/layouts/LytSPA';
import Home from '/imports/ui/views/Home/Home';
import userRoutes from '/imports/ui/routes/userRoutes';
import loginRoutes from '/imports/ui/routes/loginRoutes';

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
			userRoutes
		]
	},
	{
		path: '/',
		redirect: '/login'
	},
	loginRoutes
]);
