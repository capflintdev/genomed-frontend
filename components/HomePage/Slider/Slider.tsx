import React, {useEffect, useState} from 'react';
import CardProduct from "../../Card/CardProduct/CardProduct";
import {oneCategory} from "../../../interfaces/page.interface";
import cn from 'classnames';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import SwiperCore, {
    Pagination
} from 'swiper';
import styles from "./Slider.module.css";
import Container from "../../Container/Container";

SwiperCore.use([Pagination]);

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

    return (
        <section className={styles.slider}>
            <Container>
                    <div className={cn(styles.slider )}>
                        <Swiper
                            spaceBetween={40}
                            slidesPerView={2}
                            slidesPerGroup={2}
                            pagination={true}
                        >
                            {
                                slides.map((item, index) => {
                                    return (
                                        <SwiperSlide key={index}>
                                            <div className={cn(styles.slide)} >
                                                <CardProduct
                                                    size={'m'}
                                                    test={item}
                                                    category={item.category_path}
                                                />
                                            </div>
                                        </SwiperSlide>
                                    );
                                })
                            }
                        </Swiper>
                    </div>
            </Container>
        </section>
    );
};

export default Slider;

interface sliderProps {
    data: oneCategory[]
}

interface testWithPath {
    category_path: string;
    price_id: string;
    article: string;
    name: string;
    shortinfo: string;
    longinfo?: string;
    details: string;
    indications: string;
    preparation: string;
    methods: string;
    howto: string;
    results: string;
    price: string;
}

