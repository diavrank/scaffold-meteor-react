import React from 'react';
import {
	Avatar,
	Box,
	CssBaseline,
	Drawer, Icon,
	List,
	ListItem, ListItemAvatar, ListItemIcon, ListItemText
} from '@mui/material';
import { makeStyles } from '@mui/styles';
import FooterView from '/imports/ui/layouts/shared/FooterView';
import styles from '../../assets/sidebarStyle';
import classNames from 'classnames';

const useStyles = makeStyles(styles);
const drawerWidth = 240;

interface Props {
	/**
	 * Injected by the documentation to work in an iframe.
	 * You won't need it on your project.
	 */
	window?: () => Window;
}

const NavigationDrawer = (props: Props) => {
	const { window } = props;
	const classes = useStyles();
	const [mobileOpen, setMobileOpen] = React.useState(false);

	const [options, setOptions] = React.useState<Array<any>>([]);
	const [optionSelected, setOptionSelected] = React.useState(0);

	const handleDrawerToggle = () => {
		setMobileOpen(!mobileOpen);
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
				{ options.map((option) => (
					<ListItem button key={ option.title }>
						<ListItemIcon>
							<Icon>{ option.icon }</Icon>
						</ListItemIcon>
						<ListItemText primary={ option.title }/>
					</ListItem>
				)) }
			</List>
			<FooterView/>
		</div>
	);

	const brand = (
		<List dense={ true } sx={ { py: 0 } }>
			<ListItem sx={ { p: 5, textAlign: 'center' } }>
				<ListItemAvatar>
					<Avatar alt="METEOR" src="/img/meteor-vue.png" sx={ { height: 50 } }/>
				</ListItemAvatar>
				<ListItemText>Theory SwE</ListItemText>
			</ListItem>
		</List>
	);

	const container = window !== undefined ? () => window().document.body : undefined;

	return (
		<Box sx={ { display: 'flex' } }>
			<CssBaseline/>
			<Box
				component="nav"
				sx={ { width: { sm: drawerWidth }, flexShrink: { sm: 0 } } }
				aria-label="mailbox folders"
			>
				{/* The implementation can be swapped with js to avoid SEO duplication of links. */ }
				<Drawer
					variant="temporary"
					container={ container }
					open={ mobileOpen }
					sx={ {
						display: { xs: 'block', sm: 'none' },
						'& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth }
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
							width: drawerWidth
						}
					} }
					classes={ {
						paper: classNames(classes.drawerPaper, {
							[classes.drawerPaperRTL]: false
						})
					} }
					open
				>
					<div className={ classes.sidebarWrapper }>
						{ brand }
						{ drawerItems }
					</div>
					<div className={ classes.background }
					     style={ { backgroundImage: 'url(/img/meteorImpact.jpg)' } }/>
				</Drawer>
			</Box>
		</Box>
	);
};

export default NavigationDrawer;
