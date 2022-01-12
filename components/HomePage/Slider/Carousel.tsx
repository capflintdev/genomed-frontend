import React, { useState } from "react";
import styles from "./Slider.module.css";
import Image from "next/image";

/* НАБРОСКИ СВОЕГО СЛАЙДЕРА, ПОКА НЕ РАБОТАЕТ */

export const CarouselItem = ({ children}:any) => {
    return (
        <div className="carousel-item">
            {children}
        </div>
    );
};

const Carousel = ({ children }:any) => {
    const [activeIndex, setActiveIndex] = useState(0);
    //const [paused, setPaused] = useState(false);

    const updateIndex = (newIndex:any) => {
        if (newIndex < 0) {
            newIndex = React.Children.count(children) - 1;
        } else if (newIndex >= React.Children.count(children)) {
            newIndex = 0;
        }

        setActiveIndex(newIndex);
    };

    // useEffect(() => {
    //   const interval = setInterval(() => {
    //     if (!paused) {
    //       updateIndex(activeIndex + 1);
    //     }
    //   }, 3000);

    //   return () => {
    //     if (interval) {
    //       clearInterval(interval);
    //     }
    //   };
    // });

    // const handlers = useSwipeable({
    //   onSwipedLeft: () => updateIndex(activeIndex + 1),
    //   onSwipedRight: () => updateIndex(activeIndex - 1)
    // });

    return (
        <div
            className={styles.carousel}
        >
            <div
                className={styles.inner}
                style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
                {React.Children.map(children, (child, index) => {
                    return React.cloneElement(child, { width: "100%" });
                })}
            </div>
            <div className={styles.indicators}>
                <button
                    onClick={() => {
                        updateIndex(activeIndex - 1);
                    }}
                >
                    Prev
                </button>
                {React.Children.map(children, (child, index) => {
                    return (
                        <button
                            className={`${index === activeIndex ? "active" : ""}`}
                            onClick={() => {
                                updateIndex(index);
                            }}
                        >
                            {index + 1}
                        </button>
                    );
                })}
                <button
                    onClick={() => {
                        updateIndex(activeIndex + 1);
                    }}
                >
                    Next
                </button>
            </div>
        </div>
    );
};

export default Carousel;
