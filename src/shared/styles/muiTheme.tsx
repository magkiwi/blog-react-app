import { createTheme, responsiveFontSizes } from '@mui/material/styles';


export const muiTheme = () => responsiveFontSizes(createTheme({
  typography: {
    fontFamily: 'Poppins, sans-serif',
  },
}))
