import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { housingList } from '../../datas/housingList';
import Carousel from '../../components/Carousel';
import Collapse from '../../components/Collapse';
import Error from '../../components/Error';
import Tags from '../../components/Tags';
import Rate from '../../components/Rate';
import '../../styles/Logement.css';

function Logement() {
    /* Déclaration des useState pour la visibilité des collapses*/
    const [visibleDescription, setVisibleDescription] = useState(true);
    const [visibleEquipements, setVisibleEquipements] = useState(true);

    /* Récupération de l'element avec l'id en parametre*/
    const { id } = useParams();
    const hebergement = housingList.find((element) => element.id === id);

    if (hebergement) {
        return (
            <div key={hebergement.id} className="house-global">
                <Carousel pictures={hebergement.pictures} id={id} />
                <div className="house-title">
                    <div>
                        <h1>{hebergement.title}</h1>
                        <span className="house-location">
                            {hebergement.location}
                        </span>
                    </div>
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
                </div>
                <div className="house-tags-rating">
                    <Tags tags={hebergement.tags} />
                    <Rate rating={hebergement.rating} />
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
        return <Error />;
    }
}

export default Logement;
