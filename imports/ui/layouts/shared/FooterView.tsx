import React from 'react';
import { Box } from '@mui/material';

const FooterView = () => {
	return (
		<Box sx={ {
			position: 'absolute',
			bottom: 0,
			left: 0,
			width: '100%',
			padding: '24px',
			color: '#6f6f6f',
			backgroundColor: 'transparent !important'
		} }>
			<Box sx={ { display: 'flex', flexDirection: 'column', justifyContent: 'center', width: '100%' } }>
				<Box sx={ { typography: 'subtitle2', color: 'white' } }>
					© 2021 By Diavrank
				</Box>
			</Box>
		</Box>
	);
};

export default FooterView;
