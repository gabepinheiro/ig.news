import Head from "next/head";
import {SubscribeButton} from "../../components/subscribe-button";
import {HomeProps} from "../../pages";

import styles from './styles.module.scss'

type HomeTemplateProps = HomeProps

export const HomeTemplate = ({product}: HomeTemplateProps) => (
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
          <span>for {product.amount} month</span>
        </p>

        <div className={styles.buttonWrapper}>
          <SubscribeButton priceId={product.priceId} />
        </div>
      </section>

      <img src="/images/avatar.svg" alt="Girl coding" />
    </main>
  </>
)
