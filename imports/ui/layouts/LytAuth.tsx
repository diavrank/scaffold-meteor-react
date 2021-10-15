import React from 'react';
import { Box, CssBaseline, Grid } from '@mui/material';
import Login from '/imports/ui/views/Auth/Login';
import ForgotPassword from '/imports/ui/views/Auth/ForgotPassword';
import SetInitialPassword from '/imports/ui/views/Auth/SetInitialPassword';
import ResetPassword from '/imports/ui/views/Auth/ResetPassword';
import VerifyAccount from '/imports/ui/views/Auth/VerifyAccount';
import { Switch } from 'react-router-dom';
import { RouteWithSubRoutes } from '/imports/ui/router';

const styles = {
	root: {
		height: '100vh'
	},
	rightSide: {
		backgroundImage: 'url(/img/meteor.jpg)',
		backgroundSize: 'cover',
		position: 'relative'
	}
} as const;//MUI 5.0: https://mui.com/system/the-sx-prop/#typescript-usage

const LytAuth = ({routes}) => {
	return (
		<Grid container spacing={ 0 } sx={ styles.root }>
			<CssBaseline/>
			<Grid item xs={ 12 } sm={ 8 } md={ 4 }
			      sx={ { display: 'flex', flexDirection: 'column', justifyContent: 'center', p: 12 } }>
				<Box sx={ { textAlign: 'center' } }>
					<img src="/img/mui.png" alt="Material UI" height="180px" width="auto"/>
				</Box>
				<Switch>
					{ routes.map((route, i) => (
						<RouteWithSubRoutes key={ i } { ...route } />
					)) }
				</Switch>
			</Grid>
			<Grid item xs={ 12 } sm={ 4 } md={ 8 }
			      sx={ { ...styles.rightSide, display: 'flex', flexDirection: 'column', justifyContent: 'center' } }>
				<Box sx={ {
					zIndex: 2,
					mt: '300px',
					fontSize: 'h2.fontSize',
					fontWeight: 'medium',
					mr: 10,
					textAlign: 'right',
					color: 'white'
				} }>
					Theory SwE
				</Box>
			</Grid>
		</Grid>
	);
};

export default LytAuth;
