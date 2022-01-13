import React, {useEffect, useRef, useState} from 'react';
import CardProduct from "../../Card/CardProduct/CardProduct";
import {oneCategory, test} from "../../../interfaces/page.interface";
import cn from 'classnames';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import styles from "./Slider.module.css";
import Container from "../../Container/Container";
import useWindowDimensions from "../../../helpers/useWindowDimensions";
import SwiperCore, {
    Navigation, Pagination
} from 'swiper';


const Slider = ({data}: sliderProps) => {

    const [slides, setSlides] = useState<testWithPath[]>([]);
    const slidesArticles: string[] = ['GH23', 'M95', 'GH18', 'V09.2'];

    useEffect(() => {
        const testsWithPath: testWithPath[] = [];

        data.forEach((category: oneCategory) => {
            for (let i = 0; i < category.tests.length; i++) {
                const item = {
                    'category_path': category.category_path
                };
                testsWithPath.push(Object.assign(item, category.tests[i]));
            }
        });

        const testsInSlider: testWithPath[] = [];
        testsWithPath.forEach(test => {
            if (slidesArticles.includes(test['article'])) {
                testsInSlider.push(test);
            }
        });

        setSlides(testsInSlider);

    }, [data]);

    const {width} = useWindowDimensions();
    const countSlider = width && width > 1430 ? 2 : 1 ;

    // install Swiper modules
    SwiperCore.use([Navigation]);
    SwiperCore.use([Pagination]);


    const [prevEl, setPrevEl] = useState<HTMLElement | null>(null);
    const [nextEl, setNextEl] = useState<HTMLElement | null>(null);

    return (
        <section className={styles.slider}>

                    <div className={cn(styles.slider )}>
                        <Swiper
                            spaceBetween={40}
                            slidesPerView={countSlider}
                            //slidesPerGroup={2}
                            className={styles.mySwiper}
                            navigation={{ prevEl, nextEl }}
                            pagination={true}
                            loop={true}

                        >
                            <div ref={(node) => setPrevEl(node)} className={styles.arrowPrev}></div>
                            {
                                slides.map((item, index) => {
                                    return (
                                        <SwiperSlide key={index}>
                                            <div className={cn(styles.slide)} >
                                                <CardProduct
                                                    size={'m'}
                                                    test={item}
                                                    category={item.category_path}
                                                    className={'slide'}
                                                />
                                            </div>
                                        </SwiperSlide>
                                    );
                                })
                            }

                            <div ref={(node) => setNextEl(node)} className={styles.arrowNext}></div>
                        </Swiper>
                    </div>

        </section>
    );
};

export default Slider;

interface sliderProps {
    data: oneCategory[]
}

interface testWithPath extends test{
    category_path: string;
}

