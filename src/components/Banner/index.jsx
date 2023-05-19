import '../../styles/banner.css';

/**
 * @component Banner
 * @description  Génère une Banniere contenant une image et un titre optionnel centré sur l'image
 * @param {string} img source de l'image à afficher
 * @param {string} [title=""] titre de la banniere
 * @returns {JSX}
 */
function Banner({ img, title = '' }) {
    return (
        <div className="banner">
            <img className={'banner-img'} src={img} alt={img}></img>
            {title ? <h1 className="banner-text">{title}</h1> : null}
        </div>
    );
}

export default Banner;
