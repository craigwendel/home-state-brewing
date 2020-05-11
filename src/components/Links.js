import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  container: props => ({
    display: 'flex',
    flexDirection: props.direction,
    alignItems: 'flex-start',
  }),
  link: props => ({
    color: props.header ? theme.palette.primary.main : '#fff',
    margin: '0.5rem',
    fontSize: '1rem',
  }),
}));

export default function Links(props) {
  const classes = useStyles(props);
  return (
    <div className={classes.container}>
      <Link className={classes.link} component={RouterLink} to="/our-beers">
        Our Beers
      </Link>
      <Link className={classes.link} component={RouterLink} to="/mission">
        Mission
      </Link>
      <Link className={classes.link} component={RouterLink} to="/community">
        Community
      </Link>
      <Link className={classes.link} component={RouterLink} to="/about">
        About
      </Link>
      <Link className={classes.link} component={RouterLink} to="/contact">
        Contact
      </Link>
    </div>
  );
}
