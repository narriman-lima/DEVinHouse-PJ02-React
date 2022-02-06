import styled from 'styled-components';

const NewsCardStyle = styled.article`
   ${({ theme }) => ({
      color: theme.colors.primary.text,
      backgroundColor: theme.colors.secondary.light,
   })}

   display: flex;
   gap: 24px;
   align-items: center;
   padding: 16px;
   margin-bottom: 24px;
   border-radius: 0 30px 0 30px;
   box-shadow: 4px 4px 5px ${({theme}) => theme.colors.primary.boxshadow};

   

   &:hover {
      transform: scale(1.050);
      box-shadow: 5px 5px 10px ${({theme}) => theme.colors.primary.boxshadow};
      background: linear-gradient(-45deg, ${({theme}) => theme.colors.primary.newsBg3},${({theme}) => theme.colors.primary.newsBg2}, ${({theme}) => theme.colors.primary.newsBg1});
      background-size: 400% 400%;
      animation: gradient 3s ease infinite;
      transition: all .3s ease-in-out;
   }


   img{
      width: 300px;
   }

   .newscard-content{
      width: 100%;
      h3 {
         margin-bottom: 20px;
      }
   }

   @keyframes gradient {
      0% {
         background-position: 0% 50%;
      }
      50% {
         background-position: 100% 50%;
      }
      100% {
         background-position: 0% 50%;
      }
   }

   `

const NewsCardButton = styled.a`
   color: ${({theme}) => theme.colors.primary.highlight};
   text-decoration: none;
   font-size: 16px;
   text-transform: uppercase;
   font-weight: bold;
   padding: 10px 14px;
   background-color: ${({theme}) => theme.colors.primary.main};
   width: fit-content;
   white-space: nowrap;
   border-radius: 15px;
   &:hover {
      transform: scale(1.050);
   transition: all .2s ease-in-out;

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
               <NewsCardButton href={article_url} target="_blank" rel="noopener noreferrer">Read more</NewsCardButton>
           </NewsCardStyle>
       </>
   )
}