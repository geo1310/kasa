import vectorBas from '../../assets/icones/VectorBas.png';
import vectorHaut from '../../assets/icones/VectorHaut.png';
import '../../styles/collapse.css';

/**
 * @component Collapse
 * @description  Génère un collapse permettant d'afficher ou de masquer un texte en cliquant sur son bandeau titre
 * @param {String} title titre du collapse
 * @param {Array} textList texte à afficher sous forme de liste
 * @param {Boolean} visible etat de visibilite useState
 * @param {Function} setVisible changement d'etat de visibilite dans le useState
 * @returns {JSX}
 */
function Collapse({ title, textList, visible, setVisible }) {
    /**
     * @function ToggleText
     * @description change l'etat de visibilité apres un clic sur le bandeau titre du collapse
     * @param {boolean} visible etat de visibilite du contenu concerné
     * @param {Function} setVisible changement d'etat de visibilite du contenu concerné
     */
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
                        <li key={item.slice(1, 5) + item.slice(-5)}>{item}</li>
                    ))}
                </ul>
            )}
        </div>
    );
}

export default Collapse;
