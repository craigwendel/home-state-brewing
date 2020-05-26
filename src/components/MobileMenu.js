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
}));

export default function MobileMenu() {
  const classes = useStyles();
  const history = useHistory();
  const [anchorEl, setAnchorEl] = useState(null);

  const handleMenuClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className={classes.menu}>
      <IconButton onClick={handleMenuClick}>
        <MenuIcon fontSize="large" />
      </IconButton>
      <Drawer
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleMenuClose}
      >
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
                handleMenuClose();
                history.push(link.path);
              }}
            >
              <ListItemText primary={link.name} />
            </ListItem>
          ))}
          <SocialLinks />
        </List>
      </Drawer>
    </div>
  );
}
