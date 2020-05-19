import React from 'react';
import PropTypes from 'prop-types';
import { useHistory, Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import {
  Toolbar,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
} from '@material-ui/core';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Fab from '@material-ui/core/Fab';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import MenuIcon from '@material-ui/icons/Menu';
import Zoom from '@material-ui/core/Zoom';
import Links from './Links';
import logo from '../images/HSB-Horizontal.png';
import stackedLogo from '../images/HSB-Stacked.png';
import { links } from '../data/links';

const useStyles = makeStyles(theme => ({
  header: {
    minHeight: 60,
    height: 64,
    position: 'fixed',
    zIndex: 100,
    backgroundColor: '#fff',
    width: '100%',
  },
  root: {
    position: 'fixed',
    bottom: theme.spacing(2),
    right: theme.spacing(2),
    zIndex: 10,
  },
  menu: {
    display: 'none',
    [theme.breakpoints.down('sm')]: {
      display: 'block',
    },
  },
  links: {
    display: 'block',
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
  },
  mobileMenu: {
    width: 200,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  logo: {
    width: 200,
    marginRight: '2rem',
  },
  menuLogo: {
    width: 150,
  },
}));

function ScrollTop(props) {
  const { children } = props;
  const classes = useStyles();
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 100,
  });

  const handleClick = event => {
    const anchor = (event.target.ownerDocument || document).querySelector(
      '#back-to-top-anchor'
    );
    if (anchor) {
      anchor.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  return (
    <Zoom in={trigger}>
      <div onClick={handleClick} role="presentation" className={classes.root}>
        {children}
      </div>
    </Zoom>
  );
}

export default function AppHeader(props) {
  const classes = useStyles();
  const history = useHistory();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleMenuClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  // let position = document.getElementById('root');

  // position.height = 0;
  // window.addEventListener('scroll', function (event) {
  //   let scroll_y = this.scrollY;
  //   // console.log(scroll_y);
  //   position.height = scroll_y;
  //   return position.height;
  // });
  // console.log(position.height > 375);

  return (
    <>
      <Toolbar variant="dense" classes={{ root: classes.header }}>
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
            </List>
          </Drawer>
        </div>
        <Link to="/XaeA-12">
          <img
            className={classes.logo}
            src={logo}
            alt="home state brewing logo"
          />
        </Link>
        <div className={classes.links}>
          <Links direction="row" header />
        </div>
      </Toolbar>
      <Toolbar id="back-to-top-anchor" />
      <ScrollTop {...props}>
        <Fab color="secondary" size="small" aria-label="scroll back to top">
          <KeyboardArrowUpIcon />
        </Fab>
      </ScrollTop>
    </>
  );
}

ScrollTop.propTypes = {
  children: PropTypes.element.isRequired,
};
