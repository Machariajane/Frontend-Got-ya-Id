// allows users to post ids 
import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {useHistory} from 'react-router'
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import BorderColorOutlinedIcon from '@material-ui/icons/BorderColorOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Alert from '@material-ui/lab/Alert';
import { postId } from '../../redux/Ids';


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
      background: '#7E4E78',
    },
  }));


export const Createclaim = () =>{
    const [name,setName] = useState ()
    const [course,setCourse] = useState ()
    const [registration_no,setRegistration] = useState ()
    const [valid_from,setValidfrom] = useState ()
    const [valid_till,setValidtill] = useState ()
    const [institution,setInstitution] = useState ()
    const [campus,setCampus] = useState ()
    const dispatch = useDispatch()
    const history = useHistory()
    const error  = useSelector(state => state.id.error)
    const classes = useStyles();
    
    const handleSubmit = React.useCallback ( (e) =>
        {e.preventDefault() 
            dispatch(postId({name,course,registration_no,valid_from,valid_till,institution,campus},history))
        },[dispatch,name,course,registration_no,valid_from,valid_till,institution,campus,history]
    )
    return (
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <div className={classes.paper}>
            <Avatar className={classes.avatar}>
              <BorderColorOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Create Claim
            </Typography>
            { error && <Alert severity="error">{error}</Alert> }
            <form className={classes.form} onSubmit={handleSubmit} >
              <Grid container spacing={2}>
                <Grid item xs={12} >
                  <TextField
                    name="name"
                    variant="outlined"
                    required
                    fullWidth
                    label="Name"
                    value= {name}
                    onInput={e => setName ( e.target.value)}
                    autoFocus
                  />
                </Grid>
                <Grid item xs={12} >
                  <TextField
                    name="course"
                    variant="outlined"
                    required
                    fullWidth
                    label="Course"
                    value= {course}
                    onInput={e => setCourse ( e.target.value)}
                    
                  />
                </Grid>
                <Grid item xs={12} >
                  <TextField
                    name="registration"
                    variant="outlined"
                    required
                    fullWidth
                    label="Registartion"
                    value= {registration_no}
                    onInput={e => setRegistration ( e.target.value)}
                
                  />
                </Grid>
                <Grid item xs={12} >
                  <TextField
                    name="institition"
                    variant="outlined"
                    required
                    fullWidth
                    label="Institution"
                    value= {institution}
                    onInput={e => setInstitution ( e.target.value)}
                  
                  />
                </Grid>
                <Grid item xs={12} >
                  <TextField
                    name="campus"
                    variant="outlined"
                    required
                    fullWidth
                    label="Campus"
                    value= {campus}
                    onInput={e => setCampus ( e.target.value)}
                 
                  />
                </Grid>
               
                <Grid item xs={12} >
                  <TextField
                    name="valid_from"
                    variant="outlined"
                    required
                    fullWidth
                    label="Valid_from"
                    value= {valid_from}
                    onInput={e => setValidfrom ( e.target.value)}
                   
                  />
                </Grid>
                <Grid item xs={12} >
                  <TextField
                    name="valid_till"
                    variant="outlined"
                    required
                    fullWidth
                    label="Valid_till"
                    value= {valid_till}
                    onInput={e => setValidtill ( e.target.value)}
             
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
                Create Claim
              </Button>
              
            </form>
          </div>
         
        </Container>
      );    

    
}

