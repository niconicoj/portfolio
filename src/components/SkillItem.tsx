import React from 'react';
import { createStyles, makeStyles, Theme, useTheme } from '@material-ui/core/styles';
import { Grid, Typography, useMediaQuery, Tooltip, Zoom, Box } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    skillImage: {
      margin: theme.spacing(1)
    },
    skillText: {
      marginLeft:theme.spacing(1)
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
  const matches = useMediaQuery(theme.breakpoints.up('md'));

  const {icon, tooltip} = props;

  if(matches){
    return(
      <Grid container direction="row" justify="flex-start" alignItems="center">
        <img src={icon} alt={tooltip} height="50" width="50" className={classes.skillImage}></img>
          <Typography className={classes.skillText} component="div">
            <Box fontSize="1.75rem" fontWeight={100}>
              {tooltip}
            </Box>
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