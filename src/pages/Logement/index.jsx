import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { housingList } from '../../datas/housingList';
import Carousel from '../../components/Carousel';
import Collapse from '../../components/Collapse';
import Tags from '../../components/Tags';
import Rate from '../../components/Rate';
import '../../styles/Logement.css';

function Logement() {
    const navigate = useNavigate();
    /* Déclaration des useState pour la visibilité des collapses*/
    const [visibleDescription, setVisibleDescription] = useState(false);
    const [visibleEquipements, setVisibleEquipements] = useState(false);

    /* Récupération de l'element avec l'id en parametre*/
    const { id } = useParams(); // recuperation de l 'id dans l'url
    const hebergement = housingList.find((element) => element.id === id); // recuperation de l'element id dans les datas

    // cas ou le parametre de l'url n'est pas correct ou que l'id n'est pas trouvé
    useEffect(() => {
        if (!hebergement) {
            navigate('/error');
        }
    }, [hebergement, navigate]);

    if (hebergement) {
        return (
            <div key={hebergement.id} className="house-global">
                <Carousel pictures={hebergement.pictures} />
                <div className="house-blocs">
                    <div className="house-bloc1">
                        <div className="house-title">
                            <h1>{hebergement.title}</h1>
                            <span className="house-location">
                                {hebergement.location}
                            </span>
                        </div>
                        <Tags tags={hebergement.tags} />
                    </div>
                    <div className="house-bloc2">
                        <div className="house-host">
                            <span className="house-host-name">
                                {hebergement.host.name}
                            </span>
                            <img
                                className="house-host-picture"
                                alt={hebergement.host.name}
                                src={hebergement.host.picture}
                            ></img>
                        </div>
                        <Rate rating={hebergement.rating} />
                    </div>
                </div>

                <div className="house-collapse">
                    <Collapse
                        title="Description"
                        textList={hebergement.description.split()}
                        visible={visibleDescription}
                        setVisible={setVisibleDescription}
                    />
                    <Collapse
                        title="Equipements"
                        textList={hebergement.equipments}
                        visible={visibleEquipements}
                        setVisible={setVisibleEquipements}
                    />
                </div>
            </div>
        );
    } else {
        return null;
    }
}

export default Logement;
