import styles from './Section.module.css'

function Section({children}) {
    return (
        <section className={styles.container}>
            {children}
        </section>
    )
}

export default Section