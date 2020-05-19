import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Chip, Avatar } from '@material-ui/core';
import { beers } from '../data/beers';
import orange from '../images/orange-avatar.png';

const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
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

export default function SingleBeer(props) {
  console.log('props', props);
  console.log('beer', props.match.params.beer);
  const { value } = props;

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
            avatar={<Avatar alt="orange hop" src={orange} />}
            color="primary"
            variant="outlined"
            label={`ABV: ${beers[value].abv}`}
          />
          <Chip
            className={classes.chip}
            avatar={<Avatar alt="orange hop" src={orange} />}
            color="primary"
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
