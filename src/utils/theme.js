import { createTheme } from '@mui/material/styles';

 const customTheme = createTheme({
 palette: {
    primary: {
      main: '#95c41f',
    },
    secondary: {
      main: '#1F223E',
      contrastText: '#fff'
    },
  },
})

export default customTheme