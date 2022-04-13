import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './styles/normalize.css';
import './styles/reset.css';
import App from './App';
import {  ThemeProvider } from 'styled-components'
import { theme } from './styles/theme';
import GlobalStyle from './styles/globalStyle';
import { BrowserRouter } from "react-router-dom";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <BrowserRouter>
      <App />
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>
);

