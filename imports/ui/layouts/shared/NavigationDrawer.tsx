import React from 'react';
import {
	Avatar,
	Box,
	CssBaseline,
	Drawer, Icon,
	List,
	ListItem, ListItemAvatar, ListItemButton, ListItemIcon, ListItemText
} from '@mui/material';
import FooterView from '/imports/ui/layouts/shared/FooterView';

const DRAWER_WIDTH = 256;

interface Props {
	/**
	 * Injected by the documentation to work in an iframe.
	 * You won't need it on your project.
	 */
	window?: () => Window;
}

const NavigationDrawer = (props: Props) => {
	const { window } = props;
	const [mobileOpen, setMobileOpen] = React.useState(false);

	const [options, setOptions] = React.useState<Array<any>>([]);
	const [optionSelected, setOptionSelected] = React.useState(0);

	const handleDrawerToggle = () => {
		setMobileOpen(!mobileOpen);
	};

	const handleListItemClick = (_event: React.MouseEvent<HTMLDivElement, MouseEvent>, index: number) => {
		setOptionSelected(index);
	};

	React.useEffect(() => {
		setOptions([
			{
				icon: 'group',
				title: 'Users',
				description: null,
				permission: 'users-view',
				namePath: 'home.users'
			},
			{
				icon: 'key',
				title: 'Profiles',
				description: null,
				permission: 'profiles-view',
				namePath: 'home.profiles'
			}
		]);
	}, []);

	const drawerItems = (
		<div>
			<List dense={ true } sx={ { py: 0 } }>
				{ options.map((option, index: number) => (
					<ListItemButton  key={ option.title } selected={ optionSelected === index }
					          onClick={ (event) => handleListItemClick(event, index) }
					          sx={ {
						          ':hover': { backgroundColor: 'rgba(255, 255, 255, 0.08)' },
						          '&.Mui-selected': { backgroundColor: 'rgba(255, 255, 255, 0.24) !important' }
					          } }>
						<ListItemIcon>
							<Icon sx={ { color: 'white' } }>{ option.icon }</Icon>
						</ListItemIcon>
						<ListItemText sx={ { color: 'white' } } primary={ option.title }/>
					</ListItemButton>
				)) }
			</List>
			<FooterView/>
		</div>
	);

	const brand = (
		<List dense={ true } sx={ { py: 0 } }>
			<ListItem sx={ { p: 5, textAlign: 'center' } }>
				<ListItemAvatar>
					<Avatar alt="METEOR" src="/img/meteor-vue.png"/>
				</ListItemAvatar>
				<ListItemText sx={ { color: 'white' } }>Theory SwE</ListItemText>
			</ListItem>
		</List>
	);

	const container = window !== undefined ? () => window().document.body : undefined;

	return (
		<Box sx={ { display: 'flex' } }>
			<CssBaseline/>
			<Box
				component="nav"
				sx={ { width: { sm: DRAWER_WIDTH }, flexShrink: { sm: 0 } } }
				aria-label="mailbox folders"
			>
				{/* The implementation can be swapped with js to avoid SEO duplication of links. */ }
				<Drawer
					variant="temporary"
					container={ container }
					open={ mobileOpen }
					sx={ {
						display: { xs: 'block', sm: 'none' },
						'& .MuiDrawer-paper': { boxSizing: 'border-box', width: DRAWER_WIDTH }
					} }
					onClose={ handleDrawerToggle }
					ModalProps={ {
						keepMounted: true // Better open performance on mobile.
					} }
				>
					{ brand }
					{ drawerItems }
				</Drawer>
				<Drawer
					variant="permanent"
					sx={ {
						display: { xs: 'none', sm: 'block' },
						'& .MuiDrawer-paper': {
							boxSizing: 'border-box',
							width: DRAWER_WIDTH,
							backgroundImage: 'url(/img/meteorImpact.jpg)',
							position: 'absolute',
							backgroundSize: 'cover',
							backgroundPosition: 'center center',
							'&:before': {
								position: 'absolute',
								width: '100%',
								height: '100%',
								content: '""',
								display: 'block',
								background: 'linear-gradient(to right, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.5))'
							}
						}
					} }
					open
				>
					{ brand }
					{ drawerItems }
				</Drawer>
			</Box>
		</Box>
	);
};

export default NavigationDrawer;
