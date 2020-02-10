import React from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import { CssBaseline } from '@material-ui/core';

import theme from './theme'
import Header from './components/Header';
import About from './components/About';
import Skills from './components/Skills';
import { ContactContainer } from './containers/ContactContainer';
import Footer from './components/Footer';

const App: React.FC = () => {

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline/>
      <div className="app">
        <Header/>
        <About/>
        <Skills/>
        <ContactContainer/>
        <Footer/>
      </div>
    </ThemeProvider >
  );
}

export default App;
