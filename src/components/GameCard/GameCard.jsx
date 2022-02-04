import { Link } from 'react-router-dom';
import styled from 'styled-components';

const GameCardStyle = styled.article`
   ${({ theme }) => ({
      color: theme.colors.primary.main,
      backgroundColor: theme.colors.secondary.light,
   })}
   width: 250px;
   transition: all .2s ease-in-out;

   &:hover {
      transform: scale(1.1);
   }
   img{
      width: 250px;
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
   padding: 10px 15px;
   margin: 20px auto 0;
   display: block;
   width: fit-content;
   text-decoration: none;
   color: ${({theme}) => theme.colors.secondary.main};
   background-color: ${({theme}) => theme.colors.primary.main};
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
               <StyledLink  to={`game/detail/${id}`}>Ver mais</StyledLink>
            </GameCardContent>
        </GameCardStyle>
    )

}