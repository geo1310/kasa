/* 
Composant Banner
Création d'une banniere comportant une image plus un titre 
Props :
img : image de la banniere
title : titre centré sur la banniere
*/
import '../../styles/Banner.css'

function Banner({img, title}) {
    return (
        <div className="banner">
            <img className="banner-img" src={img} alt={img}></img>
            {title ? <h1 className="banner-text">{title}</h1> : null}
        </div>
    )
}

export default Banner
