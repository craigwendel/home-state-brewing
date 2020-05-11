import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Chip } from '@material-ui/core';
import { beers } from '../data/beers';

const useStyles = makeStyles({
  container: {
    display: 'flex',
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
});

export default function SingleBeer({ value }) {
  const classes = useStyles();
  return (
    <div className={classes.container} role="tabpanel">
      <div>
        <img
          className={classes.image}
          src={beers[value].img}
          alt={`${beers[value].name} beer`}
        />
      </div>
      <div className={classes.details}>
        <Typography variant="subtitle2" color="secondary">
          {beers[value].availability}
        </Typography>
        <Typography variant="h3" color="primary">
          {beers[value].name}
        </Typography>
        <Typography className={classes.type} color="secondary" variant="h6">
          {beers[value].type}
        </Typography>
        <Typography>{beers[value].description}</Typography>
        <div className={classes.type}>
          <Chip
            className={classes.chip}
            color="secondary"
            label={`ABV: ${beers[value].abv}`}
          />
          <Chip
            className={classes.chip}
            color="secondary"
            label={`IBU: ${beers[value].ibu}`}
          />
        </div>
      </div>
    </div>
  );
}

SingleBeer.propTypes = {
  value: PropTypes.any.isRequired,
};
