/* 
Composant Card
Création d'une carte cliquable comportant un titre et une url de redirection 
Props:
title : titre affiché en bas de la carte
url : redirection de la carte apres un clic
*/

import { Link } from 'react-router-dom'
import '../../styles/Card.css'

function Card({title,  url}) {
   
    return (
        <Link className='nav-accueil' to={url}>
            <div className='card'>
                <span className="card-title">
                    {title}
                </span>
            </div>
        </Link>
        
    )
}

export default Card
