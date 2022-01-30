import React, { useState } from 'react';
import './App.css';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter } from 'react-router-dom';
import { Router } from './routes/Router';
import { Header } from './components/Header/Header';
import { GlobalStyle } from './themes/GlobalStyles';
import { myTheme, myThemeDark } from './themes/themes';


function App() {
   const [dark, setDark] = useState(true);
  return (
    <>
      <ThemeProvider theme={dark ? myThemeDark : myTheme}>
          <GlobalStyle/>
          <BrowserRouter>
             <Header />
             <Router />
          </BrowserRouter>
    </ThemeProvider>
    </>
  );
}

export default App;
