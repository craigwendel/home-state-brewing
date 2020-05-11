import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Divider } from '@material-ui/core';
import Page from '../components/Page';
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
      <OurMission />
      <Divider className={classes.divider} />
      <OurBeers />
      <Divider className={classes.divider} />
      <Map />
    </Page>
  );
}
