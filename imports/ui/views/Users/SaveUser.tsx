import React from 'react';
import {
	Box,
	Button,
	Container,
	FormControl,
	Grid,
	Icon,
	InputLabel,
	MenuItem,
	Paper,
	Select, SelectChangeEvent,
	TextField
} from '@mui/material';
import { rounded } from '/imports/ui/directives/buttonStyles';
import router from '/imports/ui/router';

const SaveUser = () => {

	const [age, setAge] = React.useState('');

	const handleChange = (event: SelectChangeEvent) => {
		setAge(event.target.value);
	};

	const saveUser = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();
	};

	return (
		<Container>
			<Grid container>
				<Grid container item justifyContent="center">
					<Grid item sx={ { display: 'flex' } } xs={ 12 } sm={ 9 } md={ 8 } lg={ 6 } xl={ 4 }>
						<Button variant="text" onClick={ () => router.back() }>
							<Icon>chevron_left</Icon>
						</Button>
						<Box sx={ { typography: 'h4', fontWeight: 'light' } }>{ 'Save User' }</Box>
					</Grid>
					<Grid item xs={ 12 } sm={ 2 } md={ 2 } lg={ 2 } xl={ 1 }>
						<Button fullWidth type="submit" color="primary">
							{ 'Save' }
						</Button>
					</Grid>
				</Grid>
				<Grid container item justifyContent="center" alignItems="center">
					<Grid item xs={ 12 } sm={ 12 } md={ 10 } lg={ 8 } xl={ 5 }>
						<Paper elevation={ 1 } sx={ { p: '25px', backgroundColor: 'white', borderRadius: '10px' } }>
							<form onSubmit={ saveUser }>
								<Grid container>
									<Grid item sm={ 4 } md={ 4 }>
										<Box sx={ { display: 'flex', flexDirection: 'column', alignItems: 'center' } }>
											<img src="/img/user.png" alt="Use image" width="100px"/>
											<Button color="primary" sx={ { mb: 5, mt: 5, width: '100%', ...rounded } }
											        component="label">
												Upload File
												<input type="file" hidden/>
											</Button>
										</Box>
									</Grid>
									<Grid item sm={ 8 } md={ 8 }>
										<TextField name="name" label="Full name"/>
										<FormControl>
											<InputLabel id="demo-simple-select-standard-label">Age</InputLabel>
											<Select
												labelId="demo-simple-select-standard-label"
												id="demo-simple-select-standard"
												value={ age }
												onChange={ handleChange }
												label="Age"
											>
												<MenuItem value={ 10 }>Ten</MenuItem>
												<MenuItem value={ 20 }>Twenty</MenuItem>
												<MenuItem value={ 30 }>Thirty</MenuItem>
											</Select>
										</FormControl>
										<TextField name="username" label="Username"/>
										<TextField name="email" label="Email"/>
									</Grid>
								</Grid>
							</form>
						</Paper>
					</Grid>
				</Grid>
			</Grid>
		</Container>
	);
};

export default SaveUser;
