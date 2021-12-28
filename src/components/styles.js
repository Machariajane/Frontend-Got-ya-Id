import { makeStyles } from '@material-ui/core'

// I am creating a hook called useStyles that is equal to a function call makeStyles
const useStyles = makeStyles ((theme) => ({
  container:{
    backgroundColor: theme.palette.background.paper,
    padding:theme.spacing(8,0,6)
  },
icon : {
      marginRight: '20px',
  },
button : {
      marginTop : '40px',
      marginLeft:'10px',
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
cardMedia:{
    paddingTop:'56.25%' //16.9
    
},
cardContent:{
  flexGrow:1,
},
footer:{
  
  backgroundColor: theme.palette.background.paper,
  padding:'50px 0',
  

},

}));

export default useStyles;