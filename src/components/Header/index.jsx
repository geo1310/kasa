import { NavLink } from 'react-router-dom';
import logo from '../../assets/logos/logo-kasa.svg';
import '../../styles/header.css';

/**
 * @component Header
 * @description  Génère le header des differents contenus
 * @returns {JSX}
 */
function Header() {
    return (
        <header className="header">
            <img
                src={logo}
                alt="logo kasa header"
                className="logo-kasa-header"
            ></img>
            <div className="nav">
                <ul>
                    {/* Utilisation du composant NavLink pour ajouter automatiquement la classe active*/}
                    <li>
                        <NavLink className="nav-accueil" to="/accueil">
                            Accueil
                        </NavLink>
                    </li>
                    <li>
                        <NavLink className="nav-apropos" to="/apropos">
                            A propos
                        </NavLink>
                    </li>
                </ul>
            </div>
        </header>
    );
}

export default Header;
