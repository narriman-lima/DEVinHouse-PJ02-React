import { Link } from 'react-router-dom';

export const GameCard = (props) => { 
    const {title, thumbnail, short_description, plataform, id} = props.game;
    return (
        <article>
            <img src={thumbnail} alt="test"/>
            <div>
                <h3>{title}</h3>
                <span>{plataform}</span>
            </div>
            <p>{short_description}</p>
            <Link  to={`game/detail/${id}`}>Ver mais</Link>
        </article>
    )

}