export const filterByText = (lista, termo) => {
   return lista.filter((game) => {
     return new RegExp(termo, 'ig').test(game.title);
   });
 };