import '../../styles/Home.css'
import Banner from '../../components/Banner'
import bannerPhoto from '../../assets/images/mer cote.webp'

function Home() {
    document.querySelector('.nav-accueil') &&
        document.querySelector('.nav-accueil').classList.add('active')
    document.querySelector('.nav-apropos') &&
        document.querySelector('.nav-apropos').classList.remove('active')

    return (
        <div>
            <Banner img={bannerPhoto} text="Chez vous, partout et ailleurs" />
            <div className="accueil">Page d'Accueil</div>
        </div>
    )
}

export default Home
