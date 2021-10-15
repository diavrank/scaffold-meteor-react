import React from 'react';
import LytAuth from '/imports/ui/layouts/LytAuth';
import LytSPA from './layouts/LytSPA';
import { ThemeProvider } from '@mui/material/styles';
import theme from './plugins/material-ui';
import { Provider } from 'react-redux';
import generateStore from '/imports/ui/store';
import {
	BrowserRouter as Router,
	Switch
} from 'react-router-dom';
import routes from '/imports/ui/routes/routes';
import { RouteWithSubRoutes } from '/imports/ui/router';

export const App = () => (
	<ThemeProvider theme={ theme }>
		<Provider store={ generateStore() }>
			<Router>
				<Switch>
					{ routes.map((route, i) => (
						<RouteWithSubRoutes key={ i } { ...route } />
					)) }
				</Switch>
			</Router>
		</Provider>
	</ThemeProvider>
);
