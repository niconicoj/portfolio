import React from 'react';
import { 
  makeStyles,
  Theme,
  createStyles
} from '@material-ui/core';

const useStyles = (color: string, position: 'right'|'left') => {
  return makeStyles((theme: Theme) => 
    createStyles({
      root: {
        flexGrow: 1,
      },
      bookmark: {
        background: color,
        width: '1.5rem',
        top: 0,
        height: '-webkit-fill-available',
        [position]: 0,
        position: "absolute",
      }
    }),
  );
}

type BookmarkProps = {
  color: string
  position: 'right'|'left'
}

const Bookmark: React.FC<BookmarkProps> = (props: BookmarkProps) => {
  const classes = useStyles(props.color, props.position)();

  return (
    <div className={classes.bookmark}></div>
  );
}

export default Bookmark;