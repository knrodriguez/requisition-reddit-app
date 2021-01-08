import React from 'react';
import { connect } from 'react-redux';
import { Link, Redirect } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, Typography, IconButton, MenuItem, Menu, Button } from '@material-ui/core';
import AccountCircle from '@material-ui/icons/AccountCircle';
import { logout } from '../reducers/userReducer';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
  }));

function Navbar(props) {
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const { user } = props;

    const handleMenu = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = (action) => {
        switch(action){
            case 'logout':
                props.logout();
                break;
            default:
                break;
        }
        setAnchorEl(null);
    };

    return (
        <div id='navbar' className={`${classes.root}`}>
        <AppBar position="static">
            <Toolbar>
            <Typography variant="h6" className={classes.title}>
                Requisition Reddit
            </Typography>
            { user.id ?  (
                <div>
                <IconButton
                    aria-label="account of current user"
                    aria-controls="menu-appbar"
                    aria-haspopup="true"
                    onClick={handleMenu}
                    color="inherit"
                >
                    <AccountCircle />
                </IconButton>
                <Menu
                    id="menu-appbar"
                    anchorEl={anchorEl}
                    anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                    }}
                    keepMounted
                    transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                    }}
                    open={open}
                    onClose={handleClose}
                >
                    <MenuItem component={Link} to='/posts' onClick={handleClose}>Posts</MenuItem>
                    <MenuItem onClick={handleClose}>My Profile</MenuItem>
                    <MenuItem component={Link} to='/' onClick={() => handleClose('logout')}>Logout</MenuItem>
                </Menu>
                </div>
            ) : (
                <Button color="inherit" href={`/`}>Home</Button>
            ) }
            </Toolbar>
        </AppBar>
        </div>
    );
}

const mapState = (state) => ({
    user: state.user
})

const mapDispatch = (dispatch, ownProps) => {
    return {
        logout: () => dispatch(logout())
    } 
}

export default connect(mapState, mapDispatch)(Navbar);