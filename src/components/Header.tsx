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
  Menu,
  MenuItem,
} from '@material-ui/core';
import MenuRoundedIcon from '@material-ui/icons/MenuRounded';
import { goToAnchor } from 'react-scrollable-anchor';

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

  const [open] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (section?: string) => {
    if(section!==undefined){
      goToAnchor(section);
    }
    setAnchorEl(null);
  };

  const menu = (matches: boolean) => {
    if(matches) {
      return (
        <div>
          <Button className={classes.menuButton} size="large" href="#About">About</Button>
          <Button className={classes.menuButton} size="large" href="#Skills">Skills</Button>
          <Button className={classes.menuButton} size="large" href="#Contact">contact</Button>
        </div>
      );
    } else {
      return (
        <div>
          <IconButton
            aria-label="menu"
            aria-controls={open ? 'menu-list-grow' : undefined}
            aria-haspopup="true"
            color="inherit"
            onClick={handleClick}
          >
            <MenuRoundedIcon fontSize="large"/>
          </IconButton>
          <Menu
            id="simple-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={() => handleClose()}
          >
            <MenuItem onClick={() => handleClose('About')}>About</MenuItem>
            <MenuItem onClick={() => handleClose('Skills')}>Skills</MenuItem>
            <MenuItem onClick={() => handleClose('Contact')}>Contact</MenuItem>
          </Menu>
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