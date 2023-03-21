import styles from '../Header.module.css'

export const Navigation = () => {
    return (
        <nav className={styles.navigation}>
        <ul>
          <li>Услуги</li>
          <li>Виджеты</li>
          <li>Интеграции</li>
          <li>Кейсы</li>
          <li id="sertification">Сертификаты</li>
        </ul>
      </nav>
    )
}