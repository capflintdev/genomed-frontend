import React, {useEffect, useState} from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import styles from "./Slider.module.css";
import CardProduct from "../../Card/CardProduct/CardProduct";


const Slider = () => {

    const [emblaRef, emblaApi] = useEmblaCarousel({slidesToScroll: 2});

    useEffect(() => {
        if (emblaApi) {
            // Embla API is ready
        }
    }, [emblaApi])

    return (
        <section className={styles.slider}>
            <div className={styles.container}>
                <div className={styles.embla} >
                    <div className={styles.embla__viewport} ref={emblaRef}>
                        <div className={styles.embla__container}>
                            <div className={styles.embla__slide}><CardProduct size={'m'}/></div>
                            <div className={styles.embla__slide}><CardProduct size={'m'}/></div>
                            <div className={styles.embla__slide}><CardProduct size={'m'}/></div>
                            <div className={styles.embla__slide}><CardProduct size={'m'}/></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Slider;