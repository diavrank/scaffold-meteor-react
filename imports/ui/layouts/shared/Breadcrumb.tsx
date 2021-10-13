import React from 'react';
import { Breadcrumbs, Link, Typography } from '@mui/material';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';

const Breadcrumb = () => {
	return (
		<Breadcrumbs separator={ <NavigateNextIcon fontSize="small"/> }
		             aria-label="breadcrumb">
			<Link underline="hover" color="inherit" href="/">
				MUI
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
