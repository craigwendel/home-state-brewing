import React from 'react';
import PropTypes from 'prop-types';
import makeStyles from '@material-ui/core/styles/makeStyles';
import Typography from '@material-ui/core/Typography';
import header from '../images/hsb-header.png';

const useStyles = makeStyles(theme => ({
  pageHeader: {
    position: 'relative',
    backgroundImage: `url(${header})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    height: '8rem',
  },
  title: {
    top: '40%',
    position: 'absolute',
    right: '10%',
    color: '#fff',
    [theme.breakpoints.up('sm')]: {
      top: '30%',
    },
  },
}));

export default function PageHeader({ title }) {
  const classes = useStyles();
  return (
    <div className={classes.pageHeader}>
      <Typography variant="h3" className={classes.title}>
        {title}
      </Typography>
    </div>
  );
}

PageHeader.propTypes = {
  title: PropTypes.string.isRequired,
};
