
import { GameCard } from "../GameCard/GameCard";
import styled from 'styled-components';
import { useGame } from "../../contexts/game/useGame";
import { Search } from "../Search/Search";
import { Loading } from "../Loading/Loading";

const GamesCardListWrapper = styled.section`
   display: flex;
   align-content: flex-start;
   gap: 15px;
   flex-wrap: wrap;
   margin: 0 auto;
   max-width: 1050px;
   height: 100%;
   min-height: 100vh;
   padding-bottom: 32px;
`;

const HeaderContent = styled.div`
   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
   padding: 24px 0;
   max-width: 1050px;
   margin: 0 auto;

   h2 {
      margin-bottom: 20px;
      font-size: 32px;
      color: ${({theme}) => theme.colors.primary.title};
   }
`;

const NotFound = styled.p`
   font-size: 24px;
   color: ${({theme}) => theme.colors.primary.text};
`
const GamesTotal = styled.p`
   font-size: 24px;
   color: ${({theme}) => theme.colors.primary.text};
   align-self: flex-start;
   margin-top: 24px;
`

export const Games = () => {
    const { filteredGames, loading } = useGame();
    
    return (
        <>
            <HeaderContent>
               <h2>Games</h2>
               {!loading && (<Search />)}
                {filteredGames.length === 1 && (<GamesTotal>{filteredGames.length} game found</GamesTotal>)}
                {filteredGames.length > 1 && (<GamesTotal>{filteredGames.length} games found</GamesTotal>)}
            </HeaderContent>
            <GamesCardListWrapper>
               {filteredGames.length === 0 && loading && (<Loading />)}
                {filteredGames.length > 0 && filteredGames.map((game) => (
                    <GameCard key={game.id}  game={game}/>
                ))}
                {filteredGames.length === 0 && !loading && (<NotFound>No games found</NotFound>)}
            </GamesCardListWrapper>
        </>
    )
}