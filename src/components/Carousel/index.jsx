/* 
Composant Carousel
Création d'un carousel faisant défiler une liste d'images
Props:
pictures: liste d'images
*/

import React, { useState, useEffect } from 'react'
import '../../styles/Carousel.css'

function Carousel({pictures}) {
    const [currentImage, setCurrentImage] = useState(0)

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImage((prevImage) =>
                prevImage === pictures.length - 1 ? 0 : prevImage + 1
            )
        }, 3000)

        return () => clearInterval(interval)
    }, [pictures])

    return (
        <div className="carousel">
            {pictures.map((image, index) => (
                
                <div key={index}>
                    <img
                    src={image}
                    alt={`Slide ${index + 1}`}
                    className={
                        index === currentImage ? 'slide active' : 'slide'
                    }
                />
                </div>
                
            ))}
        </div>
    )
}
export default Carousel
