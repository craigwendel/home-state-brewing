import React from 'react';
import makeStyles from '@material-ui/core/styles/makeStyles';
import Typography from '@material-ui/core/Typography';
import Page from '../components/Page';
import PageHeader from '../components/PageHeader';
import Calendar from '../components/Calendar';
import brewery from '../images/yellow-belly.jpg';

const useStyles = makeStyles(theme => ({
  imageText: {
    display: 'flex',
    alignItems: 'center',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
    },
  },
  image: {
    width: 400,
    margin: '1rem',
  },
  type: {
    margin: '1rem',
  },
}));

export default function About() {
  const classes = useStyles();
  return (
    <Page>
      <PageHeader title="Our Brewery" />
      <div className={classes.imageText}>
        <img
          className={classes.image}
          src={brewery}
          alt="yellow belly brewery building"
        />
        <Typography className={classes.type}>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eveniet
          molestiae officia ea numquam similique debitis, vel alias quas nulla
          voluptate eaque aliquid dolorum ipsam, deleniti unde quidem esse
          placeat cumque? Lorem ipsum dolor sit, amet consectetur adipisicing
          elit. Iste dolorem amet harum, placeat sapiente deleniti neque
          incidunt, illo inventore sunt atque consectetur quas aperiam unde
          ipsam minus beatae odio. Ratione?
        </Typography>
      </div>
      <Typography className={classes.type} variant="h4" color="primary">
        Brewery Events
      </Typography>
      <Calendar />
    </Page>
  );
}
