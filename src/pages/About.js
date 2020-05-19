import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import Page from '../components/Page';
import PageHeader from '../components/PageHeader';
import stackedLogo from '../images/HSB-Stacked.png';

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
      <PageHeader title="About" />
      <Typography
        className={classes.type}
        variant="h3"
        color="primary"
        align="center"
      >
        Our Story
      </Typography>
      <div className={classes.imageText}>
        <img className={classes.image} src={stackedLogo} alt="" />
        <Typography className={classes.type}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque,
          iusto consectetur, alias voluptate dolorem similique dignissimos eaque
          assumenda culpa eum nesciunt hic accusamus fugiat harum laudantium!
          Error voluptatibus quasi impedit? Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Est, quas quaerat? Id, nulla. Totam
          soluta quam, quia sit ad possimus aspernatur, aliquid quis consectetur
          repellat ut nobis, et quisquam maiores.
        </Typography>
      </div>
      <Typography className={classes.type}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt,
        deleniti eum. Sint illo suscipit iusto doloremque. Maiores enim
        corporis, sit quaerat, delectus provident officiis quo doloribus vero
        exercitationem reprehenderit distinctio.
      </Typography>
      <Typography className={classes.type}>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Obcaecati
        dolores a sapiente quod aliquam commodi, amet nisi numquam consequatur
        rem! Natus quas quia aperiam quo saepe laboriosam aliquam expedita
        nihil. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sit
        consequuntur, laudantium vero consectetur dolor commodi magni! Possimus
        expedita illo eos quidem perspiciatis nihil voluptates dicta dolores
        consequuntur? Culpa, cum aut?
      </Typography>
    </Page>
  );
}
