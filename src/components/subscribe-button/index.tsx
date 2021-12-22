import styles from './styles.module.scss'

type SubscribeButtonProps = {
  priceId: string
}

export const SubscribeButton = ({priceId}: SubscribeButtonProps) => (
  <button
    className={styles.wrapper}
    type="button"
  >
    Subscribe now
  </button>
)
