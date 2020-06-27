import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import makeStyles from '@material-ui/core/styles/makeStyles';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Alert from '@material-ui/lab/Alert';
import AlertTitle from '@material-ui/lab/AlertTitle';
import brewery from '../images/brewery-cs.jpg';

const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    alignItems: 'center',
    backgroundImage: `url(${brewery})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    height: '100vh',
    [theme.breakpoints.down('xs')]: {
      height: '140vh',
    },
  },
  flex: {
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'center',
    [theme.breakpoints.down('xs')]: {
      flexDirection: 'column',
      alignItems: 'center',
    },
  },
  info: {
    width: '50%',
    display: 'grid',
    gridTemplateColumns: '1fr',
    gridGap: '0.5rem',
    margin: '1rem',
    [theme.breakpoints.down('xs')]: {
      width: '85%',
    },
  },
  mainText: {
    color: '#fff',
    fontWeight: 600,
    textShadow: `0 0 5px ${theme.palette.primary.main}`,
    marginTop: '1rem',
  },
  secText: {
    color: '#fff',
    textShadow: `0 0 5px ${theme.palette.primary.main}`,
  },
  signUp: {
    width: '40%',
    backgroundColor: '#fafafacc',
    padding: '5% 3%',
    margin: '1rem',
    display: 'grid',
    gridTemplateColumns: '1fr',
    gridGap: '0.5rem',
    [theme.breakpoints.down('xs')]: {
      width: '85%',
    },
  },
  upcoming: {
    margin: '1rem 0rem',
  },
  homeButton: {
    position: 'absolute',
    bottom: '5%',
    left: '2%',
    [theme.breakpoints.down('xs')]: {
      bottom: '-38%',
    },
  },
}));

export default function ComingSoon() {
  const classes = useStyles();
  const history = useHistory();
  const [contact, setContact] = useState({
    firstName: '',
    lastName: '',
    email: '',
  });
  const [upcoming, setUpcoming] = useState(true);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = e => {
    const { id, value } = e.target;
    setContact({ ...contact, [id]: value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className={classes.container}>
      <div className={classes.flex}>
        <div className={classes.info}>
          <Typography classes={{ root: classes.mainText }} variant="h2">
            Welcome to Home State Brewing!
          </Typography>
          <Typography variant="h4" classes={{ root: classes.secText }}>
            We're brewing up a few things right now but hope to see you soon!
          </Typography>
        </div>
        <div className={classes.signUp}>
          <Typography variant="h6">
            Sign up for our newsletter below to take advantage of exclusive
            offers as an initial member!
          </Typography>
          {submitted ? (
            <Alert severity="success">
              <AlertTitle>{`Thanks, ${contact.firstName}!`}</AlertTitle>
              Be sure to check out you email for everything Home State Brewing!
              We can't wait to see you soon!
            </Alert>
          ) : (
            // <form noValidate onSubmit={handleSubmit}>
            <form
              action="https://surge.us10.list-manage.com/subscribe/post"
              method="POST"
              onSubmit={handleSubmit}
            >
              <input type="hidden" name="u" value="59a1407f9880c3c0900d846a7" />
              <input type="hidden" name="id" value="2c29eae0ae" />
              <TextField
                autoComplete="fname"
                variant="outlined"
                margin="normal"
                required
                fullWidth
                name="MERGE1"
                id="firstName"
                value={contact.firstName}
                onChange={handleChange}
                label="First Name"
              />
              <TextField
                autoComplete="lname"
                variant="outlined"
                margin="normal"
                required
                fullWidth
                name="MERGE2"
                id="lastName"
                value={contact.lastName}
                onChange={handleChange}
                label="Last Name"
              />
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                name="MERGE0"
                id="email"
                value={contact.email}
                onChange={handleChange}
                label="Email Address"
                type="email"
                autoComplete="email"
              />
              <FormControlLabel
                className={classes.upcoming}
                control={
                  <Checkbox
                    checked={upcoming}
                    onChange={() => setUpcoming(!upcoming)}
                    color="primary"
                  />
                }
                label="Keep me up to date on important upcoming events!"
              />
              <Button
                disabled={!contact.email}
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
              >
                Submit
              </Button>
            </form>
          )}
        </div>
      </div>
      <Button
        onClick={() => history.push('/XaeA-12')}
        className={classes.homeButton}
        variant="contained"
        color="primary"
      >
        Home
      </Button>
    </div>
  );
}
