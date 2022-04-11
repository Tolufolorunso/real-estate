import React from 'react';
import ReactDOM from 'react-dom/client';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';

import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import customTheme  from './utils/theme';


const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <CssBaseline />
      <ThemeProvider theme={customTheme}>
        <App />
      </ThemeProvider>
  </React.StrictMode>
);

reportWebVitals();
