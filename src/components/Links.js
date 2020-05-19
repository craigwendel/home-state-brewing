import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from '@material-ui/core';
import { links } from '../data/links';

const useStyles = makeStyles(theme => ({
  container: props => ({
    display: 'flex',
    flexDirection: props.direction,
    alignItems: 'flex-start',
  }),
  urlLink: props => ({
    color: props.header ? theme.palette.primary.main : '#fff',
    margin: '0.5rem',
    fontSize: '1rem',
  }),
}));

export default function Links(props) {
  const classes = useStyles(props);
  return (
    <div className={classes.container}>
      {links.map(link => (
        <Link
          key={link.name}
          className={classes.urlLink}
          component={RouterLink}
          to={link.path}
        >
          {link.name}
        </Link>
      ))}
    </div>
  );
}
