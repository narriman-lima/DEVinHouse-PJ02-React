import { Link } from 'react-router-dom';
import styled from 'styled-components';

const GameCardStyle = styled.article`
   ${({ primary, theme }) => ({
      color: primary ? theme.colors.primary.main : theme.colors.secondary.main,
      backgroundColor: primary ? theme.colors.secondary.main : theme.colors.primary.main,
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
   border: 1px solid black;
   margin: 20px auto 0;
   display: block;
   width: fit-content;
   text-decoration: none;
   color: black;
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