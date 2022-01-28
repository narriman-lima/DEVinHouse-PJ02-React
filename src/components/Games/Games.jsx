import { useEffect, useState } from "react";
import axios from 'axios';
import { GameCard } from "../GameCard/GameCard";

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
            <section>
                {gamesList.length > 0 && gamesList.map((game, index) => (
                    <GameCard key={game.id}  game={game}/>
                ))}
            </section>
        </>
    )
}