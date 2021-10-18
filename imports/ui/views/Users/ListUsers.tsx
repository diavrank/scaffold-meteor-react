import React, { Fragment } from 'react';
import {
	Box,
	Container,
	Fab,
	Paper,
	Table,
	TableBody,
	TableCell,
	TableContainer, TableHead, TablePagination,
	TableRow, TableSortLabel,
	Tooltip, Typography
} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import { visuallyHidden } from '@mui/utils';
import { Close, Edit } from '@mui/icons-material';
import router from '/imports/ui/router';

interface Data {
	'profile.path': string;
	'status.online': boolean;
	'profile.name': string;
	'username': string;
	'email': string;
}

function createData(
	profilePath: string,
	statusOnline: boolean,
	profileName: string,
	username: string,
	email: string
): Data {
	return {
		'profile.path': profilePath,
		'status.online': statusOnline,
		'profile.name': profileName,
		'username': username,
		'email': email
	};
}

const rows = [
	createData('Ironman', true, 'Tony Stark', 'ironman', 'ironman@example.com'),
	createData('Captain America', true, 'Steve Rogers', 'captain', 'captain@example.com'),
	createData('Hulk', false, 'Bruce Banner', 'hulk', 'hulk@example.com'),
	createData('Thor', false, 'Thor Odinson', 'thor', 'thor@example.com')
];

function descendingComparator<T>(a: T, b: T, orderBy: keyof T) {
	if (b[orderBy] < a[orderBy]) {
		return -1;
	}
	if (b[orderBy] > a[orderBy]) {
		return 1;
	}
	return 0;
}

type Order = 'asc' | 'desc';

function getComparator<Key extends keyof any>(
	order: Order,
	orderBy: Key
): (
	a: { [key in Key]: number | string | boolean },
	b: { [key in Key]: number | string | boolean }
) => number {
	return order === 'desc'
		? (a, b) => descendingComparator(a, b, orderBy)
		: (a, b) => -descendingComparator(a, b, orderBy);
}

// This method is created for cross-browser compatibility, if you don't
// need to support IE11, you can use Array.prototype.sort() directly
function stableSort<T>(array: readonly T[], comparator: (a: T, b: T) => number) {
	const stabilizedThis = array.map((el, index) => [el, index] as [T, number]);
	stabilizedThis.sort((a, b) => {
		const order = comparator(a[0], b[0]);
		if (order !== 0) {
			return order;
		}
		return a[1] - b[1];
	});
	return stabilizedThis.map((el) => el[0]);
}

interface HeadCell {
	id: keyof Data;
	label: string;
}

const headCells: readonly HeadCell[] = [
	{
		id: 'profile.path',
		label: 'Image'
	},
	{
		id: 'status.online',
		label: 'Online'
	},
	{
		id: 'profile.name',
		label: 'Full name'
	},
	{
		id: 'username',
		label: 'Username'
	},
	{
		id: 'email',
		label: 'Email'
	}
];

interface EnhancedTableProps {
	onRequestSort: (event: React.MouseEvent<unknown>, property: keyof Data) => void;
	order: Order;
	orderBy: string;
}

function EnhancedTableHead(props: EnhancedTableProps) {
	const { order, orderBy, onRequestSort } =
		props;
	const createSortHandler =
		(property: keyof Data) => (event: React.MouseEvent<unknown>) => {
			onRequestSort(event, property);
		};

	return (
		<TableHead>
			<TableRow>
				{ headCells.map((headCell) => (
					<TableCell
						key={ headCell.id }
						sortDirection={ orderBy === headCell.id ? order : false }>
						<TableSortLabel
							active={ orderBy === headCell.id }
							direction={ orderBy === headCell.id ? order : 'asc' }
							onClick={ createSortHandler(headCell.id) }
						>
							<Typography fontWeight="light">{ headCell.label }</Typography>
							{ orderBy === headCell.id ? (
								<Box component="span" sx={ visuallyHidden }>
									{ order === 'desc' ? 'sorted descending' : 'sorted ascending' }
								</Box>
							) : null }
						</TableSortLabel>
					</TableCell>
				)) }
				<TableCell sx={ { borderLeft: '1px solid rgba(224, 224, 224, 1)' } }>
					<Typography fontWeight="light">Options</Typography>
				</TableCell>
			</TableRow>
		</TableHead>
	);
}

const ListUsers = () => {
	const [order, setOrder] = React.useState<Order>('asc');
	const [orderBy, setOrderBy] = React.useState<keyof Data>('profile.name');
	const [page, setPage] = React.useState(0);
	const [rowsPerPage, setRowsPerPage] = React.useState(5);

	const handleRequestSort = (
		_event: React.MouseEvent<unknown>,
		property: keyof Data
	) => {
		const isAsc = orderBy === property && order === 'asc';
		setOrder(isAsc ? 'desc' : 'asc');
		setOrderBy(property);
	};

	const handleChangePage = (_event: unknown, newPage: number) => {
		setPage(newPage);
	};

	const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
		setRowsPerPage(parseInt(event.target.value, 10));
		setPage(0);
	};

	// Avoid a layout jump when reaching the last page with empty rows.
	const emptyRows =
		page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;
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
				<Paper elevation={ 1 } sx={ { p: '25px', backgroundColor: 'white', borderRadius: '10px' } }>
					<TableContainer>
						<Table sx={ { minWidth: 750 } } aria-labelledby="Users table" size="medium">
							<EnhancedTableHead order={ order } orderBy={ orderBy } onRequestSort={ handleRequestSort }/>
							<TableBody>
								{/* if you don't need to support IE11, you can replace the `stableSort` call with:
              rows.slice().sort(getComparator(order, orderBy)) */ }
								{ stableSort(rows, getComparator(order, orderBy))
									.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
									.map((row) => {
										return (
											<TableRow hover tabIndex={ -1 } key={ row.username }>
												<TableCell component="th" scope="row">
													{ row['profile.path'] }
												</TableCell>
												<TableCell>{ row['status.online'] ? 'Online' : 'Offline' }</TableCell>
												<TableCell>{ row['profile.name'] }</TableCell>
												<TableCell>{ row['username'] }</TableCell>
												<TableCell>{ row['email'] }</TableCell>
												<TableCell sx={ { borderLeft: '1px solid rgba(224, 224, 224, 1)' } }>
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
												</TableCell>
											</TableRow>
										);
									}) }
								{ emptyRows > 0 && (
									<TableRow style={ { height: 53 * emptyRows } }>
										<TableCell colSpan={ 6 }/>
									</TableRow>
								) }
							</TableBody>
						</Table>
					</TableContainer>
					<TablePagination
						rowsPerPageOptions={ [5, 10, 25, 50] }
						component="div"
						count={ rows.length }
						rowsPerPage={ rowsPerPage }
						page={ page }
						onPageChange={ handleChangePage }
						onRowsPerPageChange={ handleChangeRowsPerPage }
					/>
				</Paper>
			</Container>
		</Fragment>
	);
};

export default ListUsers;
