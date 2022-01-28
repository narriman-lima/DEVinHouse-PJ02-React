export const NewsCard = (props) => {
   const {title, short_description, main_image, article_url} = props.notice;

   return (
       <>
           <article>
               <img src={main_image} alt="Game" />
               <h3>{title}</h3>
               <p>{short_description}</p>
               <a href={article_url}>Ver no site</a>
           </article>
       </>
   )
}