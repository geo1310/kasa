import '../../styles/Footer.css';
import logo from '../../assets/logo.svg'

function Footer() {
  return (
    <footer className="footer">
		<img src={logo} alt='logo-kasa' className='logo-kasa-footer'></img>
	</footer>
  );
}

export default Footer;
