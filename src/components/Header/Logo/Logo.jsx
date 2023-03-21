import styles from '../Header.module.css'

export const Logo = () => {
    return (
        <div className='logoContainer'>
            <h1 className={styles.logoName}>Cybernetically Inc</h1>
            <div className={styles.logoTextContainer}>
            <p className={styles.logoText}>web application development</p>
            </div>
        </div>
    )
}