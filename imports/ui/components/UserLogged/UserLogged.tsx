import React from 'react';
import { Avatar, IconButton, Menu, MenuItem } from '@mui/material';
import router from '/imports/ui/router';

const UserLogged = () => {
	const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
	const open = Boolean(anchorEl);
	const handleClick = (event: React.MouseEvent<HTMLElement>) => {
		setAnchorEl(event.currentTarget);
	};
	const handleClose = () => {
		setAnchorEl(null);
	};
	const closeSession = () => {
		router.push('[login]');
	};

	return (
		<React.Fragment>
			<IconButton onClick={ handleClick } size="small" sx={ { ml: 2 } }>
				<Avatar sx={ { width: 32, height: 32 } }>M</Avatar>
			</IconButton>
			<Menu
				anchorEl={ anchorEl }
				open={ open }
				onClose={ handleClose }
				onClick={ handleClose }
				PaperProps={ {
					elevation: 0,
					sx: {
						overflow: 'visible',
						filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
						mt: 1.5,
						'& .MuiAvatar-root': {
							width: 32,
							height: 32,
							ml: -0.5,
							mr: 1
						},
						'&:before': {
							content: '""',
							display: 'block',
							position: 'absolute',
							top: 0,
							right: 14,
							width: 10,
							height: 10,
							bgcolor: 'background.paper',
							transform: 'translateY(-50%) rotate(45deg)',
							zIndex: 0
						}
					}
				} }
				transformOrigin={ { horizontal: 'right', vertical: 'top' } }
				anchorOrigin={ { horizontal: 'right', vertical: 'bottom' } }
			>
				<MenuItem onClick={ () => router.push('[home.account]') }>
					Account
				</MenuItem>
				<MenuItem onClick={ closeSession }>
					Logout
				</MenuItem>
			</Menu>

		</React.Fragment>
	);
};

export default UserLogged;
