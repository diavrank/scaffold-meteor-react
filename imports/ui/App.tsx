import React from 'react';
import { ThemeProvider } from '@mui/material/styles';
import theme from './plugins/material-ui';
import { Provider } from 'react-redux';
import generateStore from '/imports/ui/store';
import router from '/imports/ui/router';
import routes from '/imports/ui/routes/routes';
import { RouterView } from 'react-view-router';

router.use({routes});

console.log('router: ', router);

export const App = () => {

	return (
		<ThemeProvider theme={ theme }>
			<Provider store={ generateStore() }>
				<RouterView router={ router}/>
			</Provider>
		</ThemeProvider>
	);
};
