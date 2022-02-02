import { useContext } from 'react';
import { GameContext } from './GameContext';

export const useGame = () => useContext(GameContext);
