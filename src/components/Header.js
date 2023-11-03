// React imports
import { useState } from 'react';

// React Router imports
import { NavLink } from 'react-router-dom';

// Material-UI imports
import {
  AppBar,
  Grid,
  makeStyles,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';

// Style imports
import '../assets/styles/Header.css';

const useStyles = makeStyles((theme) => ({
  toolbar: {
    backgroundColor: '#072b11',
    padding: '1rem',
    justifyContent: 'space-between',
  },
  nav: {
    display: 'flex',
  },
  menuItem: {
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
  },
  menuIcon: {
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
    '&:hover': {
      cursor: 'pointer',
    },
  },
  siteName: {
    color: '#bee8c9',
    [theme.breakpoints.down('xs')]: {
      fontSize: '1.5rem',
    },
  },
}));

export const Header = () => {
  const classes = useStyles();

  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const mobileLinkStyle = {
    color: '#4e1294',
    textDecoration: 'none',
  };

  return (
    <AppBar position='static'>
      <Toolbar className={classes.toolbar}>
        <Typography
          variant='h3'
          component='p'
          className={classes.siteName}
          noWrap
        >
          Rebecca Roos
        </Typography>
        <Grid component='nav' className={classes.nav}>
          <NavLink
            to='/'
            className={({ isActive }) => (isActive ? 'active' : 'inactive')}
          >
            <MenuItem className={classes.menuItem}>About Me</MenuItem>
          </NavLink>
          <NavLink
            to='/portfolio'
            className={({ isActive }) => (isActive ? 'active' : 'inactive')}
          >
            <MenuItem className={classes.menuItem}>Portfolio</MenuItem>
          </NavLink>
          <NavLink
            to='/resume'
            className={({ isActive }) => (isActive ? 'active' : 'inactive')}
          >
            <MenuItem className={classes.menuItem}>Resume</MenuItem>
          </NavLink>
          <NavLink
            to='/contact'
            className={({ isActive }) => (isActive ? 'active' : 'inactive')}
          >
            <MenuItem className={classes.menuItem}>Contact</MenuItem>
          </NavLink>
          <MenuIcon
            className={classes.menuIcon}
            aria-controls='mobile-menu'
            aria-haspopup='true'
            onClick={handleClick}
          ></MenuIcon>
          <Menu
            id='mobile-menu'
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <NavLink to='/' style={mobileLinkStyle}>
              <MenuItem onClick={handleClose}>About Me</MenuItem>
            </NavLink>
            <NavLink to='/portfolio' style={mobileLinkStyle}>
              <MenuItem onClick={handleClose}>Portfolio</MenuItem>
            </NavLink>
            <NavLink to='/resume' style={mobileLinkStyle}>
              <MenuItem onClick={handleClose}>Resume</MenuItem>
            </NavLink>
            <NavLink to='/contact' style={mobileLinkStyle}>
              <MenuItem onClick={handleClose}>Contact</MenuItem>
            </NavLink>
          </Menu>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
