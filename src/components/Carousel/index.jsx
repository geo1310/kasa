/* 
Composant Carousel
Création d'un carousel permettant de selectionner une liste d'images
Props:
pictures: liste d'images
*/

import React, { useState, useEffect } from 'react';
import '../../styles/carousel.css';

function Carousel({ pictures }) {
    const [currentImage, setCurrentImage] = useState(0);
    const [indicatorsClass, setButtonsClass] = useState('active');

    useEffect(() => {
        if (pictures.length === 1) {
            setButtonsClass('');
        }
    }, [pictures]);

    /* action sur le bouton precedent*/
    const goToPrevious = () => {
        setCurrentImage((prevImage) =>
            prevImage === 0 ? pictures.length - 1 : prevImage - 1
        );
    };

    /* action sur le bouton suivant*/
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
