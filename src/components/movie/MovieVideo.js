import styles from './MovieVideo.module.css'

function MovieVideo({data}) {
    return (
        <div>
            <iframe
                title={data?.original_name || data?.original_title}
                className={styles.movie}
                src={`https://www.youtube.com/embed/${data?.videos?.results[0]?.key}`}
                frameBorder="0"></iframe>
        </div>
    )
}

export default MovieVideo