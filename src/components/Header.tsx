import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { Grid, Avatar } from '@material-ui/core';
import CustomDivider from './customDivider';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      backgroundColor: '#386FA4',
      color: 'white',
      paddingTop: theme.spacing(4),
      paddingBottom: theme.spacing(1),
      marginBottom: theme.spacing(2)
    },
    avatar: {
      width: theme.spacing(16),
      height: theme.spacing(16),
    },
    spacing: {
      marginBottom: theme.spacing(2)
    }
  }),
);

function Header() {
  const classes = useStyles();

  return(
    <Grid container
      direction="column"
      justify="center"
      alignItems="center"
      className={classes.root}>
      <Grid item className={classes.spacing}>
        <Avatar alt="Nicolas JOULIN" src="/static/images/avatar.webp" className={classes.avatar}/>
      </Grid>
      <Grid item className={classes.spacing}>
        <Typography variant="h5">
          Nicolas JOULIN
        </Typography>
      </Grid>
      <Grid item className={classes.spacing}>
        <CustomDivider color="white"/>
      </Grid>
      <Grid item className={classes.spacing}>
        <Typography>
          Full-stack Developer
        </Typography>
      </Grid>

    </Grid>
  );

}

export default Header;