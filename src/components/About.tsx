import React from 'react';
import { 
  makeStyles,
  Theme,
  createStyles,
  Typography,
  Box,
  Grid,
  useTheme,
  useMediaQuery
} from '@material-ui/core';
import Bookmark from './decoration/Bookmark';

const useStyles = makeStyles((theme: Theme) => 
  createStyles({
    root: {
      paddingLeft: theme.spacing(6),
      paddingRight: theme.spacing(4),
      [theme.breakpoints.up('sm')]: {
        paddingLeft: theme.spacing(8),
        paddingRight: theme.spacing(8),
      },
      marginBottom: theme.spacing(4),
      overflow: "hidden",
      position: "relative"
    },
    subtitle: {
      marginBottom: theme.spacing(2),
    },
    shapes: {
      position: "absolute",
      maxWidth: "100%",
      maxHeight: "100%",
      margin: theme.spacing(4),
      top: '50%',
      transform: 'translate(0, -50%)',
      zIndex: -1,
      opacity: "75%"
    }
  }),
);

const About: React.FC = () => {
  const classes = useStyles();
  const theme = useTheme();
  const mdMatch = useMediaQuery(theme.breakpoints.up('md'));

  const image = ( match: boolean ) => {
    if(match) {
      return (
        <img src="static/images/shapes.sm.svg" className={classes.shapes} alt=""></img>
      );
    } else {
      return (
        <img src="static/images/shapes.xs.svg" className={classes.shapes} alt=""></img>
      );
    }
  }

  return (
    <div>
      <Box className={classes.root}>
        <Grid container>
          <Grid item sm={6}>
            <Typography variant="h2" component="h2" gutterBottom>
              About me
            </Typography>
            <Typography variant="subtitle1" gutterBottom>
              <Box fontStyle="italic">
                Hi I’m Nicolas. I am a Developer who specialize in web & web apps development.
              </Box>
            </Typography>
            <Typography variant="body1" gutterBottom>
              I have professional experience working with PHP, javascript, css and SQL on environments using dockerized services and GIT.
            </Typography>
            <Typography variant="body1" gutterBottom>
              Since I enjoy learning about new development paradigms I am also self taught in a variety of other technologies.
            </Typography>
            <Typography variant="body1" gutterBottom>
              If I’m not coding I’m making music or building my own guitar effect pedals.
            </Typography>
          </Grid>
          <Grid item sm={6}>
            {image(mdMatch)}
          </Grid>
        </Grid>
        <Bookmark color="#e2827f" position="left"/>
      </Box>
    </div>
  );
}

export default About;