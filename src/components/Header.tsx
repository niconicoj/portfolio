import React from 'react';
import { 
  Typography, 
  Box,
  AppBar,
  Toolbar, 
  Button,
  makeStyles,
  Theme,
  createStyles,
  useTheme,
  useMediaQuery,
  IconButton,
  Popper,
  Paper,
  ClickAwayListener,
  MenuList,
  MenuItem,
  Grow
} from '@material-ui/core';
import MenuRoundedIcon from '@material-ui/icons/MenuRounded';

import Bookmark from './decoration/Bookmark';

const useStyles = makeStyles((theme: Theme) => 
  createStyles({
    root: {
      flexGrow: 1,
      marginBottom: theme.spacing(4)
    },
    title: {
      flexGrow: 1,
    },
    menuButton: {
      marginLeft: theme.spacing(2)
    },
    menu: {
      zIndex:2,
    }
  }),
);


const Header: React.FC = () => {
  const classes = useStyles();
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up('sm'));

  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef<HTMLButtonElement>(null);

  const handleToggle = () => {
    setOpen(prevOpen => !prevOpen);
  };

  const handleClose = (event: React.MouseEvent<EventTarget>) => {
    if (anchorRef.current && anchorRef.current.contains(event.target as HTMLElement)) {
      return;
    }

    setOpen(false);
  };

  function handleListKeyDown(event: React.KeyboardEvent) {
    if (event.key === 'Tab') {
      event.preventDefault();
      setOpen(false);
    }
  }

  const prevOpen = React.useRef(open);
  React.useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current!.focus();
    }

    prevOpen.current = open;
  }, [open]);

  const menu = (matches: boolean) => {
    if(matches) {
      return (
        <div>
          <Button className={classes.menuButton} size="large">About</Button>
          <Button className={classes.menuButton} size="large">Skills</Button>
          <Button className={classes.menuButton} size="large">contact</Button>
        </div>
      );
    } else {
      return (
        <div>
          <IconButton 
            ref={anchorRef}
            aria-label="menu"
            aria-controls={open ? 'menu-list-grow' : undefined}
            aria-haspopup="true"
            color="inherit"
            onClick={handleToggle}
          >
            <MenuRoundedIcon fontSize="large"/>
          </IconButton>
          <Popper open={open} anchorEl={anchorRef.current} role={undefined} transition disablePortal>
            {({ TransitionProps, placement }) => (
              <Grow
                {...TransitionProps}
                style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'bottom-right' }}
              >
                <Paper elevation={0} className={classes.menu}>
                  <ClickAwayListener onClickAway={handleClose}>
                    <MenuList autoFocusItem={open} id="menu-list-grow" onKeyDown={handleListKeyDown}>
                      <MenuItem onClick={handleClose}>About</MenuItem>
                      <MenuItem onClick={handleClose}>Skills</MenuItem>
                      <MenuItem onClick={handleClose}>Contact</MenuItem>
                    </MenuList>
                  </ClickAwayListener>
                </Paper>
              </Grow>
            )}
          </Popper>
        </div>
      );
    }
  }

  return (
    <AppBar position="static" elevation={0} className={classes.root}>
      <Toolbar>
        <Typography variant="h1" component="h1" className={classes.title}>
          <Box fontWeight="fontWeightBold">
          niconico.io
          </Box>
        </Typography>
        {menu(matches)}
        <Bookmark color="#5cd9c0" position="right"/>
      </Toolbar>
    </AppBar>
  );
}

export default Header;