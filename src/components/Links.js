import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import makeStyles from '@material-ui/core/styles/makeStyles';
import Link from '@material-ui/core/Link';
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
  about: {
    position: 'relative',
    display: 'inline-block',
    margin: '0.5rem',
    fontSize: '1rem',
    '&:hover $dropdown': {
      display: 'flex',
    },
  },
  dropdown: {
    display: 'none',
    position: 'absolute',
    flexDirection: 'column',
    backgroundColor: '#fff',
    width: 140,
    paddingTop: '0.4rem',
  },
}));

export default function Links(props) {
  const classes = useStyles(props);
  const dropdownLinks = links.filter(l => l.inset);

  return (
    <div className={classes.container}>
      <Link
        className={classes.urlLink}
        component={RouterLink}
        to="/XaeA-12/our-beers"
      >
        Our Beers
      </Link>

      <div className={classes.about}>
        <Link
          component={RouterLink}
          to="/XaeA-12/our-story"
          style={{ color: props.header ? '#244f70' : '#fff' }}
        >
          About
        </Link>
        {props.header && (
          <div className={classes.dropdown}>
            {dropdownLinks.map(link => (
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
        )}
      </div>
      <Link
        className={classes.urlLink}
        component={RouterLink}
        to="/XaeA-12/contact"
      >
        Contact
      </Link>
    </div>
  );
}
