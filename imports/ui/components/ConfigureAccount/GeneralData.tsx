import React, { Fragment } from 'react';
import { Box, Button, Card, CardContent, CardHeader, Grid, TextField } from '@mui/material';
import { rounded } from '/imports/ui/directives/buttonStyles';

const GeneralData = () => {

	const saveUser = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
	};

	return (
		<Fragment>
			<form onSubmit={ saveUser }>
				<Card>
					<CardHeader title="GENERAL DATA" titleTypographyProps={ { variant: 'subtitle2' } }/>
					<Grid container>
						<Grid item sm={ 12 } md={ 3 } lg={ 3 }
						      sx={ { pl: theme => `${ theme.spacing(10) } !important` } }>
							<img src="/img/user.png" alt="Use image" width="100px"/>
							<Button color="primary" sx={ { mb: 5, ...rounded } } component="label">
								Change
								<input type="file" hidden/>
							</Button>
						</Grid>
						<Grid item sm={ 12 } md={ 9 } lg={ 9 }>
							<CardContent>
								<TextField name="name" label="Full name"/>
								<TextField name="username" label="Username"/>
								<TextField name="email" label="Email"/>
								<Box sx={ { display: 'flex', justifyContent: 'center' } }>
									<Button type="submit" color="primary" sx={ { ...rounded } }>
										Save
									</Button>
								</Box>
							</CardContent>
						</Grid>
					</Grid>
				</Card>
			</form>
		</Fragment>
	);
};

export default GeneralData;
