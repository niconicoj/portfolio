import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { Card, CardContent, Grid, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    skillsCard: {
      backgroundColor: "#1E1E1E",
      color:"white",
      marginTop: theme.spacing(2),
      margin: theme.spacing(8)
    },
    skillText: {
      marginLeft: theme.spacing(2)
    },
    skillItem: {
      marginLeft: theme.spacing(8)
    }
  }),
);

function SkillsArray() {
  const classes = useStyles();

  const skills = ['php', 'javascript', 'sql', 'css', 'docker', 'react', 'mongoDB', 'typescript', 'nodejs', 'git', 'jenkins', 'nginx'];

  return(
    <Grid container spacing={2} direction="row" justify="center" alignItems="center">
      <Grid item sm={10}>
        <Card elevation={20} className={classes.skillsCard}>
          <CardContent>
            <Grid container spacing={2}>
              {skills.map(skill => (
                <Grid key={skill} item sm={6} xs={12}>
                  <Grid container direction="row" justify="flex-start" alignItems="center">
                    <img src={"/static/images/skills/"+skill+".png"} alt={skill} height="50" width="50"></img>
                    <Typography className={classes.skillText}>
                      {skill}
                    </Typography>
                  </Grid>
                </Grid>
              ))}
            </Grid>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
}

export default SkillsArray;