/* 
Composant Carousel
Création d'un carousel faisant défiler une liste d'images
Props:
pictures: liste d'images
*/

import React, { useState, useEffect } from 'react';
import '../../styles/Carousel.css';

function Carousel({ pictures}) {
    const [currentImage, setCurrentImage] = useState(0);
    const [isPaused, setIsPaused] = useState(false);
    const [buttonsClass, setButtonsClass] = useState('active');
    
    useEffect(() => {
        if (pictures.length === 1) {
            setButtonsClass('');
        }
        const interval = setInterval(() => {
            if (!isPaused) {
                setCurrentImage((prevImage) =>
                    prevImage === pictures.length - 1 ? 0 : prevImage + 1
                );
            }
        }, 4000);

        return () => clearInterval(interval);
    }, [pictures,isPaused]);

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

    /* mise en pause du carousel*/
    const mouseEnter= () => {
        setIsPaused(true)
    }
    const mouseLeave= () => {
        setIsPaused(false)
    }

    return (
        <div 
            className="carousel"
            onMouseEnter={mouseEnter}
            onMouseLeave={mouseLeave}
        >
            <div className="images-container">
                {pictures.map((image, index) => (
                    <div key={index}>
                        <img
                            src={image}
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
            <div className={`buttons-container ${buttonsClass}`}>
                <div className='previous' onClick={goToPrevious}>
                    <i className="fa-solid fa-chevron-left"></i>
                </div>
                <div className='next' onClick={goToNext}>
                    <i className="fa-solid fa-chevron-right"></i>
                </div>
            </div>
            <div className="indicators">
                {currentImage+1}/{pictures.length}
            </div>
        </div>
    );
}

export default Carousel;
