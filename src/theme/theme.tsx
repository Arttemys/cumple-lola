import { createTheme } from "@mui/material";

export const theme = createTheme({
  typography: {
    fontFamily: 'Quicksand, kalam, sans-serif',
  },
  palette: {
    primary: {
      main: '#1C1C1A',
      light: '#0F9DF5',
      dark: '#B8E3E6'
    },
    secondary: {
      main: '#9B7F50'
    },
    background: {
      default: '#0F9DF5',
    }
  }
});