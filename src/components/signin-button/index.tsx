import {FaGithub as GithubIcon} from 'react-icons/fa'
import {FiX as CloseIcon} from 'react-icons/fi'

import styles from './styles.module.scss'

export const SignInButton = () => {
  const isUserLoggedIn = false

  return isUserLoggedIn ? (
    <button type="button" className={styles.wrapper}>
      <GithubIcon color="#04D361" />
      Gabe
      <CloseIcon color="#737388" />
    </button>

  ) : (
    <button type="button" className={styles.wrapper}>
      <GithubIcon color="#EBA417" />
      Sign in with Github
    </button>

  )
}

