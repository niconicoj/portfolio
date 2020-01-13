import React from 'react';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

import TopApp from './components/TopBar'

const theme = createMuiTheme({
  palette: {
    primary: {
      dark: '#133C55',
      main: '#133C55',
      light: '#59A5D8'
    }
  },
});

const App: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <TopApp />
      </div>
    </ThemeProvider>
  );
}

export default App;
