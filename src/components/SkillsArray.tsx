import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { Card, CardContent, Grid, Container } from '@material-ui/core';

import SkillItem from './SkillItem';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    skillsCard: {
      backgroundColor: "#1E1E1E",
      color:"white",
      marginTop: theme.spacing(2),
      marginBottom: theme.spacing(2)
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
      <Card elevation={8} className={classes.skillsCard}>
          <CardContent>
            <Grid container
            direction="row"
            justify="space-around"
            alignItems="center">
              {skills.map(skill => (
                <Grid key={skill} item xs={4} sm={6}>
                  <SkillItem icon={"/static/images/skills/"+skill+".png"} tooltip={skill} />
                </Grid>
              ))}
            </Grid>
          </CardContent>
        </Card>
    </Container>
  );
}

export default SkillsArray;