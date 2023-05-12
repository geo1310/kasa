/* 
Composant Carousel
Création d'un carousel faisant défiler une liste d'images
Props:
pictures: liste d'images
*/

import React, { useState, useEffect } from 'react'
import '../../styles/Carousel.css'

function Carousel({ pictures }) {
    const [currentImage, setCurrentImage] = useState(0)
    const [buttonsClass, setButtonsClass] = useState('active')

    useEffect(() => {
        if (pictures.length === 1) {
            setButtonsClass('')
        }
        const interval = setInterval(() => {
            setCurrentImage((prevImage) =>
                prevImage === pictures.length - 1 ? 0 : prevImage + 1
            )
        }, 5000)

        return () => clearInterval(interval)
    }, [pictures])

    const goToPrevious = () => {
        setCurrentImage((prevImage) =>
            prevImage === 0 ? pictures.length - 1 : prevImage - 1
        )
    }

    const goToNext = () => {
        setCurrentImage((prevImage) =>
            prevImage === pictures.length - 1 ? 0 : prevImage + 1
        )
    }

    return (
        <div className="carousel">
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
                <div onClick={goToPrevious}>
                    <i className="fa-solid fa-chevron-left"></i>
                </div>
                <div onClick={goToNext}>
                    <i className="fa-solid fa-chevron-right"></i>
                </div>
            </div>
        </div>
    )
}

export default Carousel
