import '../../styles/Home.css';
import Banner from '../../components/Banner'
import bannerPhoto from '../../assets/mer cote.webp'


function Home() {
  
  return (
    <div>
        <Banner img={bannerPhoto} text='Chez vous, partout et ailleurs' />
        <div className='accueil'>Page d'Accueil</div>
    </div>
    
  );
}

export default Home;
