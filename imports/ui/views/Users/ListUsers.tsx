import React, { Fragment } from 'react';
import {
	Box,
	Container,
	Fab,
	Paper,
	Tooltip, Typography
} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import router from '/imports/ui/router';
import { DataGrid, GridColDef, GridColumnHeaderParams } from '@mui/x-data-grid';
import { Close, Edit } from '@mui/icons-material';

const columns: GridColDef[] = [
	{
		field: 'profile.path',
		headerName: 'Image',
		renderHeader: (_params: GridColumnHeaderParams) => (
			<Typography fontWeight="light">Image</Typography>
		),
		renderCell: ({ row }) => {
			return <strong>{ row.profile.path || 'N/A' }</strong>;
		},
		sortable: false
	},
	{
		field: 'status.online',
		headerName: 'Online',
		renderHeader: (_params: GridColumnHeaderParams) => (
			<Typography fontWeight="light">Online</Typography>
		),
		renderCell: ({ row }) => (
			<Typography>{ row.status.online ? 'Online' : 'Offline' }</Typography>
		),
		sortable: true
	},
	{
		field: 'profile.name',
		headerName: 'Full name',
		renderHeader: (_params: GridColumnHeaderParams) => (
			<Typography fontWeight="light">Full name</Typography>
		),
		renderCell: ({ row }) => (
			<Typography>{ row.profile.name }</Typography>
		),
		sortable: true
	},
	{
		field: 'username',
		headerName: 'Username',
		renderHeader: (_params: GridColumnHeaderParams) => (
			<Typography fontWeight="light">Username</Typography>
		),
		sortable: true
	},
	{
		field: 'emails',
		headerName: 'Email',
		renderHeader: (_params: GridColumnHeaderParams) => (
			<Typography fontWeight="light">Email</Typography>
		),
		renderCell: (params) => (
			<Typography>Email</Typography>
		),
		sortable: true
	},
	{
		field: 'action',
		headerName: 'Options',
		renderHeader: (_params: GridColumnHeaderParams) => (
			<Typography fontWeight="light">Options</Typography>
		),
		sortable: false,
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
	{
		id: 1,
		status: { online: true },
		profile: { name: 'Bruce Banner' },
		username: 'hulk',
		emails: [{ address: 'hulk@correo.com', verified: true }]
	},
	{
		id: 2,
		status: { online: false },
		profile: { name: 'Steve Rogers' },
		username: 'captain',
		emails: [{ address: 'captain@correo.com', verified: true }]
	},
	{
		id: 3,
		status: { online: true },
		profile: { name: 'Tony Stark' },
		username: 'ironman',
		emails: [{ address: 'iron@correo.com', verified: true }]
	}
];

const ListUsers = () => {
	const [pageSize, setPageSize] = React.useState<number>(10);
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
							<Fab color="primary" aria-label="add" onClick={ () => router.push('[home.users.create]') }>
								<AddIcon/>
							</Fab>
						</Tooltip>
					</Box>
				</Box>
				<Paper elevation={ 1 }
				       sx={ { height: 300, width: '100%', p: '25px', backgroundColor: 'white', borderRadius: '10px' } }>
					<DataGrid
						rows={ rows }
						columns={ columns }
						pageSize={ pageSize }
						onPageSizeChange={ (newPageSize) => setPageSize(newPageSize) }
						rowsPerPageOptions={ [10, 25, 50, 100] }
					/>
				</Paper>
			</Container>
		</Fragment>
	);
};

export default ListUsers;
