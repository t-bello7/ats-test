import { createTheme } from '@mui/material/styles';
import Poppins from './assets/fonts/Poppins-Regular.ttf';

const theme = createTheme({
  palette: {
    error: {
        main: 'hsla(0, 100%, 33%, 1)'
    },
    primary: {
      main: 'hsla(175, 100%, 19%, 1)',
    },
    secondary: {
      light: 'hsla(200, 20%, 97%, 1)',
      main: 'hsla(184, 80%, 90%, 1)',
    },
    common: {
      white: '#ffffff',
    //   gray: '#757575',
    },
  },
  typography: {
    fontFamily: [
      'Poppins',
    ].join(','),
  },
  direction: 'ltr',
  mixins: {
    toolbar: {
      minHeight: 56,
      '@media (min-width: 0px) and (orientation: landscape)': {
        minHeight: 48,
      },
      '@media (min-width: 600px)': {
        minHeight: 64,
      },
    },
  },
  zIndex: {
    drawer: 1250,
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: `
        @font-face {
          font-family: 'Poppins';
          font-style: normal;
          src: url(${Poppins}}) format('ttf');
        }
        li {
          list-style-type: none
        }
      `,
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '30px',
        },
      },
    },
  },
});

export default theme;