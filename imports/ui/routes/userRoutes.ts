import AnonymousView from '/imports/ui/routes/AnonymousView';
import ListUsers from '/imports/ui/views/Users/ListUsers';
import SaveUser from '/imports/ui/views/Users/SaveUser';

export default {
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
