import { useGame } from "../../contexts/game/useGame";
import styled from 'styled-components';

const CustomSearch = styled.input`
   font-size: 20px;
   line-height: 24px;
   width: 100%;
   padding: 4px;
   outline: none;
   color: ${({theme}) => theme.colors.primary.main};
   background-color: ${({theme}) => theme.colors.primary.search};
   border: 1px solid ${({theme}) => theme.colors.primary.main};
   border-radius: 5px;
`;

export const Search = () => {
   const { setFilter } = useGame();

   return (
   <CustomSearch
        onChange={(event) => {
         setFilter(event.target.value);
        }}
        type="text"
        placeholder="Search game"
      />
   )
}