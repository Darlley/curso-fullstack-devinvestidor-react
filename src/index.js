import { ThemeProvider } from '@emotion/react';
import { CssBaseline } from '@material-ui/core'; 
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import theme from 'theme';

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider {...{theme}}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);