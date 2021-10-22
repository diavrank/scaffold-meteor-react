import React, { Fragment } from 'react';
import { Box, Container, Fab, Grid, Paper, Tooltip, Typography } from '@mui/material';
import router from '/imports/ui/router';
import AddIcon from '@mui/icons-material/Add';
import { DataGrid, GridColDef, GridColumnHeaderParams } from '@mui/x-data-grid';
import { Close, Edit } from '@mui/icons-material';

const columns: GridColDef[] = [
	{
		field: 'description',
		headerName: 'Profile name',
		renderHeader: (_params: GridColumnHeaderParams) => (
			<Typography fontWeight="light">Profile name</Typography>
		),
		sortable: true,
		flex: 1
	},
	{
		field: 'action',
		headerName: 'Options',
		renderHeader: (_params: GridColumnHeaderParams) => (
			<Typography fontWeight="light">Options</Typography>
		),
		sortable: false,
		flex: 0.3,
		minWidth: 100,
		headerAlign: 'center',
		align: 'center',
		renderCell: () => (
			<Fragment>
				<Tooltip title="Edit">
					<Fab size="small" color="primary" aria-label="edit"
					     onClick={ () => router.push('[home.users.edit]') }>
						<Edit/>
					</Fab>
				</Tooltip>
				<Tooltip title="Remove">
					<Fab size="small"
					     disableRipple={ true }
					     sx={ {
						     color: 'white',
						     backgroundColor: (theme) => theme.palette.error.main
					     } }
					     aria-label="remove">
						<Close/>
					</Fab>
				</Tooltip>
			</Fragment>
		)
	}
];

const rows = [
	{ id: 1, name: 'admin', description: 'Administrator' },
	{ id: 2, name: 'reader', description: 'Reader' },
	{ id: 3, name: 'writer', description: 'Writer' }
];

const ListProfiles = () => {
	const [pageSize, setPageSize] = React.useState<number>(10);

	return (
		<Fragment>
			<Container>
				<Grid container>
					<Grid item md={ 3 }/>
					<Grid item xs={ 12 } sm={ 12 } md={ 6 }>
						<Box component="div" sx={ {
							display: 'flex',
							justifyContent: 'space-between',
							alignItems: 'baseline',
							mb: 5
						} }>
							<Box sx={ { typography: 'h4', fontWeight: 'light' } }>Profiles</Box>
							<Box>
								<Tooltip title="Add profile">
									<Fab color="primary" aria-label="add"
									     onClick={ () => router.push('[home.profiles.create]') }>
										<AddIcon/>
									</Fab>
								</Tooltip>
							</Box>
						</Box>
						<Paper elevation={ 1 }
						       sx={ {
							       height: 300, width: '100%', p: '25px', backgroundColor: 'white',
							       borderRadius: '10px'
						       } }>
							<DataGrid
								rows={ rows }
								columns={ columns }
								pageSize={ pageSize }
								onPageSizeChange={ (newPageSize) => setPageSize(newPageSize) }
								rowsPerPageOptions={ [10, 25, 50, 100] }
							/>
						</Paper>
					</Grid>
				</Grid>
			</Container>
		</Fragment>
	);
};

export default ListProfiles;
