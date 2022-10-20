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
  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <WebhookIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
        What would you like to do today ? 
        </Typography>
        
        <Box component="form"  sx={{ mt: 1 }}>
       
      <LoadingButton
            href="/allids"
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
            href="/postid"
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
  

