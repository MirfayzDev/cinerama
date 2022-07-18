import {useEffect} from "react";
import useRequest from "../../hooks/use-request";

import {Link} from "react-router-dom";
import {Swiper, SwiperSlide} from "swiper/react";
import {Navigation, Autoplay} from "swiper";

import styles from './Slider.module.css'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/effect-cards'

const IMG_API = "https://image.tmdb.org/t/p/w1280"

function Slider() {
    const {sendRequest, data} = useRequest('discover/movie?sort_by=popularity.desc', '&page=1')

    useEffect(() => {
        sendRequest()
    }, [sendRequest])

    return (
        <Swiper
            modules={[Navigation, Autoplay]}
            spaceBetween={0}
            slidesPerView={1}
            speed={400}
            loop={true}
            touchRatio={1.5}
            autoplay={{delay: 5000}}
            effect={"cards"}
            className={styles.slider}
        >
            {
                data.map(el => <SwiperSlide
                    className={styles.slide}
                    key={el.id}>
                    <Link to={`/banner/${el.id}`}><img src={IMG_API + el.poster_path} alt="banner"/></Link>
                </SwiperSlide>)
            }
        </Swiper>
    )
}

export default Slider