import React from 'react';
import { Link } from 'react-router-dom';
import makeStyles from '@material-ui/core/styles/makeStyles';
import { Typography } from '@material-ui/core';
import Page from '../components/Page';
import PageHeader from '../components/PageHeader';
import { beers } from '../data/beers';

const useStyles = makeStyles(theme => ({
  allBeers: {
    display: 'flex',
    flexWrap: 'wrap',
    alignItems: 'center',
    margin: '4rem 1rem',
    [theme.breakpoints.down('xs')]: {
      flexWrap: 'none',
      flexDirection: 'column',
    },
  },
  beer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '1rem',
    width: 250,
    height: 300,
  },
  image: {
    width: 200,
    height: 250,
  },
}));

export default function OurBeersPage() {
  const classes = useStyles();
  return (
    <Page>
      <PageHeader title="Our Beers" />
      <div className={classes.allBeers}>
        {beers.map(beer => (
          <Link to={`our-beers/${beer.slug}`}>
            <div key={beer.id} className={classes.beer}>
              <img className={classes.image} src={beer.img} alt={beer.name} />
              <Typography>{beer.name}</Typography>
            </div>
          </Link>
        ))}
      </div>
    </Page>
  );
}
