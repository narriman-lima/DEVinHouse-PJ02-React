import { useGame } from "../../contexts/game/useGame";

export const Search = () => {
   const { setFilter } = useGame();

   return (
   <input
        onChange={(event) => {
         setFilter(event.target.value);
        }}
        type="text"
        placeholder="Digite o nome do jogo"
      />
   )
}