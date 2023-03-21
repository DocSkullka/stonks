import styles from '../Main.module.css'

export const BackgroundLights = () => {
    return (
        <section className={styles.backgroundLight}>
            <div className={styles.redLight}></div>
            <div className={styles.redBall}></div>
            <div className={styles.redBallSecond}></div>
            <div className={styles.purpleLight}></div>
            <div className={styles.purpleBall}></div>
        </section>
    )
}