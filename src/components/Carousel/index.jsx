import React, { useState, useEffect } from 'react'
import '../../styles/Carousel.css'

function Carousel(props) {
    const [currentImage, setCurrentImage] = useState(0)

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentImage((prevImage) =>
                prevImage === props.pictures.length - 1 ? 0 : prevImage + 1
            )
        }, 3000)

        return () => clearInterval(interval)
    }, [props.pictures])

    return (
        <div className="carousel">
            {props.pictures.map((image, index) => (
                <div key={index}>
                    <img
                    key={index}
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
