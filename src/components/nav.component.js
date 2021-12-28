import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import Button from "@material-ui/core/Button";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import { withRouter } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux'
import {handleLogout } from '../redux/User'
import { useHistory } from "react-router";


const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    [theme.breakpoints.down("xs")]: {
      flexGrow: 1
    }
  },
  headerOptions: {
    display: "flex",
    flex: 1,
    justifyContent: "right",
    
    
  },
 
  
}));

const Navbar = ()=> {
  const user  = useSelector(state => state.user.user)
  const dispatch = useDispatch()
  const  history  = useHistory();
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("xs"));

  const handleMenu = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClick = pageURL => {
    history.push(pageURL);
    setAnchorEl(null);
  };

  const handleButtonClick = pageURL => {
    history.push(pageURL);
  };
  const handle_logout = React.useCallback ( () =>
  {dispatch(handleLogout(history))
  },[dispatch]
  
)

let menuItems
if (user){menuItems = [
  {
    menuTitle: "All-IDS",
    pageURL: "/allids"
  },
  {
    menuTitle: "Find-ID",
    pageURL: "/findid"
  },
  {
    menuTitle: "Post-ID",
    pageURL: "/postid"
  },
  {
    menuTitle: "Profile",
    pageURL: "/profile"
  },
  {
    menuTitle: "Log-Out",
    pageURL: {handle_logout}
  },
  
  
];
}else{menuItems = [
  {
    menuTitle: "Log-In",
    pageURL: "/login"
  },
  {
    menuTitle: "Sign-Up",
    pageURL: "/signup"
  },
  
];
}

let buttons;
  if (user){
    buttons = (
      
        <div >
               <Button
                  variant="contained"
                  onClick={() => handleButtonClick("/allids")}
              >
               All-IDs
              </Button>
              &nbsp;&nbsp;&nbsp;
              
              <Button
                variant="contained"
                onClick={() => handleButtonClick("/createclaim")}
              >
               CreateClaim
              </Button>
              &nbsp;&nbsp;&nbsp;
              <Button
                variant="contained"
                onClick={() => handleButtonClick("/postid")}
              >
               Post-ID
              </Button>
              &nbsp;&nbsp;&nbsp;
              <Button
                variant="contained"
                onClick={() => handleButtonClick("/profile")}
              >
              {user.username} profile
              </Button>
              &nbsp;&nbsp;&nbsp;
              <Button
                variant="contained"
                onClick={ handle_logout}
             
              >
               Log-Out
              </Button>
    
    
        </div>
      
  )
  }else{
   buttons = (
     <div>
        <Button
                  variant="contained"
                  onClick={() => handleButtonClick("/login")}
              >
                Log-In
              </Button>
              &nbsp;&nbsp;&nbsp;
              <Button
                variant="contained"
                onClick={() => handleButtonClick("/register")}
              >
               Sign-Up
              </Button>
       </div>
      )
   }


  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title} >
            Got-ya-ID 
          </Typography>
          {isMobile ? (
            <div>
              <IconButton
                edge="start"
                className={classes.menuButton}
                color="inherit"
                aria-label="menu"
                onClick={handleMenu}
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right"
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right"
                }}
                open={open}
                onClose={() => setAnchorEl(null)}
              >
                {menuItems.map(menuItem => {
                  const { menuTitle, pageURL } = menuItem;
                  return (
                    <MenuItem onClick={() => handleMenuClick(pageURL)}>
                      {menuTitle}
                    </MenuItem>
                  );
                })}
              </Menu>
            </div>
          ) : (
            <div className={classes.headerOptions} >
              {buttons}
            </div>
          )}
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default withRouter(Navbar);
