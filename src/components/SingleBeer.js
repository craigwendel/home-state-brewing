import React from 'react';
import PropTypes from 'prop-types';
import makeStyles from '@material-ui/core/styles/makeStyles';
import Typography from '@material-ui/core/Typography';
import Slide from '@material-ui/core/Slide';
import Fade from '@material-ui/core/Fade';
import Chip from '@material-ui/core/Chip';
import Avatar from '@material-ui/core/Avatar';
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

export default function SingleBeer({ id }) {
  const classes = useStyles();
  const beer = beers.find(beer => beer.id === id);
  const selected = Boolean(beer);

  return (
    <div className={classes.container}>
      <Slide
        direction="up"
        in={selected}
        mountOnEnter
        unmountOnExit
        timeout={{ enter: 200 }}
      >
        <div>
          <img
            className={classes.image}
            src={beer?.img}
            alt={`${beer?.name} beer`}
          />
        </div>
      </Slide>
      <Fade in={selected} timeout={{ enter: 400 }}>
        <div className={classes.details}>
          <Typography variant="subtitle2" color="secondary">
            {beer?.availability}
          </Typography>
          <Typography variant="h3" color="primary">
            {beer?.name}
          </Typography>
          <Typography className={classes.type} color="secondary" variant="h6">
            {beer?.type}
          </Typography>
          <Typography>{beer?.description}</Typography>
          <div className={classes.type}>
            <Chip
              className={classes.chip}
              avatar={<Avatar alt="orange hop" src={orange} />}
              color="primary"
              variant="outlined"
              label={`ABV: ${beer?.abv}`}
            />
            <Chip
              className={classes.chip}
              avatar={<Avatar alt="orange hop" src={orange} />}
              color="primary"
              label={`IBU: ${beer?.ibu}`}
            />
          </div>
        </div>
      </Fade>
    </div>
  );
}

SingleBeer.propTypes = {
  id: PropTypes.string.isRequired,
};
