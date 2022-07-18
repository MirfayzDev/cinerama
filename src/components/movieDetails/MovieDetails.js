import styles from './MovieDetails.module.css'
import {PopularityIcon, VoteAverageIcon} from "../svgComponents/SvgIcons";

const IMG_API = 'https://image.tmdb.org/t/p/w1280'

function MovieDetails({data}) {
    return (
        <div className={styles.wrapper}>
            <img className={styles.poster} src={`${IMG_API}${data.poster_path}`} alt=""/>
            <div className={styles.details}>
                <h2 className={styles.title}>{data.original_title || data.original_name}</h2>
                <p className={styles.tagline}>-{data.tagline}</p>
                <p className={styles.overview}>{data.overview}</p>
                <div className={styles.movieRating}>
                    <div className={styles.rating}>
                        <VoteAverageIcon />
                        <span>{data.vote_average}</span>
                    </div>
                    <div className={styles.rating}>
                        <PopularityIcon />
                        <span>{Math.ceil(data.popularity)}</span>
                    </div>
                </div>
                <p className={styles.releasedYear}>Year: {new Date(data?.release_date || data?.first_air_date).getFullYear()}</p>
            </div>
        </div>
    )
}

export default MovieDetails