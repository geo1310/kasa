import { Link } from 'react-router-dom';
import '../../styles/card.css';

/**
 * @component Card
 * @description  Génère une Carte cliquable contenant une image de couverture en fond et un titre et redirigant vers une url contenant un id en parametre
 * @param {string} title titre de la carte
 * @param {string} cover source de l'image de fond de la carte
 * @param {string} id id de la carte
 * @param {string} url path de redirection
 * @returns {JSX}
 */
function Card({ title, cover, id, url }) {
    return (
        <Link to={url + id}>
            <div className="card">
                <img className="card-img" src={cover} alt={`logement ${id}`} />
                <span className="card-title">{title}</span>
            </div>
        </Link>
    );
}

export default Card;
