import React from 'react';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

import TopApp from './components/TopBar'
import Header from './components/Header';

const theme = createMuiTheme({
  palette: {
    primary: {
      dark: '#133C55',
      main: '#133C55',
      light: '#59A5D8'
    },
    secondary: {
      main: '#386FA4'
    }
  },
  typography: {
    fontFamily: [
      '"Rubik"',
      'sans-serif',
    ].join(','),
  },
});

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <TopApp />
        <Header />
      </div>
    </ThemeProvider>
  );
}

export default App;
