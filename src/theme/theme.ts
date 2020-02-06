import { createMuiTheme } from '@material-ui/core/styles';

let theme = createMuiTheme({
  overrides: {
    MuiAppBar: {
      colorPrimary: {
        backgroundColor: '#fdf9f3',
      }
    },
    MuiToolbar: {
      gutters: {
        paddingLeft: '32px',
          paddingRight: '32px',
        '@media (min-width:600px)': {
          paddingLeft: '64px',
          paddingRight: '64px',
        },
      }
    },
    MuiButton: {
      textSizeLarge: {
        fontSize: '2em',
      }
    }
  },
  palette: {
    primary: {
      dark: '#133C55',
      main: '#133C55',
      light: '#59A5D8',
      contrastText: '#2f272c'
    },
    secondary: {
      main: '#386FA4'
    },
    background: {
      paper: '#efebe5',
      default: '#fdf9f3',
    },
    text: {
      primary: '#2f272c',
      secondary: '#2f272c',
    },
    action: {
      active: '#2f272c'
    }
  },
  typography: {
    fontFamily: [
      "Rubik",
      'sans-serif',
    ].join(','),
  },
});

theme.typography.h1 = {
  ...theme.typography.h1,
  fontSize: '2rem',
  [theme.breakpoints.up('sm')]: {
    fontSize: '4rem',
  },
  [theme.breakpoints.up('md')]: {
    fontSize: '6rem',
  },
}

theme.typography.h2 = {
  ...theme.typography.h2,
  fontWeight: 500,
}

theme.typography.body1 = {
  ...theme.typography.body1,
  fontSize:'2rem'
}

export default theme;