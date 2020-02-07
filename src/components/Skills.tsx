import React from 'react';
import { 
  makeStyles,
  Theme,
  createStyles,
  Typography,
  Box,
  Grid,
  Card,
  CardContent
} from '@material-ui/core';

import SkillItem from './SkillItem';
import Bookmark from './decoration/Bookmark';

const useStyles = makeStyles((theme: Theme) => 
  createStyles({
    root: {
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
  const skills = ['php', 'javascript', 'sql', 'css', 'docker', 'react', 'mongoDB', 'typescript', 'nodejs', 'git', 'jenkins', 'nginx'];

  return (
    <div>
      <Box className={classes.root}>
        <Grid container justify="flex-end">
          <Grid item>
            <Typography variant="h2" component="h2" gutterBottom align="right">
              Skills
            </Typography>
            <Grid container direction="row-reverse" justify="space-between" alignItems="center">
              <Grid item sm={8}>
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
              <Grid item sm={4}>
                <img src="/static/images/stripes.sm.svg" alt=""></img>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
        <Bookmark color="#087a8d" position="right"/>
      </Box>
    </div>
  );
}

export default Skills;