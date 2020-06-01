import React from 'react';
import makeStyles from '@material-ui/core/styles/makeStyles';
import Divider from '@material-ui/core/Divider';
import Page from '../components/Page';
import Hero from '../components/Hero';
import OurMission from '../components/OurMission';
import OurBeers from '../components/OurBeers';
import Map from '../components/Map';

const useStyles = makeStyles({
  divider: {
    width: '90%',
    marginLeft: '5%',
    backgroundColor: '#244f70de',
  },
});

export default function Home() {
  const classes = useStyles();
  return (
    <Page>
      <Hero />
      <OurBeers />
      <Divider className={classes.divider} />
      <OurMission />
      <Divider className={classes.divider} />
      <Map />
    </Page>
  );
}
