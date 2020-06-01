import React from 'react';
import useTheme from '@material-ui/core/styles/useTheme';
import useMediaQuery from '@material-ui/core/useMediaQuery';

export default function Calendar() {
  const theme = useTheme();
  const largeView = useMediaQuery(theme.breakpoints.up('sm'));

  return (
    <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
      <iframe
        title="HSB Calendar"
        src="https://calendar.google.com/calendar/embed?height=600&amp;wkst=2&amp;bgcolor=%23ffffff&amp;ctz=America%2FChicago&amp;src=d2VuZGVsY3JhaWdAZ21haWwuY29t&amp;src=YWRkcmVzc2Jvb2sjY29udGFjdHNAZ3JvdXAudi5jYWxlbmRhci5nb29nbGUuY29t&amp;src=dGhlaXJvbnlhcmQuY29tXzFqc2c0anZsZ2pvNWZ1amRqY2lpZWphY2VrQGdyb3VwLmNhbGVuZGFyLmdvb2dsZS5jb20&amp;src=ZW4udXNhI2hvbGlkYXlAZ3JvdXAudi5jYWxlbmRhci5nb29nbGUuY29t&amp;color=%231b887a&amp;color=%2333B679&amp;color=%23616161&amp;color=%230B8043&amp;showTitle=0&amp;showNav=1&amp;showPrint=0&amp;showTabs=1&amp;showCalendars=1&amp;showTz=0"
        style={{ border: 'solid 1px #777' }}
        width="90%"
        height={largeView ? '600px' : '400px'}
        frameBorder="0"
        scrolling="no"
      ></iframe>
    </div>
  );
}
