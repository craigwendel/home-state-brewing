import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import cheers from '../images/sunlight-cheers.jpg';

const useStyles = makeStyles({
  container: {
    position: 'relative',
    backgroundImage: `url(${cheers})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    height: '40rem',
  },
  headline: {
    position: 'absolute',
    top: '25%',
    left: '50%',
    transform: 'translate(-50%, 0)',
    color: '#fff',
  },
});

export default function Hero() {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <Typography className={classes.headline} align="center" variant="h1">
        Home is where our Beer is
      </Typography>
    </div>
  );
}
