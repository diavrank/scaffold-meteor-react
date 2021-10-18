import React from 'react';
import { Container, Grid, Typography } from '@mui/material';
import GeneralData from '/imports/ui/components/ConfigureAccount/GeneralData';
import UpdatePassword from '/imports/ui/components/ConfigureAccount/UpdatePassword';

const ConfigureAccount = () => {
	return (
		<Container>
			<Grid container>
				<Grid container item>
					<Grid item>
						<Typography>Configure account</Typography>
					</Grid>
				</Grid>
				<Grid container item>
					<Grid item xs={ 12 } sm={ 6 } md={ 6 }>
						<GeneralData/>
					</Grid>
					<Grid item xs={ 12 } sm={ 6 } md={ 6 }>
						<UpdatePassword/>
					</Grid>
				</Grid>
			</Grid>
		</Container>
	);
};

export default ConfigureAccount;
