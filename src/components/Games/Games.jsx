
import { GameCard } from "../GameCard/GameCard";
import styled from 'styled-components';
import { useGame } from "../../contexts/game/useGame";
import { Search } from "../Search/Search";

const GamesCardListWrapper = styled.section`
   display: flex;
   gap: 15px;
   flex-wrap: wrap;
   margin: 0 auto;
   max-width: 1050px
`;

export const Games = () => {
    const { filteredGames } = useGame();
    
    return (
        <>
            <h2>Games</h2>
            <Search />
            <GamesCardListWrapper>
                {filteredGames.length > 0 && filteredGames.map((game) => (
                    <GameCard key={game.id}  game={game}/>
                ))}
                {filteredGames.length === 0 && (<p>Nenhum jogo encontrado</p>)}
            </GamesCardListWrapper>
        </>
    )
}