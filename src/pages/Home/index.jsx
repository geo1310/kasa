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
                    <Card key={house.id} id={house.id} title={house.title}/>
                ))}
            </div>
        </div>
    )
}

export default Home
