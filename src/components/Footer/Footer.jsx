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
   position: fixed;
   left: 0;
   bottom: 0;
   width: 100%;
   
   color: ${({theme}) => theme.colors.primary.header_footer};
   a {
      font-size: 36px;
      color: ${({theme}) => theme.colors.primary.header_footer};
   }

`

export const Footer = () => {
   return (
      <FooterStyle>
         <div>
         Website developed by <strong>Narriman Lima</strong> 👩🏻‍💻
         </div>
         <div>
            <a href="https://github.com/narriman-lima/DEVinHouse-PJ02-React" target="_blank" rel="noopener noreferrer"><i className="fab fa-github"></i></a>
         </div>
      </FooterStyle>
   )
}