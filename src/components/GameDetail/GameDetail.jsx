import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import styled from 'styled-components';
import { GameForm } from "../Form/GameForm";
import { fetchGameDetail } from "../../services/games-service";

const GameDetailStyle = styled.section`
   padding: 24px 24px;
   color: ${({theme}) => theme.colors.secondary.main};

   h1 {
      margin-bottom: 20px;
      text-align: center;
      color: ${({theme}) => theme.colors.secondary.main};
   }
`

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
   
   .game__info {
      display: flex;
      gap: 24px;
      margin-bottom: 16px;
   }

   .game__requirements {
      margin: 0 auto;
      max-width: 700px;
      h4 {
         text-align: center;
         margin-bottom: 16px;
      }

      &-item {
         display: flex;
         border: 1px solid ${({theme}) => theme.colors.secondary.main};

         &:not(:last-of-type) {
            border-bottom: none;
         }

         h5 {
            width: 40%;
            padding: 10px 20px;
            border-right: 1px solid ${({theme}) => theme.colors.secondary.main};
            background-color: ${({theme}) => theme.colors.primary.light};
         }

         p {
            width: 60%;
            padding: 10px 20px;
            background-color: ${({theme}) => theme.colors.primary.main};
         }
      }
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
        <GameDetailStyle>
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
            <div className="game__info">
               <div>
                  <h4>Genre</h4>
                  <p>{gameInfo.genre}</p>
               </div>
               <div>
                  <h4>Platform</h4>
                  <p>{gameInfo.platform}</p>
               </div>
            </div>
            <h4>Descrição</h4>
            <p dangerouslySetInnerHTML={{ __html: gameInfo.description }}></p>
            <br></br>
            <div className="game__requirements">
               <h4>System requirements</h4>
               <div className="game__requirements-item">
                  <h5>OS</h5>
                  <p>{gameInfo.minimum_system_requirements.os}</p>
               </div>
               <div className="game__requirements-item">
                  <h5>Processor</h5>
                  <p>{gameInfo.minimum_system_requirements.processor}</p>
               </div>
               <div className="game__requirements-item">
                  <h5>Memory</h5>
                  <p>{gameInfo.minimum_system_requirements.memory}</p>
               </div>
               <div className="game__requirements-item">
                  <h5>Graphics</h5>
                  <p>{gameInfo.minimum_system_requirements.graphics}</p>
               </div>
               <div className="game__requirements-item">
                  <h5>Storage</h5>
                  <p>{gameInfo.minimum_system_requirements.storage}</p>
               </div>
            </div>
          <GameForm id={id}/>
          </GameInfoStyle>
        </GameDetailStyle>
      )}
      </>
  );
};

