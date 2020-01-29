import React from 'react';
import { createStyles, makeStyles, Theme, useTheme } from '@material-ui/core/styles';
import { Grid, Typography, useMediaQuery, Tooltip, Zoom } from '@material-ui/core';

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

interface SkillItemProps {
  icon: string,
  tooltip: string
}

function SkillsArray(props: SkillItemProps) {
  const classes = useStyles();
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.up('sm'));

  const {icon, tooltip} = props;

  if(matches){
    return(
      <Grid container direction="row" justify="flex-start" alignItems="center">
        <img src={icon} alt={tooltip} height="50" width="50" className={classes.skillImage}></img>
        <Typography className={classes.skillText}>
          {tooltip}
        </Typography>
      </Grid>
    );
  } else {
    return(
      <Grid container direction="row" justify="center" alignItems="center">
        <Tooltip title={tooltip} placement="right" TransitionComponent={Zoom} arrow disableFocusListener>
          <img src={icon} alt={tooltip} height="50" width="50" className={classes.skillImage}></img>
        </Tooltip>
      </Grid>
    )
  }
}

export default SkillsArray;