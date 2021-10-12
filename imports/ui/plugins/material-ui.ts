import { createTheme } from '@mui/material/styles';

declare module '@mui/material/styles' {

	interface Palette {
		accent: Palette['primary'];
	}

	interface PaletteOptions {
		accent: PaletteOptions['primary'];
	}
}

declare module '@mui/material/Button' {
	interface ButtonPropsVariantOverrides {
		rounded: true;
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
		}
	},
	spacing: 4 //Vuetify v2.5 spacing of 4px
});

export default createTheme(theme, {
	components: {
		MuiAppBar: {
			defaultProps: {
				elevation: 0
			}
		}
	}
});
