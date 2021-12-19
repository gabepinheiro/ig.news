import Head from "next/head";

import styles from './styles.module.scss'

export const HomeTemplate = () => (
  <>
    <Head>
      <title>Home | ig.news </title>
    </Head>

    <main className={styles.wrapper}>
      <section className={styles.content}>
        <p className={styles.welcome}>👋 Hey, welcome</p>
        <h1 className={styles.heading}>News about <br /> the <span>React</span> world.</h1>
        <p className={styles.paragraph}>
          Get acess to all the publications <br />
          <span>for $9.90 month</span>
        </p>
      </section>

      <img src="/images/avatar.svg" alt="Girl coding" />
    </main>
  </>
)
