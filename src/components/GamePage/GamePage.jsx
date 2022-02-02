
import { GameProvider } from '../../contexts/game/GameProvider';
import { Games } from '../Games/Games';


export const GamePage = () => {
  return (
    <GameProvider>
      <Games />
    </GameProvider>
  );
};
