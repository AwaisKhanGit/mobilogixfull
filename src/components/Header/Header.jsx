import React,{useState} from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import swal from 'sweetalert';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { makeStyles } from '@mui/styles';
import { useLocation } from "react-router-dom"

const useStyles = makeStyles({
    appBar : {
        marginBottom : "2em"
    },
    siteHeading : {
        color : "white",
        textDecoration : "none"
    }
  });

export default function Header() {

  const user = useSelector((store) => store.user); 
  const dispatch = useDispatch();
  const classes = useStyles();
  const location = useLocation();

  const onLogOut = ()=> {
    swal({
        title: "Are you sure you want to logout?",
        icon: "warning",
        buttons: true,
        dangerMode: true,
      })
      .then((confirmLogout) => {
        if (confirmLogout) {
          dispatch({type : "LOGOUT"})
          swal("You have logged out", {
            icon: "success",
          });
        } else {
          swal("Your imaginary file is safe!");
        }
      });
  }

    return (
        <AppBar position="static" className={classes.appBar}>
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} component={Link} to = "/"
            className = {classes.siteHeading}>
                 Mobilogix Employee Manager
            </Typography>
            {user.userRole === "admin" && !location.pathname.includes("edit") &&
            <Button color="inherit" component= {Link} to = "/add">Add Employee</Button>}
            {!user._id && <Button color="inherit">Login/SignUp</Button>}
            {user._id && <Button color="inherit" onClick = {onLogOut} >Logout</Button>}
          </Toolbar>
        </AppBar>
    );
  }
