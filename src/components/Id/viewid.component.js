import axios from 'axios';
import React from "react";
import { Typography ,Card,CardMedia,Button,CssBaseline,Grid,Container, CardContent, CardActions,CardActionArea} from "@material-ui/core";
import useStyles from "../styles";
import  { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export const Viewid = ({ match }) => {
const classes=useStyles()
const [data, setData] = useState( {data} );
const id = match.params.id

useEffect(() => {
  const fetchData = async () => {
    const result = await axios(`ids/${id}`
   );

  setData(result.data);
 
  
  };
  fetchData();
  }, []
);
// console.log('dataw',data)
// {data && data.data && data.data.name} 

return (
   <div>
    <CssBaseline />
    
    <main>
      
    <Container className={classes.cardGrid} maxWidth='md'>
      <Grid container  alignItems="center"
  justify="center">
        
         <Grid item key={data && data.data && data.data.id} xs={12} sm={6} md={4}>
         <Card className={classes.card}>
         
           <CardMedia className={classes.cardMedia} 
           image="https://source.unsplash.com/random"
           title="Image title"/>
           <CardContent className={classes.cardContent}>
             <Typography gutterBottom variant='h5'>name :{data && data.data && data.data.name}</Typography>
             <Typography >Registration:{data && data.data && data.data.registration_no}</Typography>
             <Typography >course:{data && data.data && data.data.course}</Typography>
             <Typography >institution:{data && data.data && data.data.institution}</Typography>
             <Typography >campus:{data && data.data && data.data.campus}</Typography>
             <Typography >valid_from:{data && data.data && data.data.valid_from}</Typography>
             <Typography >valid_till:{data && data.data && data.data.valid_till}</Typography>
             <Typography >institution:{data && data.data && data.data.institution}</Typography>
             
           </CardContent>
           <CardActions>
           { //Check if id has been found
        (data && data.data && data.data.is_found === 'true')
          ? <Button variant="contained" color="success" >Found</Button>
          : <Button variant="contained" color="error" >Not Found</Button>
      }
      <Button variant="contained" >
            <Link >This is mine</Link>
           </Button>
           </CardActions>
          
         </Card>
       </Grid>
     
      </Grid>
    </Container>
    </main>
   
    </div>



  );
  
  }
