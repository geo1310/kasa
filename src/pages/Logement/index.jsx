import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { housingList } from '../../datas/housingList'
import Carousel from '../../components/Carousel'
import Collapse from '../../components/Collapse'
import Error from '../../components/Error'
import Tags from '../../components/Tags'
import Rate from '../../components/Rate'
import '../../styles/Logement.css'

function Logement() {

    /* Déclaration des useState*/
    const [visibleDescription, setVisibleDescription] = useState(true)
    const [visibleEquipements, setVisibleEquipements] = useState(true)
    const [isId, setIsId] = useState(false)
    const [houseIndex, setHouseIndex] = useState()

    /* mise à jour du sous-lignement du menu de navigation*/
    document.querySelector('.nav-accueil') &&
        document.querySelector('.nav-accueil').classList.remove('active')
    document.querySelector('.nav-apropos') &&
        document.querySelector('.nav-apropos').classList.remove('active')
    
        /* Vérification du parametre id de l'url*/
        const { id } = useParams()
        useEffect(() => {
            housingList.forEach((house2) => {
                if (house2.id === id) {
                    setIsId(true)
                    setHouseIndex(housingList.indexOf(house2))
                }
            })
        })

    return (
        <div className="house">
            {isId ? 
                <div key={housingList[houseIndex].id} className="house-global">
                    <Carousel pictures={housingList[houseIndex].pictures} />
                    <div className="house-title">
                        <span>
                            <h1>{housingList[houseIndex].title}</h1>
                            <span className="house-location">
                                {housingList[houseIndex].location}
                            </span>
                        </span>
                        <div className="house-host">
                            <span className="house-host-name">
                                {housingList[houseIndex].host.name}
                            </span>
                            <img
                                className="house-host-picture"
                                alt={housingList[houseIndex].host.name}
                                src={housingList[houseIndex].host.picture}
                            ></img>
                        </div>
                    </div>
                    <div className="house-tags-rating">
                        <Tags tags={housingList[houseIndex].tags} />
                        <Rate rating={housingList[houseIndex].rating} />
                    </div>
                    <div className="house-collapse">
                        <Collapse
                            title="Description"
                            textList={housingList[
                                houseIndex
                            ].description.split()}
                            visible={visibleDescription}
                            setVisible={setVisibleDescription}
                        />
                        <Collapse
                            title="Equipements"
                            textList={housingList[houseIndex].equipments}
                            visible={visibleEquipements}
                            setVisible={setVisibleEquipements}
                        />
                    </div>
                </div>
             : 
               <Error />
            }
        </div>
    )
}

export default Logement
