// allows users to post ids 
import React, { useState , useEffect} from 'react'
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
import { createClaim } from '../../redux/Ids';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { Redirect} from "react-router-dom";
import axios from 'axios';

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


export const Createclaim = () =>{
    const user  = useSelector(state => state.user.user)
    const [name,setName] = useState ()
    const [course,setCourse] = useState ()
    const [registration_no,setRegistration] = useState ()
    const [valid_from,setValidfrom] = useState ()
    const [valid_till,setValidtill] = useState ()
    const [institution,setInstitution] = useState ()
    const [campus,setCampus] = useState ()
    const [location_name,setLocationname] = useState ()
    const dispatch = useDispatch()
    const history = useHistory()
    const error  = useSelector(state => state.id.error)
    const classes = useStyles();
    const [data,setData] = useState ();
    const [isLoading,setIsLoading] = useState (false);
    const [isError,setIsError] = useState(false);

    useEffect(() => {
      const fetchData = async () => {
        setIsError(false);
        setIsLoading(true);
  
        try{
        const result = await axios('institutions',);
   
        
        setData(result.data.data);
        } catch(error) {
          setIsError(true);
        }
        setIsLoading(false);
      };
      
  
      fetchData();
    }, []);

    const handleSubmit = React.useCallback ( (e) => {
      let formatedValidFrom;
      let formatedValidTill;

        if (valid_from && !isNaN(valid_from)) {
          //
          formatedValidFrom = `${valid_from}-01-01`
        }
        if (valid_till && !isNaN(valid_till)) {
          //isNaN
          formatedValidTill = `${valid_till}-01-01`
        }

        e.preventDefault() 
            dispatch(createClaim({name,course,registration_no,
              'valid_from':formatedValidFrom,
              'valid_till': formatedValidTill,
              institution,
              campus,
              location_name},history))
        },[dispatch,name,course,registration_no,valid_from,valid_till,institution,campus,location_name,history]
    )
    return (
      <div>{ 
        user  ? 
       (  (isLoading || !data) ? (<div>Loading ... </div>) : (
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
             <FormControl fullWidth required variant="outlined" >
                <InputLabel id="demo-simple-select-label">Institution</InputLabel>
                <Select
                  labelId="demo-simple-select-label"
                  id="demo-simple-select"
                  value={institution}
                  label="Institution"
                  onChange={e => setInstitution ( e.target.value)}
                >
                  {data.map((item) => (
                  <MenuItem value={item.id}>{item.name}</MenuItem>
                  ))}
                </Select>
              </FormControl>
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
                 name="location"
                 variant="outlined"
                 required
                 fullWidth
                 label="Location"
                 value= {location_name}
                 onInput={e => setLocationname ( e.target.value)}
         
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
       )
        

):
(
 <Redirect to="/login" />
)
}
</div>
      );    

    
}

