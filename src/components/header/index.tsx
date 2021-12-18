import styles from './styles.module.scss'

export const Header = () => (
  <header className={styles.wrapper}>
    <section className={styles.content}>
      <img src="/images/logo.svg" alt="Logo ig.news" />

      <nav className={styles.navigation}>
        <a className={`${styles.navLink} ${styles.navLinkActive}`} href="#">Home</a>
        <a className={styles.navLink} href="#">Posts</a>
      </nav>
    </section>
  </header >
)
