import vectorBas from '../../assets/icones/VectorBas.png';
import vectorHaut from '../../assets/icones/VectorHaut.png';
import '../../styles/collapse.css';

/**
 * @component
 * @description  Génère un collapse permettant d'afficher ou de masquer un texte en cliquant sur son bandeau titre
 * @param {String} title titre du collapse
 * @param {Array} textList texte à afficher sous forme de liste
 * @param {Boolean} visible etat de visibilite 
 * @param {Function} setVisible changement d'etat de visibilite
 * @returns {JSX}
 */
function Collapse({ title, textList, visible, setVisible }) {

    // change l'etat de visibilité apres un clic sur le bandeau titre du collapse
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
                    {/* choix de l'icone du bandeau selon l'etat de visibilite */}
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
                        <li key={item.slice(1, 5) + item.slice(-5)}>
                            {item}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}

export default Collapse;
