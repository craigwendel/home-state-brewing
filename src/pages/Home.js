import React, { useState, useEffect } from 'react';
import makeStyles from '@material-ui/core/styles/makeStyles';
import Dialog from '@material-ui/core/Dialog';
import Divider from '@material-ui/core/Divider';
import AgeVerification from '../components/AgeVerification';
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
  useEffect(() => {
    if (window.scrollY !== 0) {
      window.scrollTo(0, 0);
    }
  }, []);

  const classes = useStyles();
  const [age, setAge] = useState(false);
  const over21 = localStorage.getItem('over21') || age;

  const submitAge = age => {
    if (age) {
      localStorage.setItem('over21', true);
      setAge(true);
    } else {
      window.open(
        'https://www.google.com/search?sxsrf=ALeKk01Mgkesn6m8yWMbedMngwZDP7WHhQ%3A1589256364297&ei=rCC6XqW7Ee2wtgWghppY&q=legal+drinking+age+in+florida&oq=legal+drinking+age+in+florida&gs_lcp=CgZwc3ktYWIQAzICCAAyAggAMgIIADIECAAQHjIECAAQHjIECAAQHjIECAAQHjIECAAQHjIGCAAQBRAeMgYIABAFEB46BAgAEEdQtixYtixg8DhoAHABeACAAUCIAUCSAQExmAEAoAEBqgEHZ3dzLXdpeg&sclient=psy-ab&ved=0ahUKEwilwbOoua3pAhVtmK0KHSCDBgsQ4dUDCAw&uact=5',
        '_self'
      );
    }
  };

  return (
    <>
      {!over21 ? (
        <Dialog fullScreen open={!over21}>
          <AgeVerification submitAge={submitAge} />
        </Dialog>
      ) : (
        <Page>
          <Hero />
          <OurBeers />
          <Divider className={classes.divider} />
          <OurMission />
          <Divider className={classes.divider} />
          <Map />
        </Page>
      )}
    </>
  );
}
