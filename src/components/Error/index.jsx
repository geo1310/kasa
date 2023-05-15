/* 
Composant Error
Création d'un contenu erreur 404 en cas d'url incorrecte
*/

import { Link } from 'react-router-dom';
import '../../styles/error.css';

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
