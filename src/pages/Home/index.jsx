import Card from '../../components/Card'
import '../../styles/Home.css'
import Banner from '../../components/Banner'
import bannerPhoto from '../../assets/images/mer cote.webp'
import {housingList} from '../../datas/housingList'


function Home() {
    document.querySelector('.nav-accueil') &&
    document.querySelector('.nav-accueil').classList.add('active')
    document.querySelector('.nav-apropos') &&
    document.querySelector('.nav-apropos').classList.remove('active')

    return (
        <div>
            <Banner img={bannerPhoto} text="Chez vous, partout et ailleurs" />
            <div className="cards">
                {housingList.map((house) => (
                    <Card 
                        key={house.id} 
                        id={house.id} 
                        title={house.title} 
                        cover={house.cover} 
                        pictures={house.pictures} 
                        description={house.description}
                        host={house.host}
                        rating={house.rating}
                        location={house.location}
                        equipments={house.equipments}
                        tags={house.tags}
                    />
                ))}
            </div>
        </div>
    )
}

export default Home
