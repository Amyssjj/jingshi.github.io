import { createTheme, responsiveFontSizes } from '@mui/material/styles';

// Create base theme
let theme = createTheme({
  palette: {
    primary: {
      main: '#000000',
      light: '#444444',
      dark: '#000000',
    },
    secondary: {
      main: '#ffffff',
    },
    text: {
      primary: '#000000',
      secondary: '#444444',
      disabled: '#888888',
    },
    background: {
      default: '#ffffff',
      paper: '#ffffff',
    },
  },
  typography: {
    fontFamily: [
      'Poppins',
      'Roboto',
      'sans-serif',
    ].join(','),
    h1: {
      fontFamily: 'Poppins',
      fontWeight: 700,
      fontSize: '3.5rem',
      lineHeight: 1.2,
      '@media (max-width:600px)': {
        fontSize: '2.25rem',
      },
    },
    h2: {
      fontFamily: 'Poppins',
      fontWeight: 500,
      fontSize: '2.5rem',
      '@media (max-width:600px)': {
        fontSize: '2rem',
      },
    },
    h3: {
      fontFamily: 'Poppins',
      fontWeight: 500,
      fontSize: '2rem',
      '@media (max-width:600px)': {
        fontSize: '1.5rem',
      },
    },
    h4: {
      fontFamily: 'Poppins',
      fontWeight: 500,
      fontSize: '1.5rem',
      '@media (max-width:600px)': {
        fontSize: '1.25rem',
      },
    },
    h5: {
      fontFamily: 'Poppins',
      fontWeight: 500,
      fontSize: '1.25rem',
      '@media (max-width:600px)': {
        fontSize: '1.1rem',
      },
    },
    h6: {
      fontFamily: 'Poppins',
      fontWeight: 500,
      fontSize: '1rem',
    },
    body1: {
      fontFamily: 'Roboto, sans-serif',
      fontSize: '1.25rem',
      lineHeight: 1.7,
      '@media (max-width:600px)': {
        fontSize: '1rem',
        lineHeight: 1.6,
      },
    },
    body2: {
      fontFamily: 'Roboto, sans-serif',
      fontSize: '1rem',
      lineHeight: 1.6,
      '@media (max-width:600px)': {
        fontSize: '0.875rem',
      },
    },
    button: {
      fontFamily: 'Poppins',
      fontWeight: 500,
      textTransform: 'none',
    },
  },
  spacing: 8,
  shape: {
    borderRadius: 8,
  },
  components: {
    MuiContainer: {
      styleOverrides: {
        root: {
          maxWidth: '1440px',
          '@media (min-width: 1280px)': {
            paddingLeft: 64,
            paddingRight: 64,
          },
          '@media (max-width: 600px)': {
            paddingLeft: 16,
            paddingRight: 16,
          },
        },
      },
    },
    MuiIconButton: {
      styleOverrides: {
        root: {
          transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
          '&:hover': {
            transform: 'translateY(-4px)',
          },
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          boxShadow: 'none',
        },
      },
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1920,
    },
  },
});

// Apply responsive font sizes
theme = responsiveFontSizes(theme);

export default theme; 