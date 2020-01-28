import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { Card, CardContent, Grid, Typography, Container, TextField, Button } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    skillsCard: {
      marginTop: theme.spacing(2),
    },
    skillImage: {
      margin: theme.spacing(1)
    },
    skillText: {
      marginLeft:theme.spacing(2)
    },
    inputField: {
      marginBottom: theme.spacing(2)
    },
    formButton: {
      alignSelf: "flex-end",
      marginTop: theme.spacing(2),
    }
  }),
);

function Contact() {
  const classes = useStyles();

  return(
    <Container maxWidth="md">
      <Card elevation={8} className={classes.skillsCard}>
          <CardContent>
            <Typography paragraph>
              If you want to get in touch with me you can fill in this form and I'll get back to you via the mail address you provide.
            </Typography>
            <Grid container 
            direction="row"
            justify="center"
            alignItems="flex-start" 
            spacing={2}>
              <Grid container 
              item 
              sm={4} 
              xs={12} 
              direction="column"
              justify="center"
              alignItems="stretch">
                <Grid item>
                  <TextField
                    required
                    fullWidth
                    id="mail"
                    label="Email"
                    placeholder="example@mail.com"
                    variant="outlined"
                    className={classes.inputField}
                  />
                </Grid>
                <Grid item>
                  <TextField
                    required
                    fullWidth
                    id="name"
                    label="Name"
                    placeholder="John Doe"
                    variant="outlined"
                    className={classes.inputField}
                  />
                </Grid>
                <Grid item>
                  <TextField
                    fullWidth
                    id="company"
                    label="Company"
                    placeholder="Acme Corporation"
                    variant="outlined"
                  />
                </Grid>
              </Grid>
              <Grid container 
              item 
              sm={8} 
              xs={12} 
              direction="column"
              justify="space-between"
              alignItems="stretch">
                <Grid item>
                  <TextField
                    id="outlined-multiline-static"
                    label="Message"
                    multiline
                    fullWidth
                    rows="6"
                    placeholder="enter your message here..."
                    variant="outlined"
                  />
                </Grid>
                <Grid item className={classes.formButton}>
                  <Button variant="contained" color="primary" size="large">
                    Send
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
    </Container>
  );
}

export default Contact;