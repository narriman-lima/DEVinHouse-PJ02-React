import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import styled from 'styled-components';
import { GameForm } from "../Form/GameForm";
import { fetchGameDetail } from "../../services/games-service";

const CarouselWrapper = styled.div`
   width: 1050px;
   margin: 0 auto;
`
const GameInfoStyle = styled.div`
   width: 1050px;
   margin: 0 auto;
   h4, h5, p {
      padding-top: 10px;
   }
   div {
      border: solid 1px;
   }

`


export const GameDetail = () => {
  const { id } = useParams();
  const [gameInfo, setgameInfo] = useState(null);

  useEffect(() => {
   (async () => {
      const game = await fetchGameDetail(id);
      setgameInfo(game);
    })();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      {gameInfo && (
        <section>
          <h1>
            {gameInfo.title} ({gameInfo.release_date})
          </h1>
          <CarouselWrapper>
            <Carousel centerSlidePercentage={100} centerMode>
                  {gameInfo.screenshots.map((shot, index) => (
                     <div key={index}>
                        <img src={shot.image} alt="descrição da foto" />
                     </div>
                  ))}
            </Carousel>
          </CarouselWrapper>

          <GameInfoStyle>
            <div>
               <h4>Genre</h4>
               <p>{gameInfo.genre}</p>
               <h4>Platform</h4>
               <p>{gameInfo.platform}</p>
            </div>
            <h4>Descrição</h4>
            <p dangerouslySetInnerHTML={{ __html: gameInfo.description }}></p>
            <br></br>
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
          <GameForm id={id}/>
          </GameInfoStyle>
         
        </section>
      )}
      </>
  );
};

