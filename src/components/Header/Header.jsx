import { Link } from "react-router-dom";
import styled from 'styled-components';

const HeaderStyle = styled.header`
   ${({ theme }) => ({
      color: theme.colors.secondary.main,
      backgroundColor: theme.colors.primary.main,
   })}
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 14px 28px;
      position: fixed;
      left: 0;
      right: 0;
      top: 0;
      z-index: 1000;

      a {
         text-decoration: none;
         color: ${({theme}) => theme.colors.secondary.main};
      }
   `

const HeaderList = styled.ul`
   display: flex;

   li {
      list-style-type: none;
      &:not(:last-of-type) {
         margin-right: 10px;
      }

      transition: all .2s ease-in-out;

      &:hover {
         transform: scale(1.1);
      }

      a {
         color: ${({theme}) => theme.colors.secondary.main};
         text-decoration: none;
         padding: 5px;
         font-weight: bold;
         font-size: 18px;

      }
   }
`

const NavWrapper = styled.div`
   display: flex;
   gap: 20px;

   nav {
      display: flex;
      align-items: center;
   }
`

const ButtonThemeSwitcher = styled.button`
   background-color: ${({theme}) => theme.colors.secondary.main};
   border: none;
   padding: 10px;
   width: 50px;
   height: 50px;
   border-radius: 50%;
   outline: none;
   font-size: 28px;
   cursor: pointer;
   color: ${({theme}) => theme.colors.primary.main};
`
   

export const Header = ({setTheme}) => {
    return (
       <HeaderStyle>
         
         <Link to={``}><h1><i className="fas fa-gamepad head__icon"></i>DEVinMMO</h1></Link>
         <NavWrapper>
            <nav>
               <HeaderList>
                  <li><Link to={``}>Games</Link></li>
                  <li><Link to={`noticias`}>News</Link></li>
               </HeaderList>
            </nav>
            <ButtonThemeSwitcher onClick={setTheme}><i className="far fa-lightbulb"></i></ButtonThemeSwitcher>
         </NavWrapper>
      </HeaderStyle>
    )
}