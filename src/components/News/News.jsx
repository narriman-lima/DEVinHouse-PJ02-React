import { useEffect, useState } from "react";
import { NewsCard } from "../NewsCard/NewsCard";
import { fetchGameNews } from "../../services/games-service";
import { filterByText } from "../../helper/games";
import styled from 'styled-components';
import { Loading } from "../Loading/Loading";

const NewsStyle = styled.section`
   padding: 24px 0;
   height: 100%;
   min-height: 100vh;
   margin: 0 auto;
   max-width: 1050px;
   h1 {
      margin-bottom: 20px;
      font-size: 32px;
      color: ${({theme}) => theme.colors.primary.title};
      text-align: center;
   }

   input {
      width: 100%;
      margin: 0 auto 24px;
      display: block;
      padding: 4px;
      font-size: 20px;
      line-height: 24px;
      outline: none;
      color: ${({theme}) => theme.colors.primary.main};
      background-color: ${({theme}) => theme.colors.primary.search};
      border: 1px solid ${({theme}) => theme.colors.primary.main};
      border-radius: 5px;
   }
`

const NotFound = styled.p`
   font-size: 24px;
   color: ${({theme}) => theme.colors.primary.text};
`

const NewsTotal = styled.p`
   font-size: 24px;
   color: ${({theme}) => theme.colors.primary.text};
   margin-bottom: 20px;
`

export const News = () => {
    const [news, setNews] = useState([]);
    const [loading, setLoading] = useState(false);
    const [filteredNews, setFilteredNews] = useState([]);
    const [filter, setFilter] = useState('');

    useEffect(() => {
      (async () => {
         setLoading(true);
         const lista = await fetchGameNews();
         setNews(lista);
         setFilteredNews(lista);
         setLoading(false);
       })();
    }, []);

    useEffect(() => {
      setFilteredNews(filterByText(news, filter));
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [filter]);

    return (
       <>
           <NewsStyle>
            <h1>News</h1>
            {!loading && (<input
               onChange={(event) => {
                  setFilter(event.target.value);
               }}
               type="text"
               placeholder="Search game news"
               />)}
                {filteredNews.length > 0 && !loading && (<NewsTotal>{filteredNews.length} news found</NewsTotal>)}
                {filteredNews.length === 0 && loading && (<Loading />)}
                {filteredNews.length > 0 && filteredNews.map(notice => (
                    <NewsCard key={notice.id} notice={notice} />
                ))}
                {filteredNews.length === 0 && !loading && (<NotFound>No news found</NotFound>)}
            </NewsStyle>
        </>
    )
    
}