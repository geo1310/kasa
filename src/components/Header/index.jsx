import logo from '../../assets/logo.png';
import '../../styles/Header.css';

function Header() {
  return (
    <header className="header">
		<img src={logo} alt='logo-kasa' className='logo-kasa'></img>
		<div className="nav">   
			<ul>
				<li><a href="#about">Accueil</a></li>
				<li><a href="#gallery">A propos</a></li>
			</ul>
		</div>
	</header>
  );
}

export default Header;
