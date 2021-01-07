import React from 'react';
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Switch from '@material-ui/core/Switch';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormGroup from '@material-ui/core/FormGroup';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import Button from '@material-ui/core/Button';
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

// class Navbar extends React.Component {
//     constructor(){
//         super();
//         this.state = {
//             anchorEl: null,
//             open: false,
//         };
//         this.handleClose = this.handleClose.bind(this);
//         this.handleMenu = this.handleMenu.bind(this);
//     }
//     handleClose(){
//         this.setState({anchorEl: null, open: false});
//     }

//     handleMenu(event){
//         this.setState({ anchorEl: event.currentTarget, open: true })
//     }

//     render(){
//         const classes = useStyles();
//         return (
//             <div>
//                 <AppBar position="static">
//                     <Toolbar>
//                     <IconButton edge="start"  color="inherit" aria-label="menu">
//                         <MenuIcon />
//                     </IconButton>
//                     <Typography variant="h6">
//                         Requisition Reddit
//                     </Typography>
//                     {this.props.user && (
//                         <div>
//                         <IconButton
//                             aria-label="account of current user"
//                             aria-controls="menu-appbar"
//                             aria-haspopup="true"
//                             onClick={handleMenu}
//                             color="inherit"
//                         >
//                             <AccountCircle />
//                         </IconButton>
//                         <Menu
//                             id="menu-appbar"
//                             anchorEl={anchorEl}
//                             anchorOrigin={{
//                             vertical: 'top',
//                             horizontal: 'right',
//                             }}
//                             keepMounted
//                             transformOrigin={{
//                             vertical: 'top',
//                             horizontal: 'right',
//                             }}
//                             open={open}
//                             onClose={handleClose}
//                         >
//                             <MenuItem onClick={handleClose}>Profile</MenuItem>
//                             <MenuItem onClick={handleClose}>My account</MenuItem>
//                             <MenuItem onClick={handleClose}>Logout</MenuItem>
//                         </Menu>
//                         </div> )}
//                     </Toolbar>
//                 </AppBar>
//             </div>
//         )
//     }
// }

// const mapState = (state) => ({
//     user: state.user
// })

// export default connect(mapState, null)(Navbar); 


function Navbar(props) {
    const classes = useStyles();
    const [auth, setAuth] = React.useState(true);
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const { user } = props;

    const handleChange = (event) => {
        setAuth(event.target.checked);
    };

    const handleMenu = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = (action) => {
        setAnchorEl(null);
        switch(action){
            case 'logout':
                props.logout();
            default:
                return;
        }
    };

    return (
        <div className={classes.root}>
        {/* <FormGroup>
            <FormControlLabel
            control={<Switch checked={auth} onChange={handleChange} aria-label="login switch" />}
            label={auth ? 'Logout' : 'Login'}
            />
        </FormGroup> */}
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
                    <MenuItem onClick={handleClose}>Profile</MenuItem>
                    <MenuItem onClick={handleClose}>My account</MenuItem>
                    <MenuItem onClick={() => handleClose('logout')}>Logout</MenuItem>
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
    const history = ownProps.history;
    return {
        logout: () => {dispatch(logout()); history.push('/');}
    } 
}

export default connect(mapState, mapDispatch)(Navbar);