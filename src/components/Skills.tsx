import React from 'react';
import { 
  makeStyles,
  Theme,
  createStyles,
  Typography,
  Box,
  Grid,
  Card,
  CardContent,
  useTheme,
  useMediaQuery
} from '@material-ui/core';

import SkillItem from './SkillItem';
import Bookmark from './decoration/Bookmark';

const useStyles = makeStyles((theme: Theme) => 
  createStyles({
    root: {
      paddingLeft: theme.spacing(4),
      paddingRight: theme.spacing(6),
      [theme.breakpoints.up('sm')]: {
        paddingRight: theme.spacing(8),
        paddingLeft: 0
      },
      marginBottom: theme.spacing(4),
      overflow: "hidden",
      position: "relative",
    },
    subtitle: {
      marginBottom: theme.spacing(2),
    },
    shapes: {
      position: 'relative',
      width: '100%',
      height: '80%',
      objectFit: 'cover',
      transform: 'translate(0, -50%)',
      top: '50%',
    },
    container: {
      width: '-webkit-fill-available',
    }
  }),
);

const Skills: React.FC = () => {
  const classes = useStyles();
  const theme = useTheme();
  const smMatch = useMediaQuery(theme.breakpoints.up('sm'));

  const skills = ['php', 'javascript', 'sql', 'css', 'docker', 'react', 'mongoDB', 'typescript', 'nodejs', 'git', 'jenkins', 'nginx'];

  const displayImage = (match: boolean) => {
    if(match) {
      return (
        <Grid item sm={4}>
          <img className={classes.shapes} src="/static/images/stripes.sm.svg" alt=""></img>
        </Grid>
      );
    }
  }

  return (
    <div>
      <Box className={classes.root}>
        <Grid container justify="flex-end">
          <Grid item className={classes.container}>
            <Typography variant="h2" component="h2" gutterBottom align="right">
              Skills
            </Typography>
            <Grid container direction="row-reverse" justify="space-between" alignItems="stretch">
              <Grid item sm={8} xs={12}>
                <Card elevation={0}>
                  <CardContent>
                      <Grid container>
                        {skills.map(skill => (
                          <Grid key={skill} item xs={4} sm={4}>
                            <SkillItem icon={"/static/images/skills/"+skill+".png"} tooltip={skill} />
                          </Grid>
                        ))}
                      </Grid>  
                  </CardContent>
                </Card>
              </Grid>
              {displayImage(smMatch)}
            </Grid>
          </Grid>
        </Grid>
        <Bookmark color="#087a8d" position="right"/>
      </Box>
    </div>
  );
}

export default Skills;