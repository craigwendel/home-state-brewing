import React from 'react';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Page from '../components/Page';
import OurBeers from '../components/OurBeers';
import Map from '../components/Map';

const useStyles = makeStyles({
  logo: {
    width: '20%',
  },
});

export default function Home() {
  const classes = useStyles();
  return (
    <Page>
      <OurBeers />
      <Map />
    </Page>
  );
}
