import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Chip, Avatar } from '@material-ui/core';
import Page from '../components/Page';
import PageHeader from '../components/PageHeader';
import { beers } from '../data/beers';
import orange from '../images/orange-avatar.png';

const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    [theme.breakpoints.down('xs')]: {
      flexDirection: 'column',
      alignItems: 'center',
    },
  },
  image: {
    width: 400,
    height: 400,
  },
  details: {
    padding: '2rem',
  },
  type: {
    margin: '1rem 0rem',
  },
  chip: {
    margin: '0.5rem',
  },
}));

export default function SingleBeerPage(props) {
  const classes = useStyles();
  const slug = props.match.params.beer;
  const beer = beers.find(beer => beer.slug === slug);

  return (
    <Page>
      <PageHeader title={beer.name} />
      <div className={classes.container} role="tabpanel">
        <div>
          <img
            className={classes.image}
            src={beer.img}
            alt={`${beer.name} beer`}
          />
        </div>
        <div className={classes.details}>
          <Typography variant="subtitle2" color="secondary">
            {beer.availability}
          </Typography>
          <Typography variant="h3" color="primary">
            {beer.name}
          </Typography>
          <Typography className={classes.type} color="secondary" variant="h6">
            {beer.type}
          </Typography>
          <Typography>{beer.description}</Typography>
          <div className={classes.type}>
            <Chip
              className={classes.chip}
              avatar={<Avatar alt="orange hop" src={orange} />}
              color="primary"
              variant="outlined"
              label={`ABV: ${beer.abv}`}
            />
            <Chip
              className={classes.chip}
              avatar={<Avatar alt="orange hop" src={orange} />}
              color="primary"
              label={`IBU: ${beer.ibu}`}
            />
          </div>
        </div>
      </div>
    </Page>
  );
}
