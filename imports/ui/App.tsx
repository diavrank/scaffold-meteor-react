import React from 'react';
import LytAuth from '/imports/ui/layouts/LytAuth';
import LytSPA from './layouts/LytSPA';
import { ThemeProvider } from '@mui/material/styles';
import theme from './plugins/material-ui';
import { Provider } from 'react-redux';
import generateStore from '/imports/ui/store';

export const App = () => (
	<ThemeProvider theme={ theme }>
		<Provider store={ generateStore() }>
			<LytAuth/>
			{/*<LytSPA/>*/}
		</Provider>
	</ThemeProvider>
);
