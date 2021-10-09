import React, { Fragment } from 'react';
import LytAuth from '/imports/ui/layouts/LytAuth';
import LytSPA from './layouts/LytSPA';
import { ThemeProvider } from '@mui/material/styles';
import theme from './plugins/material-ui';

export const App = () => (
	<ThemeProvider theme={ theme }>
		<LytAuth/>
		{/*<LytSPA/>*/ }
	</ThemeProvider>
);
