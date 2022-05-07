// This compoenent is the register UI
import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { registerUser } from '../../redux/User'
import {useHistory} from 'react-router'
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Alert from '@material-ui/lab/Alert';


  const useStyles = makeStyles((theme) => ({
    paper: {
      marginTop: theme.spacing(8),
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    avatar: {
      margin: theme.spacing(1),
      backgroundColor: theme.palette.secondary.main,
    },
    form: {
      width: '100%', // Fix IE 11 issue.
      marginTop: theme.spacing(3),
    },
    button: {
      margin: theme.spacing(3, 0, 2),
      background: '#009880',
    },
  }));


export const Register = () =>{
    const [username,setUsername] = useState ()
    const [email,setEmail] = useState ()
    const [password,setPassword] = useState ()
    const dispatch = useDispatch()
    const history = useHistory()
    const error  = useSelector(state => state.user.error)
    const classes = useStyles();
    
    const handleSubmit = React.useCallback ( (e) =>
        {e.preventDefault() 
            dispatch(registerUser({username,email,password},history))
        },[dispatch,username,email,password,history]
    )
    return (
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <div className={classes.paper}>
            <Avatar className={classes.avatar}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign up
            </Typography>
            { error && <Alert severity="error">{error}</Alert> }
            <form className={classes.form} onSubmit={handleSubmit} >
              <Grid container spacing={2}>
                <Grid item xs={12} >
                  <TextField
                    autoComplete="username"
                    name="username"
                    variant="outlined"
                    required
                    fullWidth
                    label="User Name"
                    value= {username}
                    onInput={e => setUsername ( e.target.value)}
                    autoFocus
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    variant="outlined"
                    required
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="email"
                    value= {email}
                    onInput={e => setEmail (e.target.value)}
                    autoComplete="email"
                  />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    variant="outlined"
                    required
                    fullWidth
                    name="password"
                    label="Password"
                    type="password"
                    value={password}
                    onChange={e => setPassword ( e.target.value) }
                    autoComplete="current-password"
                  />
                </Grid>
               
              </Grid>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.button}
              >
                Sign Up
              </Button>
              <Grid container justify="flex-end">
                <Grid item>
                  <Link href="/login" variant="body2">
                    Already have an account? Sign in
                  </Link>
                </Grid>
              </Grid>
            </form>
          </div>
         
        </Container>
      );    

    
}

