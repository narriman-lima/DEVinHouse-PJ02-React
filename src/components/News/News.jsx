import { useEffect, useState } from "react";
import axios from 'axios';
import { NewsCard } from "../NewsCard/NewsCard";

export const News = () => {
    const [news, setNews] = useState([]);

    useEffect(() => {
        const options = {
            method: 'GET',
            url: 'https://mmo-games.p.rapidapi.com/latestnews',
            headers: {
              'x-rapidapi-host': 'mmo-games.p.rapidapi.com',
              'x-rapidapi-key': '8e65ae50e5mshfce3a1383ee5408p16661fjsnca8f01b4b471'
            }
          };
          
          axios.request(options).then((response) => {
              setNews(response.data);
          }).catch((error) => {
              console.error(error);
          });
    }, []);


    return (
        <>
            <section>
                {news.length > 0 && news.map(notice => (
                    <NewsCard key={notice.id} notice={notice} />
                ))}
            </section>
        </>
    )
    
}