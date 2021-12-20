import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { fade, makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import AccountCircle from '@material-ui/icons/AccountCircle';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';

import useMediaQuery from '@material-ui/core/useMediaQuery';

import { AuthContext } from 'hooks/Auth';


const useStyles = makeStyles((theme) => ({
  grow: {
    flexGrow: 1,
  },
  root: {
    background: 'rgb(252, 238, 9)',
    color: 'black',
  },
  menuButton: {
    marginLeft: theme.spacing(2),
    marginRight: theme.spacing(2),
  },
  title: {
    fontFamily: 'CyberSans',
    fontSize: 40,
    fontWeight: 100,
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(10),
      marginRight: theme.spacing(10),
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
  sectionDesktop: {
    maxWidth: '1200px',
  },
  categories : {
    flexDirection: 'column',
    justifyContent: 'center',
  },
  categoriesDesktop : {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  categoriesTitle : {
    fontSize: 17,
	  fontFamily: ['BlenderProBold','sans-serif'].join(','),
  }
}));


const MenuAppBar = () => {
  const navigate = useNavigate();
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const isMenuOpen = Boolean(anchorEl);

  const {logout, user} = useContext(AuthContext);

  const desktop = useMediaQuery('(min-width:800px)');

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleProfileMenuClick = (e, pageRoute) => {
    e.preventDefault();
    navigate(pageRoute);
  };

  const handleLogout = (e) => {
    e.preventDefault();
    logout();
    setAnchorEl(null);
    navigate('/');
  }
  
  const menuId = 'primary-search-account-menu';  
  const menuUserLoggedIn = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMenuOpen}
      onClose={() => setAnchorEl(null)}
      style={{
        color: 'black',}}
    >
      <MenuItem onClick={(e) => handleProfileMenuClick(e, '/account')}>Account</MenuItem>
      <MenuItem style={{color: "red"}} onClick={(e) => handleLogout(e)}>Logout</MenuItem>
    </Menu>
  );

  const menuUserLoggedOut = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      id={menuId}
      keepMounted
      transformOrigin={{ vertical: 'top', horizontal: 'right' }}
      open={isMenuOpen}
      onClose={() => setAnchorEl(null)}
    >
      <MenuItem onClick={(e) => handleProfileMenuClick(e, '/login')}>Login</MenuItem>
      <MenuItem onClick={(e) => handleProfileMenuClick(e, '/register')}>Register</MenuItem>
    </Menu>
  );

  return (
    <div className={classes.grow}>
      <AppBar position="static" className={classes.root}>
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            onClick={(e) => handleProfileMenuClick(e, '/')}
          >
            <Typography className={classes.title} variant="h6" noWrap>
              CyberBook
            </Typography>
          </IconButton>
          
          {/* Search bar has to be posponed */}
          
          {/* <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
            />
          </div> */}

          <div className={classes.grow} />
          <IconButton aria-label="cart" 
                      color="inherit">
          </IconButton>
          <IconButton
            edge="end"
            aria-label="account of current user"
            aria-controls={menuId}
            aria-haspopup="true"
            onClick={handleProfileMenuOpen}
            color="inherit"
            className={classes.menuButton}
          >
            <AccountCircle />
          </IconButton>
        </Toolbar>

        <Toolbar align="center" className={desktop ? classes.categoriesDesktop : classes.categories }>
          
          <IconButton
                color="inherit"
                aria-label="open drawer"
                onClick={(e) => handleProfileMenuClick(e, '/')}
            >
              <Typography className={classes.categoriesTitle}>
                News
              </Typography> 
          </IconButton>
          
          <IconButton
                color="inherit"
                aria-label="open drawer"
                onClick={(e) => handleProfileMenuClick(e, '/books')}
            >
              <Typography className={classes.categoriesTitle}>
                Books 
              </Typography> 
          </IconButton>

          {user && 
            <>
              <IconButton
                    color="inherit"
                    aria-label="open drawer"
                    onClick={(e) => handleProfileMenuClick(e, '/users')}
                >
                  <Typography className={classes.categoriesTitle}>
                    Users 
                  </Typography> 
              </IconButton>
              
              <IconButton
                    color="inherit"
                    aria-label="open drawer"
                    onClick={(e) => handleProfileMenuClick(e, '/followed')}
                >
                  <Typography className={classes.categoriesTitle}>
                    Followed 
                  </Typography> 
              </IconButton>
            </>}

        </Toolbar>
      </AppBar>
      { user ? menuUserLoggedIn : menuUserLoggedOut }
    </div>
  );
}

export default MenuAppBar;