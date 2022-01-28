import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

export const GameDetail = () => {
    const { id } = useParams();
    const [gameInfo, setgameInfo] = useState(null);

    useEffect(() => {
        const options = {
            method: 'GET',
            url: 'https://mmo-games.p.rapidapi.com/game',
            params: {id},
            headers: {
              'x-rapidapi-host': 'mmo-games.p.rapidapi.com',
              'x-rapidapi-key': '8e65ae50e5mshfce3a1383ee5408p16661fjsnca8f01b4b471'
            }
          };
          
          axios.request(options).then(function (response) {
              setgameInfo(response.data);
          }).catch(function (error) {
              console.error(error);
          });
    }, []);

    return(
        <>
            {gameInfo && (

                <section>
                    <h1>{gameInfo.title} ({gameInfo.release_date})</h1>
                    <div style={{display: 'flex'}}></div>
                    {gameInfo.screenshots.map((shot, index) => (
                        <img src={shot.image} key={index} alt="Image" width="200"/>
                    ))}
                    <div>
                        <h4>Genre</h4>
                        <p>{gameInfo.genre}</p>
                        <h4>Platform</h4>
                        <p>{gameInfo.platform}</p>
                    </div>
                    <h4>Descrição</h4>
                    <p dangerouslySetInnerHTML={{__html: gameInfo.description}}></p>
                    <div>
                        <h4>Requisitos do Sitema</h4>
                        <h5>Sistema Operacional</h5>
                        <p>{gameInfo.minimum_system_requirements.os}</p>
                        <h5>Processador</h5>
                        <p>{gameInfo.minimum_system_requirements.processor}</p>
                        <h5>Memória</h5>
                        <p>{gameInfo.minimum_system_requirements.memory}</p>
                        <h5>Gráficos</h5>
                        <p>{gameInfo.minimum_system_requirements.graphics}</p>
                        <h5>Espaço em Disco</h5>
                        <p>{gameInfo.minimum_system_requirements.storage}</p>
                    </div>
                </section>
            )}
        </>
    )
    
}