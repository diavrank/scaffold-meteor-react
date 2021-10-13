import React from 'react';
import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';
import { Box, IconButton, Theme, Toolbar } from '@mui/material';
import { styled } from '@mui/material/styles';
import MenuIcon from '@mui/icons-material/Menu';
import { DRAWER_WIDTH } from '/imports/ui/layouts/shared/NavigationDrawer';
import { useDispatch, useSelector } from 'react-redux';
import { setDrawerAction } from '/imports/ui/modules/temporal';
import useMediaQuery from '@mui/material/useMediaQuery';
import Breadcrumb from '/imports/ui/layouts/shared/Breadcrumb';
import UserLogged from '/imports/ui/components/UserLogged/UserLogged';

interface AppBarProps extends MuiAppBarProps {
	open?: boolean;
}

const AppBar = styled(MuiAppBar, {
	shouldForwardProp: (prop) => prop !== 'open'
})<AppBarProps>(({ theme, open }) => ({
	transition: theme.transitions.create(['margin', 'width'], {
		easing: theme.transitions.easing.sharp,
		duration: theme.transitions.duration.leavingScreen
	}),
	...(open && {
		width: `calc(100% - ${ DRAWER_WIDTH }px)`,
		marginLeft: `${ DRAWER_WIDTH }px`,
		transition: theme.transitions.create(['margin', 'width'], {
			easing: theme.transitions.easing.easeOut,
			duration: theme.transitions.duration.enteringScreen
		})
	})
}));

const HeaderView = () => {
	const dispatch = useDispatch();
	const drawer = useSelector(store => store.temporal.drawer);

	return (
		<AppBar position="fixed" color="transparent" open={ drawer }>
			<Toolbar>
				<IconButton
					size="large"
					edge="start"
					color="inherit"
					aria-label="menu"
					onClick={ () => dispatch(setDrawerAction(!drawer)) }
				>
					<MenuIcon/>
				</IconButton>
				<Breadcrumb/>
				<Box component="div" sx={ { flexGrow: 1 } }/>
				<UserLogged/>
			</Toolbar>
		</AppBar>
	);
};

export default HeaderView;
