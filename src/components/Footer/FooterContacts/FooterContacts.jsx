import styles from '../Footer.module.css'
import telegram from '../../../assets/telegram.svg'
import phone from '../../../assets/phone.svg'
import viber from '../../../assets/viber.svg'

export const FooterContacts = () => {
    return(
        <section className={styles.footerContacts}>
            <h3 className={styles.footerH3} id={styles.contact}>Контакты</h3>
            <p className={styles.footerContact}>+7 555 555-55-55</p>
            <div className={styles.footerImg}>
                <div>
                    <img src={telegram} alt='telegram' />
                </div>
                <div>
                    <img src={phone} alt='phone' />
                </div>
                <div>
                    <img src={viber} alt='viber' />
                </div>
            </div>
            <p className={styles.footerContact}>Казахстан, Павлодар, Улица Пушкина, д. Колотушкина</p>
        </section>
    )
}