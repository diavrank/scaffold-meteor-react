import React, { Fragment, useState } from 'react';
import { Box, Button, IconButton, TextField } from '@mui/material';
import ArrowBack from '@mui/icons-material/ArrowBack';
import { rounded } from '/imports/ui/directives/buttonStyles';

const ForgotPassword = () => {

	const [user, setUser] = useState({ email: '' });

	const forgotPassword = (e: any) => {
		e.preventDefault();
		console.log('user: ', user);
	};

	return (
		<Fragment>
			<Box sx={ { display: 'flex', flexDirection: 'row', justifyContent: 'flex-start' } }>
				<IconButton color="primary">
					<ArrowBack/>
				</IconButton>
				<Box sx={ { typography: 'h6' } }>Forgot my password</Box>
			</Box>
			<form onSubmit={ forgotPassword }>
				<TextField label="Email*" onChange={ e => setUser({ email: e.target.value }) }/>
				<Button type="submit" color="primary" sx={ { mt: 2, ...rounded } }>Recover</Button>
			</form>
		</Fragment>
	);
};

export default ForgotPassword;
