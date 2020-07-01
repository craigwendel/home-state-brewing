import React from 'react';
import makeStyles from '@material-ui/core/styles/makeStyles';
import OurBeersTabs from './OurBeersTabs';

const useStyles = makeStyles({
  container: {
    padding: '2rem 0rem',
  },
});

export default function OurBeers() {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <OurBeersTabs />
    </div>
  );
}
