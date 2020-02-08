import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { blue } from '@material-ui/core/colors';
import { Card, CardContent, Grid, Typography, Container, TextField, Button, CircularProgress, Snackbar } from '@material-ui/core';
import MuiAlert, { AlertProps } from '@material-ui/lab/Alert';

import * as ContactTypes from '../redux/contact/models'

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
    },
    buttonWrapper: {
      margin: theme.spacing(1),
      position: 'relative',
    },
    buttonProgress: {
      color: blue[700],
      position: 'absolute',
      top: '50%',
      left: '50%',
      marginTop: -12,
      marginLeft: -12,
    },
  }),
);

function Alert(props: AlertProps) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

interface Props {
  contact: ContactTypes.Contact
  update: (id: string, value: string) => void
  validate: () => void
  dissmiss: () => void
}

const Contact: React.FC<Props> = props => {
  const classes = useStyles();

  const handleSend = () => {
    console.log(props.contact)
    props.validate();
  }

  const dissmissError = () => {
    props.dissmiss();
  }

  return(
    <Container maxWidth="md">
      <Card elevation={8} className={classes.skillsCard}>
          <CardContent>
            <Typography paragraph>
              If you want to get in touch with me you can fill in this form and I'll get back to you via the mail address you provided.
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
                    value={props.contact.mail}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => {props.update('mail', e.target.value)}}
                    className={classes.inputField}
                    error={props.contact.errors.mail.status}
                    helperText={props.contact.errors.mail.message}
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
                    value={props.contact.name}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => {props.update('name', e.target.value)}}
                    className={classes.inputField}
                    error={props.contact.errors.name.status}
                    helperText={props.contact.errors.name.message}
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
                    value={props.contact.message}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => {props.update('message', e.target.value)}}
                    error={props.contact.errors.message.status}
                    helperText={props.contact.errors.message.message}
                    variant="outlined"
                  />
                </Grid>
                <Grid item className={classes.formButton}>
                  <div className={classes.buttonWrapper}>
                    <Button 
                      variant="contained" 
                      color="primary" 
                      size="large"
                      disabled={props.contact.fetching} 
                      onClick={handleSend}>
                        Send
                    </Button>
                    {props.contact.fetching && <CircularProgress size={24} className={classes.buttonProgress}/>}
                  </div>
                </Grid>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
        <Snackbar 
          anchorOrigin={{vertical: 'bottom', horizontal:'right'}}
          open={props.contact.errors.fetching.status} 
          autoHideDuration={6000} 
          onClose={dissmissError}>
          <Alert onClose={dissmissError} severity="error">
            {props.contact.errors.fetching.message}
          </Alert>
      </Snackbar>
      <Snackbar 
        anchorOrigin={{vertical: 'bottom', horizontal:'right'}}
        open={!props.contact.errors.fetching.status && props.contact.errors.fetching.message === "success"} 
        autoHideDuration={6000} 
        onClose={dissmissError}>
        <Alert onClose={dissmissError} severity="success">
          your message was delivered !
        </Alert>
      </Snackbar>
    </Container>
  );
}

export default Contact;