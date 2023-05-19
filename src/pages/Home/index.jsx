import Card from '../../components/Card';
import Banner from '../../components/Banner';
import bannerPhoto from '../../assets/images/mer cote.webp';
import { housingList } from '../../datas/housingList';
import '../../styles/home.css';

/**
 * @component Home
 * @description  Génère le contenu de la page d'accueil
 *
 * @returns {JSX}
 */
function Home() {
    return (
        <div className="house-global">
            <Banner img={bannerPhoto} title="Chez vous, partout et ailleurs" />
            <div className="cards">
                {housingList.map((house) => (
                    <Card
                        key={house.id}
                        id={house.id}
                        title={house.title}
                        url={'/logement/'}
                        cover={house.cover}
                    />
                ))}
            </div>
        </div>
    );
}

export default Home;
