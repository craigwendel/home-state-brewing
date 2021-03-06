import React from 'react';
import makeStyles from '@material-ui/core/styles/makeStyles';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Links from './Links';
import SocialLinks from './SocialLinks';
import label from '../images/label.png';

const useStyles = makeStyles(theme => ({
  footer: {
    display: 'grid',
    gridTemplateColumns: '200px 100px 300px',
    gridGap: '1rem',
    alignItems: 'center',
    height: 250,
    width: '100%',
    backgroundColor: '#16334B',
    [theme.breakpoints.down('xs')]: {
      gridTemplateColumns: '100px 1fr',
      gridGap: '0rem',
    },
  },
  image: {
    width: 200,
    height: 250,
    display: 'block',
    [theme.breakpoints.down('xs')]: {
      display: 'none',
    },
  },
  emailSocial: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  headline: {
    color: '#fff',
    margin: '0.25rem',
  },
  email: {
    display: 'flex',
    alignItems: 'center',
    margin: '0.25rem',
  },
  input: {
    '& fieldset': {
      borderColor: '#fafafa80',
    },
    '& input': {
      color: '#fff',
    },
  },
  button: {
    margin: '0.5rem',
  },
  social: {
    margin: '0.25rem',
  },
  newsletter: {
    color: '#fff',
  },
}));

export default function Footer() {
  const classes = useStyles();
  return (
    <div className={classes.footer}>
      <img
        className={classes.image}
        src={label}
        alt="home state brewing label"
      />
      <div className={classes.links}>
        <Links direction="column" />
      </div>
      <div className={classes.emailSocial}>
        <div className={classes.headline}>
          <Typography className={classes.newsletter}>
            Sign Up below to join the HSB Family!
          </Typography>
        </div>
        <div className={classes.email}>
          <TextField
            classes={{ root: classes.input }}
            id="email-signup"
            type="email"
            variant="outlined"
            color="secondary"
            size="small"
          />
          <Button
            className={classes.button}
            variant="contained"
            color="secondary"
          >
            Join
          </Button>
        </div>
        <SocialLinks color="secondary" youTube email />
      </div>
    </div>
  );
}
