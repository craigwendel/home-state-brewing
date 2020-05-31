import React from 'react';
import { useHistory } from 'react-router-dom';
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

export default function AgeVerification() {
  const history = useHistory();
  const classes = useStyles();
  // const [date, setDate] = useState({ month: 'Jan', day: '1', year: '2020' });

  // const handleChange = event => {
  //   const { name, value } = event.target;
  //   setDate({ ...date, [name]: value });
  // };

  const submitAge = age => {
    // const twentyOne = 31536000000 * 21;
    // const birthDate = `${date.day} ${date.month} ${date.year}`;
    // const age = Date.parse(birthDate);
    if (age) {
      history.push('/XaeA-12');
    } else {
      window.open(
        'https://www.google.com/search?sxsrf=ALeKk01Mgkesn6m8yWMbedMngwZDP7WHhQ%3A1589256364297&ei=rCC6XqW7Ee2wtgWghppY&q=legal+drinking+age+in+florida&oq=legal+drinking+age+in+florida&gs_lcp=CgZwc3ktYWIQAzICCAAyAggAMgIIADIECAAQHjIECAAQHjIECAAQHjIECAAQHjIECAAQHjIGCAAQBRAeMgYIABAFEB46BAgAEEdQtixYtixg8DhoAHABeACAAUCIAUCSAQExmAEAoAEBqgEHZ3dzLXdpeg&sclient=psy-ab&ved=0ahUKEwilwbOoua3pAhVtmK0KHSCDBgsQ4dUDCAw&uact=5',
        '_self'
      );
    }
  };

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
          {/* <FormControl className={classes.formControl}>
            <InputLabel>Month</InputLabel>
            <Select name="month" value={date.month} onChange={handleChange}>
              {dates.months.map((m, i) => (
                <MenuItem key={i} value={m}>
                  {m}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <FormControl className={classes.formControl}>
            <InputLabel>Day</InputLabel>
            <Select name="day" value={date.day} onChange={handleChange}>
              {dates.days.map((d, i) => (
                <MenuItem key={i} value={d}>
                  {d}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <FormControl className={classes.formControl}>
            <InputLabel>Year</InputLabel>
            <Select name="year" value={date.year} onChange={handleChange}>
              {dates.years.map((y, i) => (
                <MenuItem key={i} value={y}>
                  {y}
                </MenuItem>
              ))}
            </Select>
          </FormControl> */}
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
