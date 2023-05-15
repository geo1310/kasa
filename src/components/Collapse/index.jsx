/* 
Composant Collapse
Création d'un collapse texte permettant d'afficher ou de masquer un texte
Props:
title= description du bloc texte
textList= contenu du bloc texte sous forme de liste
visible= useState visible de l'element concerne
setVisible= mise à jour du useState de l element concerne
*/

import vectorBas from '../../assets/icones/VectorBas.png';
import vectorHaut from '../../assets/icones/VectorHaut.png';
import '../../styles/collapse.css';

function Collapse({ title, textList, visible, setVisible }) {
    function ToggleText(visible, setVisible) {
        setVisible(!visible);
    }

    return (
        <div className="collapse">
            <div
                className="collapse-titre"
                onClick={() => ToggleText(visible, setVisible)}
            >
                {title}
                <button>
                    {!visible ? (
                        <img
                            className="collapse-icone"
                            alt="collapse-icone"
                            src={vectorBas}
                        ></img>
                    ) : (
                        <img
                            className="collapse-icone"
                            alt="collapse-icone"
                            src={vectorHaut}
                        ></img>
                    )}
                </button>
            </div>
            {visible && (
                <ul className="collapse-text">
                    {textList.map((item) => (
                        <li key={item.slice(1, 5) + item.slice(-1, -5)}>
                            {item}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}

export default Collapse;
