import React from 'react';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { Typography, Grid } from '@material-ui/core';

import TopApp from './components/TopBar'
import Header from './components/Header';
import CustomDivider from './components/customDivider';
import SkillsArray from './components/SkillsArray';
import Footer from './components/Footer';

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

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    paragraph: {
      margin: theme.spacing(2)
    },
    spacing: {
      marginBottom: theme.spacing(2)
    }
  }),
);

const App: React.FC = () => {
  const classes = useStyles();

  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <TopApp />
        <Header />
        <Grid
          container
          direction="column"
          justify="center"
          alignItems="center"
        > 
          <Grid item className={classes.spacing}>
            <Typography>
              ABOUT ME
            </Typography>
          </Grid>
          <Grid item className={classes.spacing}>
            <CustomDivider color="black"/>
          </Grid>
          <Grid item className={classes.paragraph}>
            <Typography align="center" paragraph>
              Hi I’m Nicolas. I am a Developer who specialize in web & web apps development.
            </Typography>
            <Typography align="center" paragraph>
              I have professional experience working with PHP, basic javascript, css and SQL on environments using dockerized services and GIT.
            </Typography>
            <Typography align="center" paragraph>
              Since I enjoy learning about new development paradigm I am also self taught in a variety of other technologies like Typescript, React, mongoDB or Jenkins among others.
            </Typography>
            <Typography align="center" paragraph>
              If I’m not coding I’m making music or building my own guitar effect pedals.
            </Typography>
          </Grid>
          <Grid item className={classes.spacing}>
            <Typography>
              SKILLS
            </Typography>
          </Grid>
          <Grid item className={classes.spacing}>
            <CustomDivider color="black"/>
          </Grid>
          <Grid item className={classes.spacing}>
            <SkillsArray/>
          </Grid>
        </Grid>
        <Footer/>
      </div>
    </ThemeProvider>
  );
}

export default App;
