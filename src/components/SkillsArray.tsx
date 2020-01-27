import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { Card, CardContent, Grid, Typography, Container } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    skillsCard: {
      backgroundColor: "#1E1E1E",
      color:"white",
      marginTop: theme.spacing(2),
      margin: theme.spacing(8)
    },
    skillImage: {
      margin: theme.spacing(1)
    },
    skillText: {
      marginLeft:theme.spacing(2)
    }
  }),
);

function SkillsArray() {
  const classes = useStyles();

  const skills = ['php', 'javascript', 'sql', 'css', 'docker', 'react', 'mongoDB', 'typescript', 'nodejs', 'git', 'jenkins', 'nginx'];

  return(
    <Container maxWidth="md">
      <Card elevation={20} className={classes.skillsCard}>
          <CardContent>
            <Grid container>
              {skills.map(skill => (
                <Grid key={skill} item sm={6} xs={12}>
                  <Grid container direction="row" justify="flex-start" alignItems="center">
                    <img src={"/static/images/skills/"+skill+".png"} alt={skill} height="50" width="50" className={classes.skillImage}></img>
                    <Typography className={classes.skillText}>
                      {skill}
                    </Typography>
                  </Grid>
                </Grid>
              ))}
            </Grid>
          </CardContent>
        </Card>
    </Container>
  );
}

export default SkillsArray;