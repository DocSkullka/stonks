import styles from '../Header.module.css'
import telegram from '../../../assets/telegram.svg'
import phone from '../../../assets/phone.svg'
import viber from '../../../assets/viber.svg'

export const Contacts = () => {
    return (
        <section className={styles.contacts}>
            <div className={styles.telephoneNumber}> +7 555 555-55-55 </div>
            <div className={styles.socialMedia}>
                <div>
                    <img src={telegram} alt="telegram" />
                </div>
                <div>
                    <img src={phone} alt="phone" />
                </div>
                <div>
                    <img src={viber} alt="viber" />
                </div>
            </div>
      </section>
    )
}