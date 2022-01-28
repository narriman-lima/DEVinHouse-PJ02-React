import { Routes, Route } from 'react-router-dom';
import { GameDetail } from '../components/GameDetail/GameDetail';
import { Games } from '../components/Games/Games';
import { News } from '../components/News/News';

export const Router = () => (
  <Routes>
    <Route path="/" element={<Games />} />
    <Route path="game/detail/:id" element={<GameDetail />} />
    <Route path="noticias" element={<News />} />
    <Route path="*" element={<p>Qualquer outra coisa</p>} />
  </Routes>
);