import styles from '../Main.module.css'

export const Slogan = () => {
    return (
        <div className={styles.slogan}>
            <h1>Зарабатывайте <br/> больше с  <br/> <span className={styles.cyberneticallyGradient}> CYBERNETICALLY INC </span></h1>
            <p>Ведём отчётность акций за вас</p>
        </div>

    )
}