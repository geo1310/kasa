import { useParams } from 'react-router-dom'
import { housingList } from '../../datas/housingList'
import Carousel from '../../components/Carousel'
import '../../styles/Logement.css'

function Logement(props) {
    document.querySelector('.nav-accueil') &&
        document.querySelector('.nav-accueil').classList.remove('active')
    document.querySelector('.nav-apropos') &&
        document.querySelector('.nav-apropos').classList.remove('active')

    const { id } = useParams()

    return (
        <div className="house-form">
            {housingList.map((house) => {
                if (house.id === id) {
                    return (
                        <div key={house.id} className="house-global">
                            <Carousel pictures={house.pictures} />
                            <div className="house-title">
                                <span>
                                    <h1>{house.title}</h1>
                                    <span className="house-location">
                                        {house.location}
                                    </span>
                                </span>
                                <div className="house-host">
                                    <span className="house-host-name">
                                        {house.host.name}
                                    </span>
                                    <img
                                        className="house-host-picture"
                                        alt={house.host.name}
                                        src={house.host.picture}
                                    ></img>
                                </div>
                            </div>
                        </div>
                    )
                }
                return null
            })}
        </div>
    )
}

export default Logement
