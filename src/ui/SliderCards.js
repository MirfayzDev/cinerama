import {useRef} from "react";
import {Link} from "react-router-dom";
import {Swiper, SwiperSlide} from "swiper/react";
import {Navigation} from "swiper";

import Content from "../components/content/Content";

import styles from './SliderCards.module.css'
import 'swiper/css'
import {NextBtn, PrevBtn} from "../components/svgComponents/SvgIcons";

function SliderCards({array, title, category}) {
    const prevBtnRef = useRef(null)
    const nextBtnRef = useRef(null)

    return (
        <div className={styles.movieSlider}>
            <div className={styles.topPanel}>
                <h2 className={styles.title}>{title}</h2>
                <div className={styles.sliderNav}>
                    <button type="button" ref={prevBtnRef} className={styles.swiperButtonPrev}>
                        <PrevBtn />
                    </button>
                    <button type="button" ref={nextBtnRef} className={styles.swiperButtonNext}>
                        <NextBtn/>
                    </button>
                </div>
            </div>
            <Swiper
                modules={[Navigation]}
                navigation={{
                    prevEl: prevBtnRef.current,
                    nextEl: nextBtnRef.current
                }}
                className={styles.slider}
                wrapperTag={'ul'}
                speed={1000}
                slidesPerView={6}
                spaceBetween={15}
                slidesPerGroup={6}
                breakpoints={{
                    360: {
                        slidesPerView: 2,
                        slidesPerGroup: 2
                    },
                    576: {
                        slidesPerView: 3,
                        slidesPerGroup: 3
                    },
                    768: {
                        slidesPerView: 4,
                        slidesPerGroup: 4
                    },
                    992: {
                        slidesPerView: 6,
                        slidesPerGroup: 6
                    }
                }}
                onInit={(swiper) => {
                    swiper.params.navigation.prevEl = prevBtnRef.current
                    swiper.params.navigation.nextEl = nextBtnRef.current
                    swiper.navigation.init()
                    swiper.navigation.update()
                }}
            >
                {
                    array.map(el => <SwiperSlide tag={'li'} key={el.id}>
                        <Link to={`/${category}/${el.id}`}><Content el={el}/></Link>
                    </SwiperSlide>)
                }
            </Swiper>
        </div>
    )
}

export default SliderCards

