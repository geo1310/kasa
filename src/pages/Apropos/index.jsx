import '../../styles/Apropos.css';
import Banner from '../../components/Banner'
import bannerPhoto from '../../assets/kalen-emsley-montagnes foret.webp'


function Apropos() {
  
  return (
    <div>
        <Banner img={bannerPhoto} text='Chez vous, partout et ailleurs'/>
        <div className='apropos-global'>
          <div className='apropos'>
            <h2 className='apropos-titre'>
              Fiabilité
            </h2>
            <p className='apropos-text'>
              Les annonces postées sur Kasa garantissent une fiabilité totale. 
              Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  
              par nos équipes.
            </p>
          </div>
          <div className='apropos'>
            <h2 className='apropos-titre'>
              Respect
            </h2>
            <p className='apropos-text'>
              La bienveillance fait partie des valeurs fondatrices de Kasa. 
              Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.
            </p>
          </div>
          <div className='apropos'>
            <h2 className='apropos-titre'>
              Service
            </h2>
            <p className='apropos-text'>
              Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. 
              N'hésitez pas à nous contacter si vous avez la moindre question.
            </p>
          </div>
          <div className='apropos'>
            <h2 className='apropos-titre'>
              Sécurité
            </h2>
            <p className='apropos-text'>
              La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, 
              chaque logement correspond aux critères de sécurité établis par nos services. 
              En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier 
              que les standards sont bien respectés. Nous organisons également des ateliers sur 
              la sécurité domestique pour nos hôtes.
            </p>
          </div>
        </div>
    </div>
    
  );
}

export default Apropos;
