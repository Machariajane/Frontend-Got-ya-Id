// Login component
import React,{ useState } from "react";
import SearchIcon from '@mui/icons-material/Search';
import IconButton from '@mui/material/IconButton';
import MoodIcon from '@mui/icons-material/Mood';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Alert from '@material-ui/lab/Alert';
import Box from '@mui/material/Box';
import CreateIcon from '@mui/icons-material/Create';

import { Card,CardMedia,CardContent, CardActions,CardActionArea} from "@material-ui/core";


import axios from 'axios';




const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(10),
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
    marginTop: theme.spacing(1),
  },
  button: {
    margin: theme.spacing(3, 0, 2),
    background: '#009880',

  },
  cardGrid:{
    padding:'20px  0'
   
 },
 card:{
    height: '100%',
    
    display:'flex',
    flexDirection:'column',
    "&:hover": {
     transform: "scale(1.1)"
   }
 
 },
 
 cardContent:{
 
  flexGrow:1,
},
parentFlexRight: {
  display: "flex",
  justifyContent: "flex-end"
},
}));


export const Home = () =>{
  const classes = useStyles();
      return (
        <Container component="main" maxWidth="xs">
          <CssBaseline />
        <div className={classes.paper}>

<Box
sx={{
  display: 'flex',
  flexWrap: 'wrap',
  '& > :not(style)': {
    m: 1,
    
    width: '50vw' ,
    height: '40vh',
    '&:hover': {
      
      opacity: [0.9, 0.8, 0.7],
    },
  },
}}
>
  <Grid container  direction="column"
      spacing={2} justify="center"
      columnSpacing={{ xs: 1, sm: 2, md: 3 , lg: 4, xl:5}} 
      alignItems="center" >
      
        <Typography variant="h5" align="center" color="text.secondary" component="p">
             What would you like to do today ? 
        </Typography>
     &nbsp;&nbsp;
        
        <Grid  item  xs={12} sm={6} md={4}>
          <Card className={classes.card}>
            <CardActionArea href="/allids">
              <CardContent className={classes.cardContent} >
                <Typography gutterBottom variant='h5' align="center">  <SearchIcon color='secondary'/>Find my Id</Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>
    
        <Grid item  xs={12} sm={6} md={4}>
          <Card className={classes.card}>
            <CardActionArea href="/postid">
              <CardContent className={classes.cardContent}>
                <Typography gutterBottom variant='h5' align="center">  <CreateIcon color='secondary'/>Post an Id</Typography>
              </CardContent>
            </CardActionArea>
          </Card>
        </Grid>

     </Grid>
  </Box>
           
          
          </div>
          
        </Container>
      );
}
  
   

