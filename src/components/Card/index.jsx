/* 
Composant Card
Création d'une carte cliquable comportant un titre et une url de redirection 
Props:
title : titre affiché en bas de la carte
url : redirection de la carte apres un clic
cover: photo vignette de la carte
*/

import { Link } from 'react-router-dom'
import './card.css'

function Card({title, url, cover, id}) {
   
    return (
        <Link className='nav-accueil' to={url}>
            <div className='card'>
                <img className='card-img' src={cover} alt={`logement ${id}`}/>
                <span className="card-title">
                    {title}
                </span>
            </div>
        </Link>
        
    )
}

export default Card
