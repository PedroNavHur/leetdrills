import { Roboto } from 'next/font/google';
import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';

export const roboto = Roboto({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
  fallback: ['Helvetica', 'Arial', 'sans-serif'],
});

// Create a theme instance.
const theme = createTheme({
  palette: {
    background: {
      default: '#f2f4ff',
    },
    primary: {
      main: '#2a9d8f',
    },
    secondary: {
      main: '#264653',
    },
    error: {
      main: red.A400,
    },
  },
  shape: {
    borderRadius: 6,
  },
  typography: {
    fontFamily: roboto.style.fontFamily,
  },
  components: {
    MuiTypography: {
      styleOverrides: {
        h3: {
          fontSize: '0.938rem',
          fontWeight: 700,
          color: 'black',
          ":hover":{
            color: '#2a9d8f',
          }
        },
        h4: {
          fontSize: '0.875rem',
          fontWeight: 700,
        },
        subtitle1: {
          fontSize: '0.813rem',
          color: 'rgb(123, 142, 142)',
        }

      }
    },
    MuiCard: {
      defaultProps: {
        raised: true,
      },
      styleOverrides: {
        root: {
          boxShadow: 'rgba(0, 0, 0, 0.3) 5px 6px 25px -16px'
        }
      }
    }
  }
});

export default theme;
