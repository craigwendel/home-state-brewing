import React from 'react';
import makeStyles from '@material-ui/core/styles/makeStyles';
import useTheme from '@material-ui/core/styles/useTheme';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import DrinkIcon from '@material-ui/icons/LocalDrink';
import FastfoodIcon from '@material-ui/icons/Fastfood';
import LocalBarIcon from '@material-ui/icons/LocalBar';
import PetsIcon from '@material-ui/icons/Pets';
import BaseballIcon from '@material-ui/icons/SportsBaseball';
import SingleBeer from './SingleBeer';

const useStyles = makeStyles(theme => ({
  tabContainer: {
    display: 'grid',
    gridTemplateColumns: '200px 1fr',
    height: 400,
    [theme.breakpoints.down('sm')]: {
      display: 'block',
      height: 800,
    },
    [theme.breakpoints.between('sm', 'md')]: {
      height: 500,
    },
  },
  tabs: {
    borderRight: `1px solid ${theme.palette.divider}`,
  },
  indicator: {
    width: 5,
  },
  selected: {
    backgroundColor: '#244f7080',
  },
}));

export default function OurBeersTabs() {
  const classes = useStyles();
  const theme = useTheme();
  const mobile = useMediaQuery(theme.breakpoints.down('sm'));

  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.tabContainer}>
      <Tabs
        classes={{ indicator: classes.indicator }}
        orientation={mobile ? 'horizontal' : 'vertical'}
        scrollButtons="auto"
        value={value}
        onChange={handleChange}
        aria-label="Our Beers"
        className={classes.tabs}
      >
        <Tab
          classes={{ selected: classes.selected }}
          label="Hat Trick"
          icon={<DrinkIcon />}
        />
        <Tab
          classes={{ selected: classes.selected }}
          label="Picken Chickle"
          icon={<FastfoodIcon />}
        />
        <Tab
          classes={{ selected: classes.selected }}
          label="Hoptopuss"
          icon={<LocalBarIcon />}
        />
        <Tab
          classes={{ selected: classes.selected }}
          label="Buckle Bunny"
          icon={<PetsIcon />}
        />
        <Tab
          classes={{ selected: classes.selected }}
          label="Glorioso"
          icon={<BaseballIcon />}
        />
      </Tabs>
      <SingleBeer value={value} />
    </div>
  );
}
