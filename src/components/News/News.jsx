import { useEffect, useState } from "react";
import { NewsCard } from "../NewsCard/NewsCard";
import { fetchGameNews } from "../../services/games-service";
import { filterByText } from "../../helper/games";

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
            <input
               onChange={(event) => {
                  setFilter(event.target.value);
               }}
               type="text"
               placeholder="Digite o nome do jogo"
               />
            <section>
                {filteredNews.length > 0 && filteredNews.map(notice => (
                    <NewsCard key={notice.id} notice={notice} />
                ))}
                {filteredNews.length === 0 && (<p>Nenhuma notícia encontrada</p>)}
            </section>
        </>
    )
    
}