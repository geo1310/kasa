import React, { useState } from 'react'
import '../../styles/Apropos.css'
import Banner from '../../components/Banner'
import bannerPhoto from '../../assets/images/kalen-emsley-montagnes foret.webp'
import Collapse from '../../components/Collapse'

function Apropos() {
    document.querySelector('.nav-accueil') &&
        document.querySelector('.nav-accueil').classList.remove('active')
    document.querySelector('.nav-apropos') &&
        document.querySelector('.nav-apropos').classList.add('active')

    const [visibleFiabilite, setVisibleFiabilite] = useState(true)
    const [visibleRespect, setVisibleRespect] = useState(false)
    const [visibleService, setVisibleService] = useState(false)
    const [visibleSecurite, setVisibleSecurite] = useState(false)

    return (
        <div>
            <Banner img={bannerPhoto} text="A propos de Kasa" />
            <div className="apropos-global">
                <Collapse
                    titre="Fiabilite"
                    listeTexte={["Les annonces postées sur Kasa garantissent une fiabilité totale.Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes."]}
                    visible={visibleFiabilite}
                    setVisible={setVisibleFiabilite}
                />
                <Collapse
                    titre="Respect"
                    listeTexte={["La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme."]}
                    visible={visibleRespect}
                    setVisible={setVisibleRespect}
                />
                <Collapse
                    titre="Service"
                    listeTexte={["Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite.N'hésitez pas à nous contacter si vous avez la moindre question."]}
                    visible={visibleService}
                    setVisible={setVisibleService}
                />
                <Collapse
                    titre="Sécurité"
                    listeTexte={["La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs,chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes."]}
                    visible={visibleSecurite}
                    setVisible={setVisibleSecurite}
                />
            </div>
        </div>
    )
}

export default Apropos
