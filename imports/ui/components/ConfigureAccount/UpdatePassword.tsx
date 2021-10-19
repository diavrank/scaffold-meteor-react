import React, { Fragment, useState } from 'react';
import {
	Button,
	Card,
	CardActions,
	CardContent,
	CardHeader,
	IconButton,
	InputAdornment,
	TextField
} from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { rounded } from '/imports/ui/directives/buttonStyles';

interface UserPassword {
	old: string;
	new: string;
	confirmPassword: string;
}

interface ShowPassword {
	old: boolean;
	new: boolean;
	confirm: boolean;
}

const UpdatePassword = () => {

	const [user, setUser] = useState<UserPassword>({
		old: '',
		new: '',
		confirmPassword: ''
	});

	const [showPassword, setShowPassword] = useState<ShowPassword>({
		old: false,
		new: false,
		confirm: false
	});

	const updatePassword = () => {

	};

	const handleUserChange = (prop: keyof UserPassword) => (event: React.ChangeEvent<HTMLInputElement>) => {
		setUser({ ...user, [prop]: event.target.value });
	};

	return (
		<Fragment>
			<form onSubmit={ updatePassword }>
				<Card>
					<CardHeader title="CHANGE PASSWORD" titleTypographyProps={ { variant: 'subtitle2' } }/>
					<CardContent>
						<TextField type={ !showPassword.old ? 'password' : 'text' }
						           label="Current password"
						           name="password"
						           onChange={ handleUserChange('old') }
						           autoComplete="new-password"
						           InputProps={ {
							           endAdornment:
								           <InputAdornment position="end">
									           <IconButton tabIndex={ -1 }
									                       aria-label="toggle password visibility"
									                       onClick={ () => {
										                       setShowPassword({
											                       ...showPassword,
											                       old: !showPassword.old
										                       });
									                       } }>
										           { !showPassword.old ? <Visibility/> : <VisibilityOff/> }
									           </IconButton>
								           </InputAdornment>
						           } }
						>
						</TextField>
						<TextField type={ !showPassword.new ? 'password' : 'text' }
						           label="New password"
						           name="password"
						           onChange={ handleUserChange('new') }
						           autoComplete="new-password"
						           InputProps={ {
							           endAdornment:
								           <InputAdornment position="end">
									           <IconButton tabIndex={ -1 }
									                       aria-label="toggle password visibility"
									                       onClick={ () => {
										                       setShowPassword({
											                       ...showPassword,
											                       new: !showPassword.new
										                       });
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
									           <IconButton tabIndex={ -1 }
									                       aria-label="toggle password visibility"
									                       onClick={ () => {
										                       setShowPassword({
											                       ...showPassword,
											                       confirm: !showPassword.confirm
										                       });
									                       } }>
										           { !showPassword.confirm ? <Visibility/> : <VisibilityOff/> }
									           </IconButton>
								           </InputAdornment>
						           } }
						>
						</TextField>
					</CardContent>
					<CardActions sx={ { display: 'flex', justifyContent: 'center' } }>
						<Button type="submit" color="primary" sx={ { ...rounded } }>Change</Button>
					</CardActions>
				</Card>
			</form>
		</Fragment>
	);
};

export default UpdatePassword;
