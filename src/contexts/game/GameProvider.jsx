import { useEffect, useRef, useState } from 'react';
import { GameContext } from './GameContext';
import { fetchAllGames } from './../../services/games-service';
import { filterByText } from '../../helper/games';

export const GameProvider = ({ children }) => {
  const [filter, setFilter] = useState('');
  const [loading, setLoading] = useState(false);
  const [filteredGames, setFilteredGames] = useState([]);
  const Games = useRef([]);

  useEffect(() => {
    (async () => {
      setLoading(true);
      const lista = await fetchAllGames();
      Games.current = lista;
      setFilteredGames(lista);
      setLoading(false);
    })();
  }, []);

  useEffect(() => {
    setFilteredGames(filterByText(Games.current, filter));
  }, [filter]);

  return (
    <GameContext.Provider value={{ setFilter, loading,  Games, filteredGames }}>
      {children}
    </GameContext.Provider>
  );
};
