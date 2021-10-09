import React, { useState } from 'react';
import { Box, Button, Icon, TextField } from '@mui/material';
import { rounded } from './../../directives/buttonStyles';

const Login = () => {

	const [user, setUser] = useState({
		userOrEmail: '',
		password: ''
	});

	const login = (e: any) => {
		e.preventDefault();
		//Do login
		console.log('user: ', user);
	};

	return (
		<Box sx={ { mt: '45px' } }>
			<Box sx={ { typography: 'subtitle1' } }>Welcome!</Box>
			<Box sx={ { typography: 'h4', mb: 0 } }>Login</Box>
			<form onSubmit={ login }>
				<Box sx={ { display: 'flex', alignItems: 'flex-end' } }>
					<Icon color="primary" sx={ { mr: 1, my: 1 } }>person</Icon>
					<TextField label="Username"
					           autoComplete="off"
					           color="primary"
					           name="userOrEmail"
					           onChange={ e => setUser({ ...user, userOrEmail: e.target.value }) }/>
				</Box>
				<Box sx={ { display: 'flex', alignItems: 'flex-end' } }>
					<Icon color="primary" sx={ { mr: 1, my: 1 } }>lock</Icon>
					<TextField label="Password"
					           autoComplete="off"
					           type="password"
					           color="primary"
					           name="password"
					           onChange={ e => setUser({ ...user, password: e.target.value }) }/>
				</Box>
				<Box sx={ { display: 'flex', justifyContent: 'flex-end' } }>
					<Button color="primary" variant="text" size="small">
						Forgot password?
					</Button>
				</Box>
				<Box sx={ { display: 'flex', justifyContent: 'flex-start' } }>
					<Button type="submit" color="primary" sx={ { ...rounded } }>Enter</Button>
				</Box>
			</form>
		</Box>
	);
};

export default Login;
