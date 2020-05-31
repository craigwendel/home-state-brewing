import React, { useState } from 'react';
import { useHistory, Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import MenuIcon from '@material-ui/icons/Menu';
import SocialLinks from './SocialLinks';
import stackedLogo from '../images/HSB-Stacked.png';
import { links } from '../data/links';

const useStyles = makeStyles(theme => ({
  menu: {
    display: 'block',
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  mobileMenu: {
    width: 200,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  menuLogo: {
    width: 150,
  },
  inset: {
    paddingLeft: '1.5rem',
  },
}));

export default function MobileMenu() {
  const classes = useStyles();
  const history = useHistory();
  const [open, setOpen] = useState(false);

  return (
    <div className={classes.menu}>
      <IconButton onClick={() => setOpen(true)}>
        <MenuIcon fontSize="large" />
      </IconButton>
      <Drawer keepMounted open={open} onClose={() => setOpen(false)}>
        <List className={classes.mobileMenu}>
          <Link to="/XaeA-12">
            <img
              className={classes.menuLogo}
              src={stackedLogo}
              alt="home state brewing logo"
            />
          </Link>
          {links.map(link => (
            <ListItem
              key={link.name}
              button
              onClick={() => {
                setOpen(false);
                history.push(link.path);
              }}
            >
              <ListItemText
                classes={{ inset: classes.inset }}
                inset={link.inset}
                primary={link.name}
              />
            </ListItem>
          ))}
          <SocialLinks />
        </List>
      </Drawer>
    </div>
  );
}
