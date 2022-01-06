// This component shows all ids,cards of nx3 matrix starting with recents posted Ids
// has a search button,filter

import React from "react";
import { Typography ,Card,CardMedia,Button,CssBaseline,Grid,Container, CardContent, CardActions,CardActionArea} from "@material-ui/core";
import useStyles from "../styles";
import  { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

export const Allids = () =>{
  const classes=useStyles()
  const [data, setData] = useState({ data: [] });
  const [isLoading,setIsLoading] = useState (false);
  const [isError,setIsError] = useState(false);
 
  useEffect(() => {
    const fetchData = async () => {
      setIsError(false);
      setIsLoading(true);

      try{
      const result = await axios('ids',);
 
      setData(result.data);
      } catch(error) {
        setIsError(true);
      }
      setIsLoading(false);
    };
 
    fetchData();
  }, []);
 
  return(
    <div>

      {isError && <div>Something went wrong ...  </div>}
      
      {isLoading ? (<div>Loading ... </div>) : (
    <main>
    <CssBaseline />
    
     
    <Container className={classes.cardGrid} maxWidth='md'>
      <Grid container spacing={4}>
        {data.data.map((item) => (
         <Grid item key={item.id} xs={12} sm={6} md={4}>
         <Card className={classes.card}>
      
           <CardMedia className={classes.cardMedia} 
           image="https://source.unsplash.com/random" 
           title="Image title"/>
           <CardContent className={classes.cardContent}>
             <Typography gutterBottom variant='h5'>{item.name}</Typography>
             <Typography >{item.campus}</Typography>
           </CardContent>
           <CardActions>
           <Button variant="contained" color="success" >
            <Link to={`/viewid/${item.id}`}>View</Link>
           </Button>
           </CardActions>
       
         </Card>
       </Grid>
       ))}
      </Grid>
    </Container>
    </main>
    )}
    </div>
  )
}
