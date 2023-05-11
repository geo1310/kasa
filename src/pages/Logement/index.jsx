import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { housingList } from '../../datas/housingList'
import Carousel from '../../components/Carousel'
import Collapse from '../../components/Collapse'
import Error from '../../components/Error'
import Tags from '../../components/Tags'
import '../../styles/Logement.css'

function Logement() {
    const [visibleDescription, setVisibleDescription] = useState(true)
    const [visibleEquipements, setVisibleEquipements] = useState(true)
    const [isId, setIsId] = useState(false)
    const [houseIndex, setHouseIndex]= useState()
    document.querySelector('.nav-accueil') &&
    document.querySelector('.nav-accueil').classList.remove('active')
    document.querySelector('.nav-apropos') &&
    document.querySelector('.nav-apropos').classList.remove('active')
    const { id } = useParams()

    useEffect(() => {
        housingList.forEach((house) =>{
            if(house.id===id){
                setIsId(true)
                setHouseIndex(housingList.indexOf(house))
                const houseChoice = housingList[houseIndex] 
            }
        })
    },  )

    return (
        <div className="house">
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
                            <div className="house-tags">
                                <Tags tags={house.tags} />
                            </div>
                            <div className="house-collapse">
                                <Collapse
                                    titre="Description"
                                    listeTexte={house.description.split()}
                                    visible={visibleDescription}
                                    setVisible={setVisibleDescription}
                                />
                                <Collapse
                                    titre="Equipements"
                                    listeTexte={house.equipments}
                                    visible={visibleEquipements}
                                    setVisible={setVisibleEquipements}
                                />
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
