import { useEffect, useState } from "react";
import { NewsCard } from "../NewsCard/NewsCard";
import { fetchGameNews } from "../../services/games-service";
import { filterByText } from "../../helper/games";
import styled from 'styled-components';

const NewsStyle = styled.section`
   padding: 24px 0;
   height: 100%;
   min-height: 100vh;
   margin: 0 auto;
   max-width: 1050px;
   h1 {
      margin-bottom: 20px;
      font-size: 32px;
      color: ${({theme}) => theme.colors.secondary.main};
      text-align: center;
   }

   input {
      width: 100%;
      margin: 0 auto 24px;
      display: block;
      padding: 4px;
      font-size: 20px;
      line-height: 24px;
      border: none;
      outline: none;
      color: ${({theme}) => theme.colors.secondary.main};
   }
`

const NotFound = styled.p`
   font-size: 24px;
   color: ${({theme}) => theme.colors.secondary.main};
`

export const News = () => {
    const [news, setNews] = useState([]);
    const [filteredNews, setFilteredNews] = useState([]);
    const [filter, setFilter] = useState('');

    useEffect(() => {
      (async () => {
         const lista = await fetchGameNews();
         setNews(lista);
         setFilteredNews(lista);
       })();
    }, []);

    useEffect(() => {
      setFilteredNews(filterByText(news, filter));
    }, [filter]);

    return (
       <>
           <NewsStyle>
            <h1>News</h1>
            <input
               onChange={(event) => {
                  setFilter(event.target.value);
               }}
               type="text"
               placeholder="Digite o nome do jogo"
               />
                {filteredNews.length > 0 && filteredNews.map(notice => (
                    <NewsCard key={notice.id} notice={notice} />
                ))}
                {filteredNews.length === 0 && (<NotFound>Nenhuma notícia encontrada</NotFound>)}
            </NewsStyle>
        </>
    )
    
}