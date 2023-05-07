import logo from '../../assets/logo-kasa.svg';
import '../../styles/Header.css';

function Header() {
  return (
    <header className="header">
		<img src={logo} alt='logo kasa header' className='logo-kasa-header'></img>
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
