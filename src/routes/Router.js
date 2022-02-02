import { Routes, Route } from 'react-router-dom';
import { GameDetail } from '../components/GameDetail/GameDetail';
import { GamePage } from '../components/GamePage/GamePage';
import { News } from '../components/News/News';

export const Router = () => (
  <Routes>
    <Route path="/" element={<GamePage />} />
    <Route path="game/detail/:id" element={<GameDetail />} />
    <Route path="noticias" element={<News />} />
    <Route path="*" element={<p>Qualquer outra coisa</p>} />
  </Routes>
);