import React from 'react';
import { Breadcrumbs, Link, Typography } from '@mui/material';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import router from '/imports/ui/router';

const Breadcrumb = () => {

	const routeTo = () => {
		router.push('[home]');
	};

	return (
		<Breadcrumbs separator={ <NavigateNextIcon fontSize="small"/> }
		             aria-label="breadcrumb">
			<Link underline="hover" color="inherit" onClick={ routeTo }>
				Home
			</Link>
			<Link
				underline="hover"
				color="inherit"
				href="/getting-started/installation/"
			>
				Core
			</Link>
			<Typography color="primary">Breadcrumbs</Typography>
		</Breadcrumbs>
	);
};

export default Breadcrumb;
