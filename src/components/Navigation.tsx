import React from 'react';
import { Link } from 'react-router-dom';
import {
  Button,
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  MenuItem,
  Menu,
} from '@material-ui/core';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    grow: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      [theme.breakpoints.up('xs')]: {
        display: 'block',
      },
      color: '#000',
    },
    inputRoot: {
      color: 'inherit',
    },
    inputInput: {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('md')]: {
        width: '20ch',
      },
    },
    sectionDesktop: {
      display: 'none',
      [theme.breakpoints.up('md')]: {
        display: 'flex',
      },
    },
    sectionMobile: {
      display: 'flex',
      [theme.breakpoints.up('md')]: {
        display: 'none',
      },
    },
  })
);

export default function Navigation() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] =
    React.useState<null | HTMLElement>(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
    </Menu>
  );

  // THIS IS THE MOBILE MENU
  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
        <Link to="/">
          <Button variant="text" color="primary" size="small" className="ml-1">
            Credit Cards
          </Button>
        </Link>
      </MenuItem>
      <MenuItem>
        <Link to="/">
          <Button variant="text" color="primary" size="small" className="ml-1">
            Education
          </Button>
        </Link>
      </MenuItem>
      <MenuItem>
        <Link to="/">
          <Button variant="text" color="primary" size="small" className="ml-1">
            Stacks
          </Button>
        </Link>
      </MenuItem>
      <MenuItem>
        <Link to="/">
          <Button variant="text" color="primary" size="small" className="ml-1">
            How It Works
          </Button>
        </Link>
      </MenuItem>
      <MenuItem>
        <Link to="/">
          <Button variant="text" color="primary" size="small" className="ml-1">
            Referrals
          </Button>
        </Link>
      </MenuItem>
      <MenuItem>
        <Link to="/">
          <Button variant="text" size="small" color="primary" className="ml-1">
            Contact
          </Button>
        </Link>
      </MenuItem>
      <MenuItem>
        <Link to="/signup">
          <Button variant="contained" color="primary">
            Signup
          </Button>
        </Link>
      </MenuItem>
      <MenuItem>
        <Link to="/login">
          <Button variant="contained" color="primary">
            Login
          </Button>
        </Link>
      </MenuItem>
    </Menu>
  );

  return (
    <div className="my-3" style={{ flexGrow: 1 }}>
      <AppBar position="static" style={{ backgroundColor: 'mintcream' }}>
        <Toolbar>
          <Typography className={classes.title} variant="h6" noWrap>
            PlentyPay
          </Typography>
          <div className={classes.grow} />
          <div className={classes.sectionDesktop}>
            <Link to="/">
              <Button
                variant="text"
                color="primary"
                size="small"
                className="ml-1"
              >
                Credit Cards
              </Button>
            </Link>
            <Link to="/">
              <Button
                variant="text"
                color="primary"
                size="small"
                className="ml-1"
              >
                Education
              </Button>
            </Link>
            <Link to="/">
              <Button
                variant="text"
                color="primary"
                size="small"
                className="ml-1"
              >
                Stacks
              </Button>
            </Link>
            <Link to="/">
              <Button
                variant="text"
                color="primary"
                size="small"
                className="ml-1"
              >
                How It Works
              </Button>
            </Link>
            <Link to="/">
              <Button
                variant="text"
                color="primary"
                size="small"
                className="ml-1"
              >
                Referrals
              </Button>
            </Link>
            <Link to="/">
              <Button
                variant="text"
                size="small"
                color="primary"
                className="ml-1"
              >
                Contact
              </Button>
            </Link>
            <Link to="/signup">
              <Button
                variant="contained"
                size="small"
                color="primary"
                className="ml-1"
              >
                Signup
              </Button>
            </Link>
            <Link to="/login">
              <Button
                variant="contained"
                size="small"
                color="primary"
                className="ml-1"
              >
                Login
              </Button>
            </Link>
          </div>
          <div className={classes.sectionMobile}>
            <IconButton
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="primary"
            >
              <MenuIcon />
            </IconButton>
          </div>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
    </div>
  );
}
