import React  from 'react';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import { Container } from '@material-ui/core';
import useStyles from './styles';



export const  Footer = () => {
    const classes=useStyles()
    return (

<footer className={classes.footer}>
    <Container maxWidth='sm'>
        {/* <Typography variant='h6' align='center' color="textSecondary" gutterBottom>
           Got-ya-Id
        </Typography> */}
        <Typography variant='subtitle1' align='center' color='textSecondary'> 
            {'Copyright © '} {new Date().getFullYear()}
        </Typography>
        <Typography variant='subtitle2' align='center' color='textSecondary'> 
            Mugo Waithira
        </Typography>
    </Container>
</footer>
);
}
  
  