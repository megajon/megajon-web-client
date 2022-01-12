import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function Logos({ logos }) {
  return (
    <div className={styles.logosContainer}>
      {logos.map((logo) => (
        <div key={logo.id}>
          <Link href={logo.href}>
            <a target="_blank">
              <img src={logo.image_url} className={styles.logoImage} alt={logo.name} />
            </a>
          </Link>
        </div>
      ))}
    </div>
  )
}