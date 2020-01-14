import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
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
      marginLeft: theme.spacing(4),
    },
    title: {
      flexGrow: 1,
    },
  }),
);

function TopBar() {
  const classes = useStyles();
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up('sm'));

  if(matches) {
    return (
      <div className={classes.root}>
        <AppBar position="static" color="primary">
          <Toolbar>
            <Typography variant="h5" className={classes.title}>
              niconico.io
            </Typography>
            <div>
              <Button color="inherit" className={classes.menuButton}>ABOUT ME</Button>
              <Button color="inherit" className={classes.menuButton}>SKILLS</Button>
              <Button color="inherit" className={classes.menuButton}>CONTACT</Button>
            </div>
          </Toolbar>
        </AppBar>
      </div>
    );
  } else {
    return (
      <div className={classes.root}>
        <AppBar position="static" color="primary">
          <Toolbar>
            <Typography variant="h5" className={classes.title}>
              niconico.io
            </Typography>
            <IconButton edge="start" color="inherit" aria-label="menu">
              <MenuIcon fontSize="large"/>
            </IconButton>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

export default TopBar;