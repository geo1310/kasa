import '../../styles/rate.css';

/**
 * @component Rate
 * @description  Génère une cotation sur 5 etoiles
 * @param {string} rating Note de 1 à 5
 * @returns {JSX}
 */
function Rate({ rating }) {
    /* création de la liste de notes pour l'affichage du rating , 1 - etoile orange 0 - etoile grise*/
    const ratingInt = parseInt(rating);
    const rateList = [
        [1, 0],
        [2, 0],
        [3, 0],
        [4, 0],
        [5, 0],
    ];
    for (let i = 0; i < ratingInt; i++) {
        rateList[i][1] = 1;
    }

    return (
        <div className="rate">
            {rateList.map((rateNote) => {
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
