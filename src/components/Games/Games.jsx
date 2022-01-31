import { useEffect, useState } from "react";
import axios from 'axios';
import { GameCard } from "../GameCard/GameCard";
import styled from 'styled-components';

const GamesCardListWrapper = styled.section`
   display: flex;
   gap: 15px;
   flex-wrap: wrap;
   margin: 0 auto;
   max-width: 1050px
`;

export const Games = () => {

    const [gamesList, setGamesList] = useState([]);

    useEffect(() => {
        const options = {
            method: 'GET',
            url: 'https://mmo-games.p.rapidapi.com/games',
            headers: {
              'x-rapidapi-host': 'mmo-games.p.rapidapi.com',
              'x-rapidapi-key': '8e65ae50e5mshfce3a1383ee5408p16661fjsnca8f01b4b471'
            }
          };
          
          axios.request(options).then(function (response) {
              console.log(response.data);
              setGamesList(response.data);
          }).catch(function (error) {
              console.error(error);
          });
    }, []);
    

    return (
        <>
            <h2>Games</h2>
            <GamesCardListWrapper>
                {gamesList.length > 0 && gamesList.map((game, index) => (
                    <GameCard key={game.id}  game={game}/>
                ))}
            </GamesCardListWrapper>
        </>
    )
}