import React, { Fragment, useState } from 'react';
import { Box, Button, IconButton, InputAdornment, TextField } from '@mui/material';
import { rounded } from '/imports/ui/directives/buttonStyles';
import { Visibility, VisibilityOff } from '@mui/icons-material';

interface UserPassword {
	password: string;
	confirmPassword: string;
}

interface ShowPassword {
	new: boolean;
	confirm: boolean;
}

const SetInitialPassword = () => {

	const [user, setUser] = useState<UserPassword>({
		password: '',
		confirmPassword: ''
	});

	const [showPassword, setShowPassword] = useState<ShowPassword>({
		new: false,
		confirm: false
	});

	const handleUserChange = (prop: keyof UserPassword) => (event: React.ChangeEvent<HTMLInputElement>) => {
		setUser({ ...user, [prop]: event.target.value });
	};

	const setPassword = (e: any) => {
		e.preventDefault();
		console.log(user);
	};

	return (
		<Fragment>
			<Box sx={ { typography: 'h6' } }>Set initial password</Box>
			<form onSubmit={ setPassword }>
				<TextField type={ !showPassword.new ? 'password' : 'text' }
				           label="New password"
				           name="password"
				           onChange={ handleUserChange('password') }
				           autoComplete="new-password"
				           InputProps={ {
					           endAdornment:
						           <InputAdornment position="end">
							           <IconButton
								           aria-label="toggle password visibility"
								           onClick={ () => {
									           setShowPassword({ ...showPassword, new: !showPassword.new });
								           } }>
								           { !showPassword.new ? <Visibility/> : <VisibilityOff/> }
							           </IconButton>
						           </InputAdornment>
				           } }
				>
				</TextField>

				<TextField type={ !showPassword.confirm ? 'password' : 'text' }
				           label="Confirm password"
				           name="password_confirmation"
				           onChange={ handleUserChange('confirmPassword') }
				           autoComplete="confirm-password"
				           InputProps={ {
					           endAdornment:
						           <InputAdornment position="end">
							           <IconButton
								           aria-label="toggle password visibility"
								           onClick={ () => {
									           setShowPassword({ ...showPassword, confirm: !showPassword.confirm });
								           } }>
								           { !showPassword.confirm ? <Visibility/> : <VisibilityOff/> }
							           </IconButton>
						           </InputAdornment>
				           } }
				>
				</TextField>

				<Box sx={ { display: 'flex', justifyContent: 'flex-start', mt: 2 } }>
					<Button type="submit" color="primary" sx={ { ...rounded } }>Send</Button>
				</Box>
			</form>
		</Fragment>
	);
};

export default SetInitialPassword;
