import React from 'react';
import { 
  makeStyles,
  Theme,
  createStyles,
  Typography,
  Container,
  Box,
  Grid,
  useTheme,
  useMediaQuery
} from '@material-ui/core';
import Bookmark from './decoration/Bookmark';
import { fontSize } from '@material-ui/system';

const useStyles = makeStyles((theme: Theme) => 
  createStyles({
    root: {
      paddingLeft: theme.spacing(8),
      paddingRight: theme.spacing(8),
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
      transform: 'translate(0, -50%)'
    }
  }),
);

const Skills: React.FC = () => {
  const classes = useStyles();
  const theme = useTheme();

  return (
    <div>
      <Box className={classes.root}>
        <Grid container justify="flex-end">
          <Grid item>
            <Typography variant="h2" component="h2" gutterBottom>
              Skills
            </Typography>
          </Grid>
        </Grid>
        <Bookmark color="#087a8d" position="right"/>
      </Box>
    </div>
  );
}

export default Skills;