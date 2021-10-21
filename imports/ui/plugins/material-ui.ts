import { createTheme } from '@mui/material/styles';
import { esES } from '@mui/material/locale';

declare module '@mui/material/styles' {

	interface Palette {
		accent: Palette['primary'];
	}

	interface PaletteOptions {
		accent: PaletteOptions['primary'];
	}
}

let theme = createTheme({
	palette: {
		primary: {
			main: '#01697d'
		},
		secondary: {
			main: '#002744'
		},
		accent: {
			main: '#8c191d'
		},
		error: {
			main: '#d64143'
		},
		info: {
			main: '#5bc0de'
		},
		success: {
			main: '#5cb85c'
		},
		warning: {
			main: '#f0ad4e'
		}
	},
	breakpoints: {
		values: {
			xs: 0,
			sm: 600,
			md: 960,
			lg: 1264,
			xl: 1904
		}
	},
	components: {
		MuiTextField: {
			defaultProps: {
				variant: 'standard',
				fullWidth: true,
				margin: 'normal'
			}
		},
		MuiButton: {
			defaultProps: {
				variant: 'contained',
				color: 'inherit'
			},
			styleOverrides: {
				containedInherit: {
					backgroundColor: '#fff'
				}
			}
		},
		MuiFormControl: {
			defaultProps: {
				variant: 'standard',
				fullWidth: true,
				margin: 'normal'
			}
		},
		MuiGrid: {
			defaultProps: {
				spacing: 6
			}
		},
		MuiDataGrid: {
			styleOverrides: {
				root: {
					border: 'none'
				}
			}
		}
	},
	spacing: 4 //Vuetify v2.5 spacing of 4px
}, esES);

export default createTheme(theme, {
	components: {
		MuiAppBar: {
			defaultProps: {
				elevation: 0
			}
		}
	}
});
