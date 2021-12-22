import {FaGithub as GithubIcon} from 'react-icons/fa'
import {FiX as CloseIcon} from 'react-icons/fi'

import {signIn, signOut, useSession} from 'next-auth/react'

import styles from './styles.module.scss'

export const SignInButton = () => {
  const {data: session} = useSession()

  return session ? (
    <button
      type="button"
      className={styles.wrapper}
      onClick={() => signOut()}
    >
      <GithubIcon color="#04D361" />
      {session.user.name}
      <CloseIcon color="#737388" />
    </button>

  ) : (
    <button
      type="button"
      className={styles.wrapper}
      onClick={() => signIn('github')}
    >
      <GithubIcon color="#EBA417" />
      Sign in with Github
    </button>

  )
}

