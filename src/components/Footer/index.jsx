import '../../styles/footer.css';
import logo from '../../assets/logos/logo-kasa-white.png';

/**
 * @component Footer
 * @description  Génère le footer des differents contenus
 * @returns {JSX}
 */
function Footer() {
    return (
        <footer className="footer">
            <img
                src={logo}
                alt="logo kasa footer"
                className="logo-kasa-footer"
            ></img>
            <div className="text-footer">
                <i className="fa-regular fa-copyright"></i>
                2020 Kasa. All rights reserved
            </div>
        </footer>
    );
}

export default Footer;
