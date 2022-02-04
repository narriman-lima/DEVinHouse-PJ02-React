import React, { useState } from 'react';
import './App.css';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter } from 'react-router-dom';
import { Router } from './routes/Router';
import { Header } from './components/Header/Header';
import { GlobalStyle } from './themes/GlobalStyles';
import { myTheme, myThemeDark } from './themes/themes';
import styled from 'styled-components';

const MainStyle = styled.main`
   background-color: ${({theme}) => theme.colors.primary.dark};
`



function App() {
   const [dark, setDark] = useState(false);

   const setTheme = () => {
      setDark(!dark);
   }
  return (
    <>
      <ThemeProvider theme={dark ? myThemeDark : myTheme}>
          <GlobalStyle/>
          <BrowserRouter>
             <Header setTheme={setTheme}/>
             <MainStyle>
               <Router />
             </MainStyle>
          </BrowserRouter>
    </ThemeProvider>
    </>
  );
}

export default App;
