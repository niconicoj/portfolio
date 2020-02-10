import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { blue } from '@material-ui/core/colors';
import { Grid, Typography, TextField, Button, CircularProgress, Snackbar, Box } from '@material-ui/core';
import MuiAlert, { AlertProps } from '@material-ui/lab/Alert';

import * as ContactTypes from '../redux/contact/models'
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
    <div>
      <Box className={classes.root}>
        <Grid container>
          <Typography variant="h2" component="h2" gutterBottom>
            Contact me
          </Typography>
          <Grid container alignItems="stretch" justify="space-between">
            <Grid container 
            item 
            sm={4}
            xs={12} 
            direction="column"
            alignItems="stretch">
              <Grid item>
                <Typography variant="body1">
                  What is you name ?
                </Typography>
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
                <Typography variant="body1">
                  What is your email address ?
                </Typography>
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
                <Typography variant="body1">
                  What is your company ?
                </Typography>
                <TextField
                  fullWidth
                  id="company"
                  label="Company"
                  placeholder="Acme Corporation"
                  variant="outlined"
                />
              </Grid>
            </Grid>
            <Grid item
              container
              sm={7}
              xs={12} 
              direction="column"
              alignItems="stretch">
              <Grid item>
                <Typography variant="body1">
                  You can write your message to me here, I will get back to you via the email you provided.
                </Typography>
                <TextField
                  id="outlined-multiline-static"
                  label="Message"
                  multiline
                  fullWidth
                  rows="8"
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
        </Grid>
        <Bookmark color="#f3bd7d" position="left"/>
      </Box>
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
    </div>
  );
}

export default Contact;