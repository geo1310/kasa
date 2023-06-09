import React, { useState } from 'react';
import Banner from '../../components/Banner';
import Collapse from '../../components/Collapse';
import bannerPhoto from '../../assets/images/kalen-emsley-montagnes foret.webp';
import '../../styles/apropos.css';

/**
 * @component Apropos
 * @description  Génère le contenu de la page apropos
 *
 * @returns {JSX}
 */
function Apropos() {
    /* Déclaration des useState pour la visibilité des collapses*/
    const [visibleFiabilite, setVisibleFiabilite] = useState(false);
    const [visibleRespect, setVisibleRespect] = useState(false);
    const [visibleService, setVisibleService] = useState(false);
    const [visibleSecurite, setVisibleSecurite] = useState(false);

    return (
        <div>
            <Banner img={bannerPhoto} />
            <div className="apropos-global">
                <Collapse
                    title="Fiabilite"
                    textList={[
                        'Les annonces postées sur Kasa garantissent une fiabilité totale.Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes.',
                    ]}
                    visible={visibleFiabilite}
                    setVisible={setVisibleFiabilite}
                />
                <Collapse
                    title="Respect"
                    textList={[
                        'La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.',
                    ]}
                    visible={visibleRespect}
                    setVisible={setVisibleRespect}
                />
                <Collapse
                    title="Service"
                    textList={[
                        "Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite.N'hésitez pas à nous contacter si vous avez la moindre question.",
                    ]}
                    visible={visibleService}
                    setVisible={setVisibleService}
                />
                <Collapse
                    title="Sécurité"
                    textList={[
                        "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs,chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.",
                    ]}
                    visible={visibleSecurite}
                    setVisible={setVisibleSecurite}
                />
            </div>
        </div>
    );
}

export default Apropos;
