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
      paddingBottom: theme.spacing(1)
    },
    avatar: {
      width: theme.spacing(16),
      height: theme.spacing(16),
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
      spacing={2}
      className={classes.root}>
      <Grid item>
        <Avatar alt="Nicolas JOULIN" src="/static/images/avatar.png" className={classes.avatar}/>
      </Grid>
      <Grid item>
        <Typography>
          Nicolas JOULIN
        </Typography>
      </Grid>
      <Grid item>
        <CustomDivider/>
      </Grid>
      <Grid item>
        <Typography>
          Full-stack Developer
        </Typography>
      </Grid>

    </Grid>
  );

}

export default Header;