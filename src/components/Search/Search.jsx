import { useGame } from "../../contexts/game/useGame";
import styled from 'styled-components';

const CustomSearch = styled.input`
   font-size: 20px;
   line-height: 24px;
   width: 100%;
   border: none;
   padding: 4px;
   outline: none;
   color: ${({theme}) => theme.colors.secondary.main};
`;

export const Search = () => {
   const { setFilter } = useGame();

   return (
   <CustomSearch
        onChange={(event) => {
         setFilter(event.target.value);
        }}
        type="text"
        placeholder="Digite o nome do jogo"
      />
   )
}