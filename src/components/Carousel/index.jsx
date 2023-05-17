import React, { useState, useEffect } from 'react';
import '../../styles/carousel.css';

/**
 * @component Carousel
 * @description  Génère un carousel permettant de selectionner une liste d'images et de les faire défiler
 * @param {Array} pictures liste d'images à afficher
 * @returns {JSX}
 */
function Carousel({ pictures }) {
    const [currentImage, setCurrentImage] = useState(0); // image courante du carousel
    const [indicatorsClass, setIndicatorsClass] = useState('active'); // classe active pour les boutons et l'indicateur de page

    // si la liste d'images ne contient qu'une seule image on cache les boutons et indicateur en supprimant la classe active
    // utilisation e useEffect pour eviter l'erreur too many renders
    useEffect(() => {
        if (pictures.length === 1) {
            setIndicatorsClass('');
        }
    }, [pictures]);

    // détermine l'image precedente à afficher apres un clic sur previous
    // gestion des debuts et fins de liste
    const goToPrevious = () => {
        setCurrentImage((prevImage) =>
            prevImage === 0 ? pictures.length - 1 : prevImage - 1
        );
    };

    // détermine l'image suivante à afficher apres un clic sur next
    // gestion des debuts et fins de liste
    const goToNext = () => {
        setCurrentImage((prevImage) =>
            prevImage === pictures.length - 1 ? 0 : prevImage + 1
        );
    };

    return (
        <div className="carousel">
            <div className="images-container">
                {pictures.map((picture, index) => (
                    <div key={picture.slice(-10)}>
                        <img
                            src={picture}
                            alt={`Slide ${index + 1}`}
                            className={
                                index === currentImage
                                    ? 'slide active'
                                    : 'slide'
                            }
                        />
                    </div>
                ))}
            </div>
            <div className={`buttons-container ${indicatorsClass}`}>
                <div className="previous" onClick={goToPrevious}>
                    <i className="fa-solid fa-chevron-left"></i>
                </div>
                <div className="next" onClick={goToNext}>
                    <i className="fa-solid fa-chevron-right"></i>
                </div>
            </div>
            <div className={`indicators ${indicatorsClass}`}>
                {currentImage + 1}/{pictures.length}
            </div>
        </div>
    );
}

export default Carousel;
