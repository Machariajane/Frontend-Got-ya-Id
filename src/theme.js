import { createTheme } from '@material-ui/core/styles'
//Dark mode

// const darkTheme = createMuiTheme({
//   palette: {
//     type: 'dark',
//   },
// });

// export default darkTheme

const theme = createTheme({
  palette: {
    primary: {
      main: '#006555',
    },
    secondary: {
     main: '#009880',
   
    },
    // type: 'dark', :This is will make your component dark theme
  },
  typography: {
    h1: {
      fontWeight: 800,
      fontSize: '30rem',
    },
  },
});

export default theme;