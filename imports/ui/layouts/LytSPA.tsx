import React, { Fragment } from 'react';
import { Grid } from '@mui/material';
import HeaderView from '/imports/ui/layouts/shared/HeaderView';
import NavigationDrawer from '/imports/ui/layouts/shared/NavigationDrawer';

const LytSpa = () => {
	return (
		<Fragment>
			<Grid container>
				<HeaderView/>
				<NavigationDrawer/>

			</Grid>
		</Fragment>
	);
};

export default LytSpa;
