import React, { useCallback, useState } from 'react';
import Gallery, { PhotoClickHandler } from 'react-photo-gallery';
import { GalleryCarousel } from '.';
import { Image } from './types';

type props = {
    images: Image[]
}

export default ({ images }: props) => {
    const [currentImage, setCurrentImage] = useState(0);
    const [isOpen, setIsOpen] = useState(false);

    const openImage = useCallback<PhotoClickHandler>((e, { photo, index }) => {
        setCurrentImage(index);
        toggleModal()
    }, []);

    const toggleModal = () => setIsOpen(!isOpen)

    return (
        <div>
            <Gallery
                photos={images.map((image) => ({
                    src: image.file.publicURL,
                    width: image.file.childImageSharp.fluid.aspectRatio,
                    height: 1,
                }))}
                onClick={openImage}
            />
            <GalleryCarousel
                toggle={toggleModal}
                isOpen={isOpen}
                images={images}

                currentImage={currentImage}
                setCurrentImage={setCurrentImage}
            />
        </div>
    );
}