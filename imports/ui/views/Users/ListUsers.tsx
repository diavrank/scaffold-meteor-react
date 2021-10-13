import React, { Fragment } from 'react';
import { Box, Container, Fab, Tooltip } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';

const ListUsers = () => {
	return (
		<Fragment>
			<Container>
				<Box component="div" sx={ {
					display: 'flex',
					justifyContent: 'space-between',
					alignItems: 'baseline',
					mb: 5
				} }>
					<Box sx={ { typography: 'h4', fontWeight: 'light' } }>Users</Box>
					<Box>
						<Tooltip title="Add user">
							<Fab color="primary" aria-label="add">
								<AddIcon/>
							</Fab>
						</Tooltip>
					</Box>
				</Box>
				<Box component="div" sx={ { p: '25px', backgroundColor: 'white', borderRadius: '10px' } }>

				</Box>
			</Container>
		</Fragment>
	);
};

export default ListUsers;
