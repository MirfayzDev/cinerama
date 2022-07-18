import {Fragment} from "react";

import styles from "./Content.module.css";
import {PlayIcon} from "../svgComponents/SvgIcons";

const IMG_API = 'https://image.tmdb.org/t/p/w1280'

function Content({el}) {
    return (
        <Fragment>
            <div className={styles.card}>
                <div>
                    <div className={styles.imageContainer}>
                        <div>
                            <span style={{backgroundImage: `url(${IMG_API}${el.poster_path})`}}>
                                <div className={styles.overlay}></div>
                            </span>
                            <span
                                style={{backgroundImage: `url(${IMG_API}${el.poster_path})` || '../../assets/movie.jpg'}}>
                                <div className={styles.overlay}></div>
                            </span>
                        </div>
                        <a href="/" className={styles.imageWrapper}>
                            <img className={styles.image} src={`${IMG_API}${el.poster_path}`} alt={el.original_title}/>
                        </a>
                    </div>
                </div>
                <div className={styles.overlay}>
                    <PlayIcon />
                </div>
            </div>
            <div className={styles.cardDescription}>
                <h3 className={styles.name}>{el?.original_title || el?.name}</h3>
                <span>{new Date(el?.first_air_date || el?.release_date).getFullYear() || ''}</span>
            </div>
        </Fragment>
    )
}

export default Content