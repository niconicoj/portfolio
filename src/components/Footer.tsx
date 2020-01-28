import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { Grid, IconButton } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      backgroundColor: '#434343',
      color: '#999999',
      paddingTop: theme.spacing(1),
      marginTop: theme.spacing(2),
      paddingBottom: theme.spacing(1)
    },
    avatar: {
      width: theme.spacing(16),
      height: theme.spacing(16),
    },
    spacing: {
      marginBottom: theme.spacing(1)
    }
  }),
);

function Footer() {
  const classes = useStyles();

  return(
    <Grid container
      direction="column"
      justify="center"
      alignItems="center"
      className={classes.root}>
      <Grid item className={classes.spacing}>
        <Typography>
          Links
        </Typography>
      </Grid>
      <Grid item className={classes.spacing}>
        <Grid container direction="row" justify="flex-start" alignItems="center">
          <IconButton component="a" href="https://github.com/niconicoj">
            <img src="/static/images/github.webp" height="25" width="25" alt="github"></img>
          </IconButton>
          <IconButton component="a" href="https://www.linkedin.com/in/nicolas-joulin-8b5a92166">
            <img src="/static/images/linkedin.webp" height="25" width="25" alt="linkedin"></img>
          </IconButton>
        </Grid>
      </Grid>
    </Grid>
  );

}

export default Footer;