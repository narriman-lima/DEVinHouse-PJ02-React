import { Link } from 'react-router-dom';
import styled from 'styled-components';

const GameCardStyle = styled.article`
   ${({ theme }) => ({
      color: theme.colors.primary.text,
      backgroundColor: theme.colors.secondary.light,
   })}

   width: 340px;
   transition: all .2s ease-in-out;
   border-radius: 0 30px 0 30px;
   box-shadow: 4px 4px 5px ${({theme}) => theme.colors.primary.boxshadow};

   &:hover {
      transform: scale(1.050);
      box-shadow: 5px 5px 10px ${({theme}) => theme.colors.primary.boxshadow};
      transition: all .3s ease-in-out;
   }
   img{
      width: 340px;
      border-radius: 0 30px 0 0px;
   }
   p {
      display: -webkit-box;
      -webkit-line-clamp: 4;
      -webkit-box-orient: vertical;
      overflow: hidden;
   }
   `
const GameCardContent = styled.div`
   padding: 10px;
   div {
      display: flex;
      margin-bottom: 5px;
      justify-content: space-between;
      align-items: center;
      gap: 16px;
      span {
         border: 1px solid ${({theme}) => theme.colors.secondary.dark};
         color: ${({theme}) => theme.colors.primary.text};
         border-radius: 3px;
         font-size: 13px;
         padding: 0 2px 0 2px;
         width: fit-content;
         white-space: nowrap;
      }
   }
`

 const StyledLink  = styled(Link)`
   padding: 6px 10px;
   margin: 20px auto 0;
   display: block;
   width: fit-content;
   text-decoration: none;
   color: ${({theme}) => theme.colors.primary.header_footer};
   background-color: ${({theme}) => theme.colors.primary.main};
   font-weight: bold;
   font-size: 14px;
   text-transform: uppercase;
   border-radius: 15px;
   &:hover {
      transform: scale(1.050);
   }
   transition: all .2s ease-in-out;
 `

export const GameCard = (props) => { 
    const {title, thumbnail, short_description,platform, id} = props.game;
    return (
        <GameCardStyle>
            <img src={thumbnail} alt="test"/>
            <GameCardContent>
               <div>
                  <h3>{title}</h3>
                  <span>{platform}</span>
               </div>
               <p>{short_description}</p>
               <StyledLink  to={`game/detail/${id}`}>See more</StyledLink>
            </GameCardContent>
        </GameCardStyle>
    )

}