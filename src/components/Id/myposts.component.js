import React from "react";
import { Typography ,Card,CardMedia,Button,CssBaseline,Grid,Container, CardContent, CardActions,CardActionArea} from "@material-ui/core";
import useStyles from "../styles";
import  { useState, useEffect } from 'react';
import axios from 'axios';


export const Myposts = () =>{
  const classes=useStyles()
  const [data, setData] = useState({ data: [] });
 
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios('ids/posted/me',
      );
 
      setData(result.data);
    };
 
    fetchData();
  }, []);

  
 
  return(
    
    <div>
      
    <CssBaseline />
    
    <main>
      <div className={classes.container}>
        <Container maxWidth='sm' >
          <Typography variant ='h4' align='center' color='textPrimary' >My posts</Typography>
         </Container>
     </div>
    <Container className={classes.cardGrid} maxWidth='md'>
      <Grid container spacing={4}>
        {data.data.map((item) => (
          
         <Grid item key={item.id} xs={12} sm={6} md={4}>
          
         <Card className={classes.card}>
           <CardContent className={classes.cardContent}>
             <Typography gutterBottom variant='h5'>name: {item.name}</Typography>
             <Typography >registration:{item.registration_no}</Typography>
             <Typography >institution:{item.institution}</Typography>
             <Typography >campus:{item.campus}</Typography>
             <Typography >course:{item.course}</Typography>
             <Typography >location:{item.location_name}</Typography>
             <Typography >valid_from:{item.valid_from}</Typography>
             <Typography >valid_till:{item.valid_till}</Typography>
             { //Check if id has been found
        (item.is_found === 'true')
          ? <Button variant="contained" color="success" >Found</Button>
          : <Button variant="contained" color="error" >Not Found</Button>
      }
             </CardContent>
           
         </Card>
       </Grid>
       ))}
      </Grid>
    </Container>
    </main>
    </div>
  )
}
