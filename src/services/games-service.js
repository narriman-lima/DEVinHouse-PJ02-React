import axios from 'axios';

export const fetchAllGames = async () => {
   const options = {
      method: 'GET',
      url: 'https://mmo-games.p.rapidapi.com/games',
      headers: {
        'x-rapidapi-host': 'mmo-games.p.rapidapi.com',
        'x-rapidapi-key': '8e65ae50e5mshfce3a1383ee5408p16661fjsnca8f01b4b471'
      }
    };

    try {
       const gameList = await axios.request(options);
       return gameList.data;
    } catch (error) {
       console.error(error);
    }
 };

export const fetchGameDetail = async (id) => {
   const options = {
      method: "GET",
      url: "https://mmo-games.p.rapidapi.com/game",
      params: { id },
      headers: {
        "x-rapidapi-host": "mmo-games.p.rapidapi.com",
        "x-rapidapi-key": "8e65ae50e5mshfce3a1383ee5408p16661fjsnca8f01b4b471",
      },
    };

    try {
       const gameDetail = await axios.request(options);
       return gameDetail.data;
    } catch (error) {
       console.error(error);
    }
}

export const fetchGameNews = async () => {
   const options = {
      method: 'GET',
      url: 'https://mmo-games.p.rapidapi.com/latestnews',
      headers: {
        'x-rapidapi-host': 'mmo-games.p.rapidapi.com',
        'x-rapidapi-key': '8e65ae50e5mshfce3a1383ee5408p16661fjsnca8f01b4b471'
      }
    };

   try {
      const news = await axios.request(options);
      return news.data;
   } catch (error) {
      console.error(error);
   }
}
 