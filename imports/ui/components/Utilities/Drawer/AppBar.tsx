import { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar/AppBar';
import { styled } from '@mui/material/styles';
import MuiAppBar from '@mui/material/AppBar';
import { DRAWER_WIDTH } from '/imports/ui/layouts/shared/NavigationDrawer';

interface AppBarProps extends MuiAppBarProps {
	open?: boolean;
}

export const AppBar = styled(MuiAppBar, {
	shouldForwardProp: (prop) => prop !== 'open'
})<AppBarProps>(({ theme, open }) => ({
	transition: theme.transitions.create(['margin', 'width'], {
		easing: theme.transitions.easing.sharp,
		duration: theme.transitions.duration.leavingScreen
	}),
	...(open && {
		[theme.breakpoints.between('xs', 'sm')]: {
			width: '100%'
		},
		[theme.breakpoints.up('md')]: {
			width: `calc(100% - ${ DRAWER_WIDTH }px)`
		},
		// width: theme.breakpoints.between('xs', 'sm') ? '100%' : `calc(100% - ${ DRAWER_WIDTH }px)`,
		marginLeft: `${ DRAWER_WIDTH }px`,
		transition: theme.transitions.create(['margin', 'width'], {
			easing: theme.transitions.easing.easeOut,
			duration: theme.transitions.duration.enteringScreen
		})
	})
}));
