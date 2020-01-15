import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    dividerWhite: {
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
        top: "-4px",
        left: "calc(50% - 4px)",
        width: "8px",
        height: "8px",
        backgroundColor: "white",
        borderRadius: "50%",
        boxShadow: "0 0 0 16px #386FA4",
      }
    },
    dividerBlack: {
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
        backgroundImage: "linear-gradient(to right, transparent, black, transparent)",
        transform: "translate(-50%, 0)"    
      },
      '&::after': {
        content: '""',
        position: "absolute",
        zIndex: 1,
        top: "-4px",
        left: "calc(50% - 4px)",
        width: "8px",
        height: "8px",
        backgroundColor: "black",
        borderRadius: "50%",
        boxShadow: "0 0 0 16px #FFFFFF",
      }
    }
  }),
);

interface DividerProps {
  color: 'white'|'black'
}

function CustomDivider(props: DividerProps) {
  const classes = useStyles();
  switch(props.color){
    case 'white':
      return(
        <div className={classes.dividerWhite}></div>
      );
    case 'black':
      return(
        <div className={classes.dividerBlack}></div>
      );
  }

}

export default CustomDivider;