import { Link } from 'react-router-dom'
import logo from '../../assets/logos/logo-kasa.svg'
import '../../styles/Header.css'

function Header() {
<<<<<<< HEAD
  return (
    <header className="header">
		<img src={logo} alt='logo kasa header' className='logo-kasa-header'></img>
		<div className="nav">   
			<ul>
				<li><Link className='nav-accueil active' to="/">Accueil</Link></li>
				<li><Link className='nav-apropos' to="/apropos">A propos</Link></li>
			</ul>
		</div>
	</header>
  );
=======
    return (
        <header className="header">
            <img
                src={logo}
                alt="logo kasa header"
                className="logo-kasa-header"
            ></img>
            <div className="nav">
                <ul>
                    <li>
                        <Link className="nav-accueil" to="/">
                            Accueil
                        </Link>
                    </li>
                    <li>
                        <Link className="nav-apropos" to="/apropos">
                            A propos
                        </Link>
                    </li>
                </ul>
            </div>
        </header>
    )
>>>>>>> 8606e72c5202bff25acea6e5f124ae3ae5bfd521
}

export default Header
