import { Link } from 'react-router-dom';
import styled from 'styled-components';

const GameCardStyle = styled.article`
   ${({ theme }) => ({
      color: theme.colors.primary.main,
      backgroundColor: theme.colors.secondary.light,
   })}

   width: 340px;
   transition: all .2s ease-in-out;
   border-radius: 10px;

   &:hover {
      transform: scale(1.050);
   }
   img{
      width: 340px;
      border-radius: 10px 10px 0 0;
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
`

 const StyledLink  = styled(Link)`
   padding: 6px 10px;
   margin: 20px auto 0;
   display: block;
   width: fit-content;
   text-decoration: none;
   color: ${({theme}) => theme.colors.secondary.main};
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
               <h3>{title}</h3>
               <span>{platform}</span>
               <p>{short_description}</p>
               <StyledLink  to={`game/detail/${id}`}>See more</StyledLink>
            </GameCardContent>
        </GameCardStyle>
    )

}