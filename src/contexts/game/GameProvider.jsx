import { useEffect, useRef, useState } from 'react';
import { GameContext } from './GameContext';
import { fetchAllGames } from './../../services/games-service';
import { filterByText } from '../../helper/games';

export const GameProvider = ({ children }) => {
  const [filter, setFilter] = useState('');
  const [filteredGames, setFilteredGames] = useState([]);
  const Games = useRef([]);

  useEffect(() => {
    (async () => {
      const lista = await fetchAllGames();
      Games.current = lista;
      setFilteredGames(lista);
    })();
  }, []);

  useEffect(() => {
    setFilteredGames(filterByText(Games.current, filter));
  }, [filter]);

  return (
    <GameContext.Provider value={{ setFilter, Games, filteredGames }}>
      {children}
    </GameContext.Provider>
  );
};
