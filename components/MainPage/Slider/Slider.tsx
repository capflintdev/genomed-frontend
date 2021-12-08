import React, {useEffect} from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import styles from "./Slider.module.css";
import CardProduct from "../CardProduct/CardProduct";


const Slider = () => {

    const [emblaRef, emblaApi] = useEmblaCarousel({slidesToScroll: 2})
    useEffect(() => {
        if (emblaApi) {
            // Embla API is ready
        }
    }, [emblaApi])

    return (
        <section className={styles.slider}>
            <div className="container">
                <div className={styles.embla} >
                    <div className={styles.embla__viewport} ref={emblaRef}>
                        <div className={styles.embla__container}>
                            <div className={styles.embla__slide}><CardProduct/></div>
                            <div className={styles.embla__slide}><CardProduct/></div>
                            <div className={styles.embla__slide}><CardProduct/></div>
                            <div className={styles.embla__slide}><CardProduct/></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Slider;