import React, { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import makeStyles from '@material-ui/core/styles/makeStyles';
import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import SingleBeer from './SingleBeer';
import { beers } from '../data/beers';

const useStyles = makeStyles(theme => ({
  container: {
    marginTop: '1rem',
  },
  tabs: {
    marginBottom: '2rem',
    [theme.breakpoints.down('sm')]: {
      marginBottom: '0.5rem',
    },
  },
  tabContainer: {
    height: 400,
    margin: '0rem 8rem',
    [theme.breakpoints.down('sm')]: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'flex-start',
      justifyContent: 'center',
      height: 700,
      margin: '0rem',
    },
    [theme.breakpoints.between('sm', 'md')]: {
      height: 500,
      margin: '0rem 3rem',
    },
  },
  beerNav: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: 80,
    marginBottom: '1rem',
    [theme.breakpoints.down('sm')]: {
      height: 125,
      marginBottom: '2rem',
    },
  },
  allBeers: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(50px, 1fr))',
    width: '50%',
    [theme.breakpoints.down('xs')]: {
      gridTemplateColumns: 'repeat(auto-fit, minmax(40px, 1fr))',
      width: '80%',
    },
  },
  img: {
    width: 30,
  },
  beer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    '&:hover': {
      transform: 'translate(0px, -10px)',
      cursor: 'pointer',
    },
    '&:hover $title': {
      display: 'block',
    },
    transition: 'transform 330ms ease-in-out',
  },
  selected: {
    transform: 'translate(0px, -10px)',
  },
  title: {
    display: 'none',
    [theme.breakpoints.down('xs')]: {
      display: 'block',
    },
  },
  showTitle: {
    display: 'block',
  },
}));

export default function OurBeersTabs() {
  const classes = useStyles();
  const [beerId, setBeerId] = useState('hatTrick');
  const [selection, setSelection] = useState('current');

  const handleChange = id => {
    setBeerId('');
    setTimeout(() => setBeerId(id), 50);
  };

  const handleSelection = (_, newValue) => {
    setSelection(newValue);
  };

  return (
    <div className={classes.container}>
      <Typography variant="h3" color="primary" align="center">
        Our Beers
      </Typography>
      <Tabs
        className={classes.tabs}
        value={selection}
        onChange={handleSelection}
        indicatorColor="primary"
        textColor="primary"
        centered
      >
        <Tab label="Currently Pouring" value="current" />
        <Tab label="On Deck" value="onDeck" />
      </Tabs>

      <div className={classes.beerNav}>
        <div className={classes.allBeers}>
          {beers.map(beer => (
            <div
              key={beer.id}
              className={`${classes.beer} ${
                beer.id === beerId ? classes.selected : ''
              }`}
              onClick={() => handleChange(beer.id)}
            >
              <img
                className={classes.img}
                src={beer.canImg}
                alt={`${beer.name} beer can silhoutte`}
              />
              <Typography
                className={`${classes.title} ${
                  beer.id === beerId ? classes.showTitle : ''
                }`}
                variant="caption"
                align="center"
              >
                {beer.name}
              </Typography>
            </div>
          ))}
        </div>
        <Link component={RouterLink} to="/XaeA-12/our-beers">
          View All
        </Link>
      </div>
      <div className={classes.tabContainer}>
        <SingleBeer id={beerId} />
      </div>
    </div>
  );
}
