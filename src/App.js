import React, { useEffect, useState } from 'react';
import './App.css';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter } from 'react-router-dom';
import { Router } from './routes/Router';
import { Header } from './components/Header/Header';
import { GlobalStyle } from './themes/GlobalStyles';
import { myTheme, myThemeDark } from './themes/themes';
import styled from 'styled-components';
import { Footer } from './components/Footer/Footer';

const MainStyle = styled.main`
   background-color: ${({theme}) => theme.colors.primary.dark};
   margin-top: 78px;
`
const KEY_LOCALSTORAGE = "THEME";


function App() {
   const [dark, setDark] = useState(false);

   useEffect(() => {
      const theme = localStorage.getItem(KEY_LOCALSTORAGE);
      if (theme) {
         setDark(checkTrue(theme));
      } else {
         localStorage.setItem(KEY_LOCALSTORAGE, dark);
         setDark(false);
      }
   // eslint-disable-next-line react-hooks/exhaustive-deps
   }, [])

   const setTheme = () => {
      setDark(!dark);
      localStorage.setItem(KEY_LOCALSTORAGE, !dark)
   }

   const checkTrue = (value) => {
      return value === 'true';
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
             <Footer />
          </BrowserRouter>
    </ThemeProvider>
    </>
  );
}

export default App;
