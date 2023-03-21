import styles from '../Footer.module.css'

export const Menu = () => {
    return (
        <section className={styles.menu}>
            <h3 className={styles.footerH3}>Меню</h3>
            <div className={styles.menuText}>
                <div className={styles.leftPart}>
                    <p className={styles.footerP}>Расчёт стоимости</p>
                    <p className={styles.footerP}>Услуги</p>
                    <p className={styles.footerP} id={styles.wrap}>Наши клиенты</p>
                </div>
                <div className={styles.rightPart}>
                    <p className={styles.footerP}>Кейсы</p>
                    <p className={styles.footerP}>Благодарственные письма</p>
                    <p className={styles.footerP}>Сертификаты</p>
                </div>
            </div>
        </section>
    )}