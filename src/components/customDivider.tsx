import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    divider: {
      position: "relative",
      height: 1,
      '&::before': {
        content: '""',
        position: "absolute",
        top: 0,
        left: "5%",
        right: "5%",
        width: "30em",
        height: "1px",
        backgroundImage: "linear-gradient(to right, transparent, white, transparent)",
        transform: "translate(-50%, 0)"    
      },
      '&::after': {
        content: '""',
        position: "absolute",
        zIndex: 1,
        top: "-6px",
        left: "calc(50% - 6px)",
        width: "12px",
        height: "12px",
        backgroundColor: "white",
        borderRadius: "50%",
        boxShadow: "0 0 0 8px #386FA4",
      }
    }
  }),
);

function CustomDivider() {
  const classes = useStyles();

  return(
    <div className={classes.divider}></div>
  );

}

export default CustomDivider;