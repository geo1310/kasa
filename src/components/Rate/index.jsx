/* 
Composant Rate
Création d'une notation de 1 à 5 avec des etoiles
Props:
rating: note de 1 à 5
*/
import { v4 as uuidv4 } from 'uuid'; //Génération de clés uniques
import './rate.css';

function Rate({ rating }) {
    const rateList = [0, 0, 0, 0, 0];
    for (let i = 0; i < rating; i++) {
        rateList[i] = 1;
    }

    return (
        <div className="rate">
            {rateList.map((rateNote, index) => {
                return rateNote === 0 ? (
                    <i key={uuidv4()} className="fa-solid fa-star"></i>
                ) : (
                    <i key={uuidv4()} className="fa-solid fa-star active"></i>
                );
            })}
        </div>
    );
}

export default Rate;
