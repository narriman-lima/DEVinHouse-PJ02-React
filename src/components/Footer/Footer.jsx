import styled from 'styled-components';

const FooterStyle = styled.footer`
   ${({ theme }) => ({
      color: theme.colors.secondary.main,
      backgroundColor: theme.colors.primary.main,
   })}
   display: flex;
   justify-content: space-between;
   align-items: center;
   padding: 10px 28px;
   color: ${({theme}) => theme.colors.secondary.main};

   a {
      font-size: 36px;
      color: ${({theme}) => theme.colors.secondary.main};
   }

`

export const Footer = () => {
   const year = new Date().getFullYear();

   return (
      <FooterStyle>
         <div>
            Copyright © {year} - Narriman Lima
         </div>
         <div>
            <a href="https://github.com/narriman-lima/DEVinHouse-PJ02-React" target="_blank" rel="noopener noreferrer"><i className="fab fa-github"></i></a>
         </div>
      </FooterStyle>
   )
}