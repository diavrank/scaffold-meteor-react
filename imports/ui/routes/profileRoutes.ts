import AnonymousView from '/imports/ui/routes/AnonymousView';
import ListProfiles from '/imports/ui/views/Profiles/ListProfiles';

export default {
	path: '/profiles',
	components: {
		sectionView: AnonymousView
	},
	children: [
		{
			name: 'home.profiles',
			path: '/',
			exact: true,
			component: ListProfiles
		}
	]
};
