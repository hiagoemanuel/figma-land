import { useState } from 'react'

import './style.scss'

const galleryPath = [
    { path: "/assets/gallery-images/drone.jpg", seeOnMobile: true },
    { path: "/assets/gallery-images/tablet.jpg", seeOnMobile: true },
    { path: "/assets/gallery-images/meeting.jpg", seeOnMobile: true },
    { path: "/assets/gallery-images/setup.jpg", seeOnMobile: true },
    { path: "/assets/gallery-images/programming.jpg", seeOnMobile: false },
    { path: "/assets/gallery-images/laptop.jpg", seeOnMobile: false },
    { path: "/assets/gallery-images/camera.jpg", seeOnMobile: false }
]

export const Gallery = () => {
    const [galleryPhoto, setGalleryPhoto] = useState(galleryPath)

    const showMore = () => {
        setGalleryPhoto(galleryPath.filter(img => {
            img.seeOnMobile = true
            return img.seeOnMobile
        }))
    }


    return (
        <section className='gallery'>
            <div className='gallery__header'>
                <h1>Gallery</h1>
                <p>
                    We focus on ergonomics and meeting you where you work. It's only a keystroke away.
                </p>
            </div>
            <div className='gallery__photos'>
                <div className="photos__row">
                    {
                        galleryPhoto.map((image, index) => (
                            <img
                                className={image.seeOnMobile ? "photos__img img--fixed" : "photos__img"}
                                src={image.path}
                                alt="gallery-photo"
                                key={index}
                            />
                        ))
                    }
                </div>
            </div>
            <button className='gallery__link' onClick={showMore}><h3>See more</h3></button>
        </section>
    )
}