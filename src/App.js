import React from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import {Routes} from './routes'
import theme from './theme'
import { ThemeProvider } from '@material-ui/core';



export default function App () {
  return(
    <ThemeProvider theme={theme}>
            <Routes />
    </ThemeProvider>
  
  )
}