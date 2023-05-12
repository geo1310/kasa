/* 
Composant Header
Création d'un header
*/

import { Link } from 'react-router-dom'
import logo from '../../assets/logos/logo-kasa.svg'
import '../../styles/Header.css'

function Header() {

  return (
    <header className="header">
		<img src={logo} alt='logo kasa header' className='logo-kasa-header'></img>
		<div className="nav">   
			<ul>
				<li><Link className='nav-accueil' to="/accueil">Accueil</Link></li>
				<li><Link className='nav-apropos' to="/apropos">A propos</Link></li>
			</ul>
		</div>
	</header>
  );
}

export default Header
