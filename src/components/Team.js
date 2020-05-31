import React from 'react';
import makeStyles from '@material-ui/core/styles/makeStyles';
import Typography from '@material-ui/core/Typography';
import colin from '../images/colin.png';
import lexi from '../images/lexi.png';
import aj from '../images/aj.png';

const useStyles = makeStyles(theme => ({
  container: {
    padding: '3rem 0rem',
  },
  team: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    [theme.breakpoints.down('sm')]: {
      gridTemplateColumns: '1fr',
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

export default function Team() {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <div className={classes.team}>
        <div className={classes.card}>
          <img className={classes.image} src={colin} alt="" />
          <Typography variant="h4" color="primary">
            Colin Vanatta
          </Typography>
          <Typography variant="h6" color="secondary">
            Founder / Head Brewmaster
          </Typography>
          <Typography>
            Insert some cool information here about Colin. I'm sure we'll come
            up with something great to fill this out besides the same old Lorem
            ipsum dolor sit amet consectetur adipisicing elit. Molestiae,
            doloribus sint. Nam aliquam eaque asperiores atque omnis consequatur
            accusamus eligendi quo optio, mollitia fugiat odio deserunt, aut
            consequuntur reiciendis magni!
          </Typography>
        </div>
        <div className={classes.card}>
          <img className={classes.image} src={lexi} alt="" />
          <Typography variant="h4" color="primary">
            Lexi Vanatta
          </Typography>
          <Typography variant="h6" color="secondary">
            Founder
          </Typography>
          <Typography>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi
            libero, excepturi eius porro odio totam nam id vel quod repellendus
            aliquid officiis nihil sequi consequuntur doloribus illum vitae
            ipsam temporibus?
          </Typography>
        </div>
        <div className={classes.card}>
          <img className={classes.image} src={aj} alt="" />
          <Typography variant="h4" color="primary">
            AJ Alix
          </Typography>
          <Typography variant="h6" color="secondary">
            Founder
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
