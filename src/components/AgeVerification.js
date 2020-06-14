import React from 'react';
import makeStyles from '@material-ui/core/styles/makeStyles';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import SocialLinks from './SocialLinks';
import cheers from '../images/sunlight-cheers.jpg';
import stackedLogo from '../images/HSB-Stacked.png';

const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundImage: `url(${cheers})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    height: '100vh',
  },
  paper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: '3rem',
    padding: '1rem 1rem 3rem 1rem',
    backgroundColor: '#fafafae6',
  },
  headline: {
    marginBottom: '1rem',
  },
  form: {
    display: 'flex',
    alignItems: 'center',
    paddingBottom: '2rem',
  },
  formControl: {
    margin: theme.spacing(1),
    minWidth: 100,
  },
  logo: {
    width: 300,
  },
}));

export default function AgeVerification({ submitAge }) {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <Paper className={classes.paper} elevation={3}>
        <img
          className={classes.logo}
          src={stackedLogo}
          alt="Home State Brewery logo"
        />
        <Typography className={classes.headline} variant="h3" color="primary">
          Over 21?
        </Typography>
        <div className={classes.form}>
          <Button
            variant="contained"
            onClick={() => submitAge(false)}
            className={classes.formControl}
          >
            Nope
          </Button>
          <Button
            color="primary"
            variant="contained"
            onClick={() => submitAge(true)}
            className={classes.formControl}
          >
            Yep!
          </Button>
        </div>
        <SocialLinks youTube email />
      </Paper>
    </div>
  );
}
