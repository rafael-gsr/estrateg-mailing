import { createTheme } from '@mui/material'

const muiTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#9eb885ff',
      light: '#8faf6cff',
      dark: '#6b864eff',
      contrastText: '#161616',
    },

    secondary: {
      main: '#324b19',
      light: '#a6bb90',
      dark: '#78965a',
      contrastText: '#ffffff',
    },

    background: {
      default: '#161616',
    },
  },

  typography: {
    fontFamily: 'Figtree',

    fontSize: 16,

    fontWeightLight: 300,
    fontWeightBold: 800,
    fontWeightMedium: 600,
    fontWeightRegular: 500,

    h1: {
      fontFamily: 'Figtree',
      fontWeight: 700,
    },
    h2: {
      fontFamily: 'Figtree',
      fontWeight: 700,
    },
    h3: {
      fontFamily: 'Figtree',
      fontWeight: 700,
    },
    h4: {
      fontFamily: 'Figtree',
      fontWeight: 700,
    },
    h5: {
      fontFamily: 'Figtree',
      fontWeight: 700,
    },
    h6: {
      fontFamily: 'Figtree',
      fontWeight: 700,
    },
  },

  spacing: 8,

  shape: {
    borderRadius: 16,
  },
})

export default muiTheme
