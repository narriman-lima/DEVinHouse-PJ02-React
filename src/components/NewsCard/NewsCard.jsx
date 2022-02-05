import styled from 'styled-components';

const NewsCardStyle = styled.article`
   ${({ theme }) => ({
      color: theme.colors.primary.main,
      backgroundColor: theme.colors.secondary.light,
   })}

   display: flex;
   gap: 24px;
   align-items: center;
   padding: 16px;
   border: 1px solid black;
   margin-bottom: 24px;

   img{
      width: 300px;
   }

   .newscard-content{
      width: 100%;
      h3 {
         margin-bottom: 20px;
      }
   }

   `

const NewsCardButton = styled.a`
   color: ${({theme}) => theme.colors.secondary.main};
   text-decoration: none;
   font-size: 16px;
   text-transform: uppercase;
   font-weight: bold;
   padding: 10px 14px;
   background-color: ${({theme}) => theme.colors.primary.main};
   width: fit-content;
   white-space: nowrap;
`

export const NewsCard = (props) => {
   const {title, short_description, main_image, article_url} = props.notice;

   return (
       <>
           <NewsCardStyle>
               <img src={main_image} alt="Game" />
               <div className="newscard-content">
                  <h3>{title}</h3>
                  <p>{short_description}</p>
               </div>
               <NewsCardButton href={article_url} target="_blank" rel="noopener noreferrer">Ver no site</NewsCardButton>
           </NewsCardStyle>
       </>
   )
}