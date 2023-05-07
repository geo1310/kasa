import React, { useState } from 'react';
import '../../styles/Apropos.css';
import Banner from '../../components/Banner'
import bannerPhoto from '../../assets/kalen-emsley-montagnes foret.webp'
import vectorBas from '../../assets/VectorBas.png'
import vectorHaut from '../../assets/VectorHaut.png'


function Apropos() {

  const [visibleFiabilite, setVisibleFiabilite] = useState(false);
  const [visibleRespect, setVisibleRespect] = useState(false);
  const [visibleService, setVisibleService] = useState(false);
  const [visibleSecurite, setVisibleSecurite] = useState(false);

  function ToggleText(event, visible, setVisible){
    setVisible(!visible)
    const element = event.target
  
    if (element.src===vectorBas){
      element.src=vectorHaut
    }
    else{
      element.src=vectorBas
    } 
  };
  
  return (
    <div>
        <Banner img={bannerPhoto} text='Chez vous, partout et ailleurs'/>
        <div className='apropos-global'>
          <div className='apropos'>
            <h2 className='apropos-titre'>
              Fiabilité
              <button onClick={(event) => ToggleText(event, visibleFiabilite, setVisibleFiabilite)}><img className='apropos-icone' alt="apropos-icone" src={vectorBas}></img></button>
            </h2>
            {visibleFiabilite && <p className='apropos-text'>
              Les annonces postées sur Kasa garantissent une fiabilité totale. 
              Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  
              par nos équipes.
            </p>}
          </div>
          <div className='apropos'>
            <h2 className='apropos-titre'>
              Respect
              <button onClick={(event) => ToggleText(event, visibleRespect, setVisibleRespect)}><img className='apropos-icone' alt="apropos-icone" src={vectorBas}></img></button>
            </h2>
            {visibleRespect &&<p className='apropos-text'>
              La bienveillance fait partie des valeurs fondatrices de Kasa. 
              Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.
            </p>}
          </div>
          <div className='apropos'>
            <h2 className='apropos-titre'>
              Service
              <button onClick={(event) => ToggleText(event, visibleService, setVisibleService)}><img className='apropos-icone' alt="apropos-icone" src={vectorBas}></img></button>
            </h2>
            {visibleService &&<p className='apropos-text'>
              Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. 
              N'hésitez pas à nous contacter si vous avez la moindre question.
            </p>}
          </div>
          <div className='apropos'>
            <h2 className='apropos-titre'>
              Sécurité
              <button onClick={(event) => ToggleText(event, visibleSecurite, setVisibleSecurite)}><img className='apropos-icone' alt="apropos-icone" src={vectorBas}></img></button>
            </h2>
            {visibleSecurite &&<p className='apropos-text'>
              La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, 
              chaque logement correspond aux critères de sécurité établis par nos services. 
              En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier 
              que les standards sont bien respectés. Nous organisons également des ateliers sur 
              la sécurité domestique pour nos hôtes.
            </p>}
          </div>
        </div>
    </div> 
  );
}

export default Apropos;
