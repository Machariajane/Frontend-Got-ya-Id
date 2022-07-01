// This component is the landing page for the application

import React from "react";
import { useSelector } from "react-redux";
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';

export const Home = () => {
    const user  = useSelector(state => state.user.user)
    const [expanded, setExpanded] = React.useState(false);

    const handleChange = (panel) => (event, isExpanded) => {
      setExpanded(isExpanded ? panel : false);
    };
  
    
    return ( 
     <div>
         { 
         user && user.username ? 
        ( <h2>Welcome {user.username}</h2> )
         : 
        ( 
          

<Container maxWidth='sm'>
        {/* <Typography variant='h6' align='center' color="textSecondary" gutterBottom>
           Got-ya-Id
        </Typography> */}
       &nbsp;
       &nbsp;
        <Typography variant='subtitle1' align='center' color='textSecondary'> 
        Hi ,I am an open source project that helps you find lost IDs 
        </Typography>
        <Typography variant='subtitle1' align='center' color='textSecondary'> 
        You post a lost ID and the distressed owner can easily locate where it is 
        </Typography>
        <Typography variant='subtitle2' align='center' color='textSecondary'> 
        Built for collaboration
        </Typography>
        <Typography variant='subtitle2' align='center' color='textSecondary'> 
        Built for fun 
        </Typography>
        <Typography variant='subtitle2' align='center' color='textSecondary'> 
        Built for  convenience 
        </Typography>
        
        
    </Container>






  )
         }
     </div>
      
    )

}


