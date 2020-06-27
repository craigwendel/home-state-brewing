import React from 'react';
import { useHistory } from 'react-router-dom';
import makeStyles from '@material-ui/core/styles/makeStyles';
import Typography from '@material-ui/core/Typography';
import Fab from '@material-ui/core/Fab';
import sunset from '../images/sunset.jpg';

const useStyles = makeStyles(theme => ({
  container: {
    position: 'relative',
    backgroundImage: `url(${sunset})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    height: 450,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  intro: {
    color: '#fff',
    fontWeight: 300,
    textShadow: `0 0 5px ${theme.palette.primary.main}`,
  },
  headline: {
    color: '#fff',
    fontWeight: 400,
    textShadow: `0 0 5px ${theme.palette.primary.main}`,
  },
  subText: {
    padding: '2% 0% 3% 0%',
    color: '#fff',
    textShadow: `0 0 5px ${theme.palette.primary.main}`,
  },
}));

export default function Hero() {
  const classes = useStyles();
  const history = useHistory();
  return (
    <div className={classes.container}>
      <Typography className={classes.intro} align="center" variant="h5">
        Welcome To
      </Typography>
      <Typography className={classes.headline} align="center" variant="h1">
        Home State Brewing
      </Typography>
      <Typography className={classes.subText} align="center" variant="h4">
        ~ Home is where our Beer is ~
      </Typography>
      <Fab
        variant="extended"
        size="large"
        color="primary"
        onClick={() => history.push('/XaeA-12/our-story')}
      >
        Our Story
      </Fab>
    </div>
  );
}
