import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    buttonContainer: {
      marginRight: theme.spacing(4),
    },
    title: {
      flexGrow: 1,
    },
  }),
);

export default function TopBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static" color="primary">
        <Toolbar>
          <Typography variant="h5" className={classes.title}>
            niconico.io
          </Typography>
          <div className={classes.buttonContainer}>
            <Button color="inherit" className={classes.menuButton}>ABOUT ME</Button>
            <Button color="inherit" className={classes.menuButton}>SKILLS</Button>
            <Button color="inherit" className={classes.menuButton}>CONTACT</Button>
          </div>
          <IconButton edge="start" color="inherit" aria-label="menu">
            <MenuIcon fontSize="large"/>
          </IconButton>
        </Toolbar>
      </AppBar>
    </div>
  );
}