import { Link } from 'react-router-dom';
import '../../styles/error.css';

/**
 * @component
 * @description  Génère un contenu pour une erreur 404 page non trouvée ou parametre incorrect
 * @returns {JSX}
 */
function Error404() {
    return (
        <div className="error-404">
            <h1 className="text-404">404</h1>
            <div className="text-oups">
                Oups! La page que vous demandez n'existe pas.
            </div>
            <div className="link-accueil">
                <Link to="/accueil">Retourner sur la page d’accueil</Link>
            </div>
        </div>
    );
}

export default Error404;
