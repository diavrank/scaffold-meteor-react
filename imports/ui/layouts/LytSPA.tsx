import React from 'react';
import { Box, CssBaseline } from '@mui/material';
import HeaderView from '/imports/ui/layouts/shared/HeaderView';
import NavigationDrawer, { DRAWER_WIDTH } from '/imports/ui/layouts/shared/NavigationDrawer';
import ListUsers from '/imports/ui/views/Users/ListUsers';
import { styled } from '@mui/material/styles';
import { useSelector } from 'react-redux';

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })<{
	open?: boolean;
}>(({ theme, open }) => ({
	flexGrow: 1,
	padding: theme.spacing(3),
	transition: theme.transitions.create('margin', {
		easing: theme.transitions.easing.sharp,
		duration: theme.transitions.duration.leavingScreen
	}),
	...(open && {
		transition: theme.transitions.create('margin', {
			easing: theme.transitions.easing.easeOut,
			duration: theme.transitions.duration.enteringScreen
		}),
		marginLeft: "0px !important"
	})
}));
const DrawerHeader = styled('div')(({ theme }) => ({
	display: 'flex',
	alignItems: 'center',
	padding: theme.spacing(0, 1),
	// necessary for content to be below app bar
	...theme.mixins.toolbar,
	justifyContent: 'flex-end'
}));

const LytSpa = () => {
	const drawer = useSelector(store => store.temporal.drawer);
	return (
		<Box sx={ { display: 'flex' } }>
			<CssBaseline/>
			<HeaderView/>
			<NavigationDrawer/>
			<Main open={ drawer } sx={ {
				ml: {
					xs: 0,
					sm: `-${ DRAWER_WIDTH }px`,
					md: `-${ DRAWER_WIDTH }px`,
					lg: `-${ DRAWER_WIDTH }px`,
					xl: `-${ DRAWER_WIDTH }px`
				}
			} }>
				<DrawerHeader/>
				<ListUsers/>
			</Main>
		</Box>
	);
};

export default LytSpa;
