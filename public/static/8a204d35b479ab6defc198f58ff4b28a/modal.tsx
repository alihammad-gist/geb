import React, { useState } from 'react';
import { Image } from './types';
import image from '../image';
import * as styles from './styles.module.scss';
import Carousel, { ModalGateway, Modal } from 'react-images';

type props = {
    isOpen: boolean
    toggle: () => any

    images: Image[],
    currentImage: number
    setCurrentImage: (n: number) => any
}

export default ({ isOpen, toggle, images, currentImage, setCurrentImage }: props) => {
    return (
        <ModalGateway>
            {isOpen &&
                <Modal onClose={toggle}>
                    <Carousel
                        currentIndex={currentImage}
                        views={images.map((image => ({
                            source: image.file.childImageSharp.fluid.src,
                            caption: image.caption,
                            alt: image.caption
                        })))}
                    />
                </Modal>
            }
        </ModalGateway>
    );
}

    // const [animating, setAnimating] = useState(false);

    // const next = () => {
    //     if (animating) return;

    //     if (currentImage + 1 < images.length) {
    //         setCurrentImage(currentImage + 1);
    //     } else {
    //         setCurrentImage(0);
    //     }
    // }

    // const prev = () => {
    //     if (animating) return;

    //     if (currentImage - 1 >= 0) {
    //         setCurrentImage(currentImage - 1);
    //     } else {
    //         setCurrentImage(images.length - 1);
    //     }
    // }

    // const jump = (idx: number) => {
    //     if (animating) return;

    //     setCurrentImage(idx);
    // }

    // return (
    //     <Modal
    //         isOpen={isOpen}
    //         toggle={toggle}
    //         size='lg'
    //         className={styles.modal}
    //     >
    //         <Carousel
    //             activeIndex={currentImage}
    //             next={next}
    //             previous={prev}

    //         >
    //             <CarouselIndicators
    //                 items={images}
    //                 activeIndex={currentImage}
    //                 onClickHandler={jump}
    //             />
    //             {images.map((image) => {
    //                 return (
    //                     <CarouselItem
    //                         onExiting={() => setAnimating(true)}
    //                         onExited={() => setAnimating(false)}
    //                         key={image.file.publicURL}
    //                         style={{ backgroundColor: 'transparent !important' }}
    //                     >
    //                         <div
    //                             style={{
    //                                 height: '90vh',
    //                             }}
    //                         >
    //                             <img
    //                                 src={image.file.publicURL}
    //                                 className='img-fluid'
    //                             />
    //                         </div>
    //                         <CarouselCaption
    //                             captionText={image.caption}
    //                         />
    //                     </CarouselItem>
    //                 );
    //             })}

    //             <CarouselControl
    //                 direction='prev'
    //                 directionText='Previous'
    //                 onClickHandler={prev}
    //             />

    //             <CarouselControl
    //                 direction='next'
    //                 directionText='Next'
    //                 onClickHandler={next}
    //             />


    //         </Carousel>
    //     </Modal>
    // );