import styles from '../Footer.module.css'

export const AboutCompany = () => {
    return (
        <section className={styles.aboutCompany}>
        <h3 className={styles.footerH3}>О компании</h3>
        <p className={styles.footerP}>Партнёрская программа</p>
        <p className={styles.footerP}>Вакансии</p>
  </section>
    )
}