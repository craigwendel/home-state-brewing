import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Paper, Typography } from '@material-ui/core';

const useStyles = makeStyles({
  map: {
    position: 'relative',
    padding: '3rem 0rem',
  },
  paper: {
    position: 'absolute',
    top: '15%',
    right: '5%',
    height: 250,
    width: 300,
    padding: '1rem',
    backgroundColor: '#f5f5f5cc',
  },
  type: {
    marginBottom: '0.5rem',
  },
});
export default function Map() {
  const classes = useStyles();
  return (
    <div className={classes.map}>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3507.1793811207294!2d-81.62802758495236!3d28.474143997982775!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjjCsDI4JzI2LjkiTiA4McKwMzcnMzMuMCJX!5e0!3m2!1sen!2sus!4v1589165328518!5m2!1sen!2sus"
        width="100%"
        height="450"
        frameBorder="0"
        style={{ border: 0 }}
        allowFullScreen=""
        aria-hidden="false"
        tabIndex="0"
        title="HSB"
      ></iframe>
      <Paper elevation={3} className={classes.paper}>
        <Typography align="center" color="primary" variant="h5">
          Visit Us!
        </Typography>
        <Typography className={classes.type}>
          We're locacted on the corner of casa and domum
        </Typography>
        <Typography variant="h6" color="primary">
          Home State Brewery
        </Typography>
        <Typography>1 Big Beer</Typography>
        <Typography className={classes.type}>Orlando, FL 34787</Typography>
        <Typography variant="body2">beer_me@homestatebrewery.com</Typography>
        <Typography variant="body2">1-800-555-BEER</Typography>
      </Paper>
    </div>
  );
}
