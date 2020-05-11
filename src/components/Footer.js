import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { TextField, IconButton, Button, Typography } from '@material-ui/core';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import YouTubeIcon from '@material-ui/icons/YouTube';
import EmailIcon from '@material-ui/icons/Email';
import Links from './Links';
import footer from '../images/sm-label.png';

const useStyles = makeStyles({
  footer: {
    position: 'relative',
    backgroundImage: `url(${footer})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    height: '20rem',
  },
  links: {
    position: 'absolute',
    top: '20%',
    right: '35%',
  },
  emailSocial: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    position: 'absolute',
    top: '30%',
    right: '3%',
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
});

export default function Footer() {
  const classes = useStyles();
  return (
    <div className={classes.footer}>
      <div className={classes.links}>
        <Links direction="column" />
      </div>
      <div className={classes.emailSocial}>
        <div className={classes.headline}>
          <Typography color="secondary">Sign Up for our Newsletter</Typography>
        </div>
        <div className={classes.email}>
          <TextField
            classes={{ root: classes.input }}
            id="email-signup"
            type="email"
            InputLabelProps={{ shrink: true }}
            label="Email"
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
        <div className={classes.social}>
          <IconButton color="secondary">
            <FacebookIcon />
          </IconButton>
          <IconButton color="secondary">
            <TwitterIcon />
          </IconButton>
          <IconButton color="secondary">
            <InstagramIcon />
          </IconButton>
          <IconButton color="secondary">
            <YouTubeIcon />
          </IconButton>
          <IconButton color="secondary">
            <EmailIcon />
          </IconButton>
        </div>
      </div>
    </div>
  );
}
