import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import cheers from '../images/sunlight-cheers.jpg';

const useStyles = makeStyles(theme => ({
  container: {
    position: 'relative',
    backgroundImage: `url(${cheers})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    opacity: '0.7',
    height: 450,
  },
  headline: {
    paddingTop: '7%',
    color: '#fff',
    fontWeight: 400,
    [theme.breakpoints.down('sm')]: {
      paddingTop: '20%',
    },
  },
}));

export default function Hero() {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <Typography className={classes.headline} align="center" variant="h2">
        Home is where our Beer is
      </Typography>
    </div>
  );
}
