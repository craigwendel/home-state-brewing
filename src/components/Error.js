import React from 'react';
import { useHistory } from 'react-router-dom';
import makeStyles from '@material-ui/core/styles/makeStyles';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import beerSpill from '../images/spilled-beer.jpg';

const useStyles = makeStyles(theme => ({
  container: {
    display: 'grid',
    gridTemplateColumns: '1fr',
    gridGap: '1rem',
    alignContent: 'center',
  },
  image: {
    width: '100%',
    height: 400,
  },
  buttons: {
    margin: '1rem',
    textAlign: 'center',
  },
}));

export default function Error() {
  const classes = useStyles();
  const history = useHistory();

  return (
    <div className={classes.container}>
      <Typography align="center" color="primary" variant="h3">
        Party Foul!
      </Typography>
      <img
        className={classes.image}
        src={beerSpill}
        alt="spilled beer on table"
      />
      <Typography align="center" variant="h5">
        Sorry, we're still brewing this page up. Check out our other pages
        below!
      </Typography>
      <div className={classes.buttons}>
        <Button
          className={classes.buttons}
          variant="contained"
          color="primary"
          onClick={() => history.goBack()}
        >
          Back
        </Button>
        <Button
          className={classes.buttons}
          variant="contained"
          color="primary"
          onClick={() => history.push('/XaeA-12/')}
        >
          Home
        </Button>
        <Button
          className={classes.buttons}
          variant="contained"
          color="primary"
          onClick={() => history.push('/XaeA-12/our-story')}
        >
          Our Story
        </Button>
        <Button
          className={classes.buttons}
          variant="contained"
          color="primary"
          onClick={() => history.push('/XaeA-12/our-beers')}
        >
          Our Beers
        </Button>
      </div>
    </div>
  );
}
