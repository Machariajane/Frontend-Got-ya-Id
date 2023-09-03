// Home component
import React from "react";
import { useSelector } from "react-redux";
import Avatar from "@material-ui/core/Avatar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Box from "@mui/material/Box";
import LoadingButton from "@mui/lab/LoadingButton";
import WebhookIcon from '@mui/icons-material/Webhook';
import { useHistory } from "react-router";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  button: {
    margin: theme.spacing(3, 0, 2),
    background: "#009880",
  },
}));

export const Home = () => {
  const classes = useStyles();
  const isLoading = useSelector((state) => state.user.loading);
  const history = useHistory();

  const handleClick= (e, path) => {
    localStorage.setItem("home_url" , `/${path}`)
    history.push(`/${path}`)
    }
   
  
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
      &nbsp;&nbsp;
        <Avatar className={classes.avatar}>
          <WebhookIcon />
        </Avatar>
        &nbsp;
        <Typography component="h1" variant="h5">
        What would you like to do today ? 
        </Typography>
        &nbsp;&nbsp;
        <Box component="form"  sx={{ mt: 1 }}>
       
      <LoadingButton
            onClick = {(e) => handleClick(e,"allids")}
            fullWidth
            variant="contained"
            color="inherit"
            className={classes.button}
            loading={isLoading}
          >
            Find my Id
          </LoadingButton>
         &nbsp;&nbsp;
          <LoadingButton
            onClick = {(e) => handleClick(e,"postid")}
            fullWidth
            variant="contained"
            color="inherit"
            className={classes.button}
            loading={isLoading}
          >
            Post an Id
          </LoadingButton>
        </Box>
      </div>
    </Container>
  );
};
  

