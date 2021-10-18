import React from 'react';
import { Box, IconButton, Toolbar } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { useDispatch, useSelector } from 'react-redux';
import { setDrawerAction } from '/imports/ui/modules/temporal';
import Breadcrumb from '/imports/ui/layouts/shared/Breadcrumb';
import UserLogged from '/imports/ui/components/UserLogged/UserLogged';
import { AppBar } from '/imports/ui/components/Utilities/Drawer/AppBar';

const HeaderView = () => {
	const dispatch = useDispatch();
	const drawer = useSelector(store => store.temporal.drawer);

	return (
		<AppBar position="fixed" color="transparent" open={ drawer }>
			<Toolbar>
				<IconButton
					color="inherit"
					aria-label="open drawer"
					edge="start"
					size="large"
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
