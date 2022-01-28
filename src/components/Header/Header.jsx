
import { Link } from "react-router-dom";

export const Header = () => {
    return (
        <header>
            <h1 style={{textAlign: 'center'}}>DEVinMMO</h1>
            <nav>
                <ul>
                    <li><Link to={``}>Início</Link></li>
                    <li><Link to={`noticias`}>Notícias</Link></li>
                </ul>
            </nav>
        </header>
    )
}