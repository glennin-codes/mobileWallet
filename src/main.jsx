import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createTheme } from '@mui/material/styles';
import { ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
  typography: {
    fontFamily: ['Arvo', 'BlinkMacSystemFont', '"Segoe UI"', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', '"Fira Sans"', '"Droid Sans"', '"Helvetica Neue"', 'sans-serif'].join(','),
    h1: {
      fontSize: '2rem',
      '@media (min-width:600px)': {
        fontSize: '3rem',
      },
      '@media (min-width:900px)': {
        fontSize: '4.5rem',
      },
      '@media (min-width:1400px)': {
        fontSize: '5.5rem',
      }
    },
    h4: {
      fontSize: '1.3rem',
      '@media (min-width:600px)': {
        fontSize: '1.8rem',
      },
      '@media (min-width:900px)': {
        fontSize: '2.5rem',
      }
    }
  }
});

export default theme;

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>,
  </React.StrictMode>,
)
