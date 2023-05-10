import { Link } from 'react-router-dom'
import '../../styles/Card.css'

function Card(props) {
   
    return (
        <Link className='nav-accueil' to={`/logement/:${props.id}`}>
            <div className='card'>
            </div>
        </Link>
        
    )
}

export default Card
