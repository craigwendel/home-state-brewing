import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Link } from '@material-ui/core';
import OurBeersTabs from './OurBeersTabs';

const useStyles = makeStyles({
  container: {
    padding: '3rem 0rem',
  },
  title: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '2rem',
    justifyContent: 'center',
  },
  link: {
    fontSize: '1.25rem',
    marginLeft: '3rem',
  },
});

export default function OurBeers() {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <div className={classes.title}>
        <Typography variant="h2" color="primary" align="center">
          Our Beers
        </Typography>
        <Link
          className={classes.link}
          component={RouterLink}
          to="/XaeA-12/our-beers"
        >
          View All
        </Link>
      </div>
      <OurBeersTabs />
    </div>
  );
}
