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
      root: {
        transition: "background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms,border 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;",
      },
      textSizeLarge: {
        fontSize: '2em',
      },
      containedPrimary: {
        color: '#fdf9f3',
        '&:hover': {
          backgroundColor: '#087a8d',
        }
      },
      containedSizeLarge: {

      },
      contained: {
        boxShadow: undefined,
        '&:hover': {
          boxShadow: undefined,
        }
      }
    },
    MuiFormLabel: {
      root: {
        fontSize: '1.25rem',
        fontWeight: 100,
      },
    },
    MuiOutlinedInput: {
      root: {
        background: '#efebe5',
      },
      notchedOutline: {
        borderWidth: '0px',
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
  fontSize: '2.5rem',
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
  fontSize: '2.25rem',
  [theme.breakpoints.up('sm')]: {
    fontSize: '3.5rem',
  },
  [theme.breakpoints.up('md')]: {
    fontSize: '4rem',
  },
}

theme.typography.body1 = {
  ...theme.typography.body1,
  fontWeight: 100,
  fontSize:'1.5rem',
  [theme.breakpoints.up('sm')]: {
    fontSize: '1.75rem',
  },
  [theme.breakpoints.up('md')]: {
    fontSize: '2rem',
  },
}

theme.typography.subtitle1 = {
  ...theme.typography.subtitle1,
  fontWeight: 400,
  fontSize:'1.5rem',
  [theme.breakpoints.up('sm')]: {
    fontSize: '1.75rem',
  },
  [theme.breakpoints.up('md')]: {
    fontSize: '2rem',
  },
}

export default theme;