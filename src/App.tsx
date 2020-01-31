import React from 'react';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { Typography, Grid } from '@material-ui/core';

import TopApp from './components/TopBar';
import Header from './components/Header';
import CustomDivider from './components/customDivider';
import SkillsArray from './components/SkillsArray';
import Footer from './components/Footer';

import { ContactContainer } from './containers/ContactContainer';

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
      marginBottom: theme.spacing(2),
    },
    divider: {
      marginBottom: theme.spacing(2),
      alignSelf: "center",
    },
    headerText: {
      textAlign: "center",
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
          alignItems="stretch"
        > 
          <Grid item className={classes.spacing}>
            <Typography className={classes.headerText}>
              ABOUT ME
            </Typography>
          </Grid>
          <Grid item className={classes.divider}>
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
            <Typography  className={classes.headerText}>
              SKILLS
            </Typography>
          </Grid>
          <Grid item className={classes.divider}>
            <CustomDivider color="black"/>
          </Grid>
          <Grid item className={classes.spacing}>
            <SkillsArray/>
          </Grid>
          <Grid item className={classes.spacing}>
            <Typography  className={classes.headerText}>
              CONTACT ME
            </Typography>
          </Grid>
          <Grid item className={classes.divider}>
            <CustomDivider color="black"/>
          </Grid>
          <Grid item className={classes.spacing}>
            <ContactContainer />
          </Grid>
        </Grid>
        <Footer/>
      </div>
    </ThemeProvider >
  );
}

export default App;
