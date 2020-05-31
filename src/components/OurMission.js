import React from 'react';
import makeStyles from '@material-ui/core/styles/makeStyles';
import Typography from '@material-ui/core/Typography';
import brewer from '../images/brewer.jpg';
import cheers from '../images/beer-cheers.jpg';
import fun from '../images/beer-bench-smiles.jpg';

const useStyles = makeStyles(theme => ({
  container: {
    padding: '3rem 0rem',
  },
  mission: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    [theme.breakpoints.down('sm')]: {
      flexDirection: 'column',
    },
  },
  card: {
    margin: '1rem',
    padding: '1rem',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  image: {
    borderRadius: '50%',
    width: 200,
    height: 200,
    marginBottom: '1rem',
  },
}));

export default function OurMission() {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <div className={classes.mission}>
        <div className={classes.card}>
          <img className={classes.image} src={brewer} alt="" />
          <Typography variant="h4" color="primary">
            Brew the Greatest Beer
          </Typography>
          <Typography>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ullam
            voluptas at aut, maxime mollitia neque fuga. Facilis recusandae
            inventore dolor aut architecto. Nulla nihil praesentium itaque.
            Officiis harum voluptate non?
          </Typography>
        </div>
        <div className={classes.card}>
          <img className={classes.image} src={cheers} alt="" />
          <Typography variant="h4" color="primary">
            Craft the Community
          </Typography>
          <Typography>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi
            libero, excepturi eius porro odio totam nam id vel quod repellendus
            aliquid officiis nihil sequi consequuntur doloribus illum vitae
            ipsam temporibus?
          </Typography>
        </div>
        <div className={classes.card}>
          <img className={classes.image} src={fun} alt="" />
          <Typography variant="h4" color="primary">
            Have Fun in the Process
          </Typography>
          <Typography>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
            Repellendus atque consequuntur ad veritatis eligendi, dignissimos
            possimus at unde ipsa neque ducimus, eius explicabo ea, itaque
            tempora et! Incidunt, iure nostrum!
          </Typography>
        </div>
      </div>
    </div>
  );
}
