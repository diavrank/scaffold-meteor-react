import React, { useState } from 'react';
import { Box, Button, Icon } from '@mui/material';

const VerifyAccount = () => {
	const [loading, setLoading] = useState(false);
	const [status, setStatus] = useState(false);
	const [message, setMessage] = useState({
		message: '',
		description: ''
	});

	return (
		<Box textAlign="center">
			{ loading ?
				<h3>Loading. . .</h3> :
				<Box>
					<Icon sx={ { fontSize: 120 } } color={ status ? 'success' : 'error' }>
						{ status ? 'check_circle' : 'block' }
					</Icon>
					<h3>
						{ message.message }
						<small>{ message.description }</small>
					</h3>
					<Button color="primary">Return to login</Button>
				</Box> }
		</Box>
	);
};

export default VerifyAccount;
