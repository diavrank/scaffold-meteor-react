import React from 'react';
import { Box, CssBaseline } from '@mui/material';
import HeaderView from '/imports/ui/layouts/shared/HeaderView';
import NavigationDrawer, { DRAWER_WIDTH } from '/imports/ui/layouts/shared/NavigationDrawer';
import { useSelector } from 'react-redux';
import { RouterView } from 'react-view-router';
import { DrawerHeader, Main } from '/imports/ui/components/Utilities/Drawer/Main';


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
				}
			} }>
				<DrawerHeader/>
				<RouterView name="sectionView"/>
			</Main>
		</Box>
	);
};

export default LytSpa;
