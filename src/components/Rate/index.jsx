/* 
Composant Rate
Création d'une notation de 1 à 5 avec des etoiles
Props:
rating: note de 1 à 5
*/
import '../../styles/rate.css';

function Rate({ rating }) {
    /* création de la liste de notes pour l'affichage du rating*/
    const rateList = [
        [1, 0],
        [2, 0],
        [3, 0],
        [4, 0],
        [5, 0],
    ];
    for (let i = 0; i < rating; i++) {
        rateList[i][1] = 1;
    }

    return (
        <div className="rate">
            {rateList.map((rateNote, index) => {
                return rateNote[1] === 0 ? (
                    <i key={rateNote[0]} className="fa-solid fa-star"></i>
                ) : (
                    <i
                        key={rateNote[0] + 'active'}
                        className="fa-solid fa-star active"
                    ></i>
                );
            })}
        </div>
    );
}

export default Rate;
