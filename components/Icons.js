import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function Icons({ menuIcons }) {
   return (
    <div className={styles.iconsContainer}>
      {menuIcons.map((icon) => (
        <div key={icon.id}>
          <Link href={icon.href}>
            <a target="_blank">
              <img src={icon.image_url} className={styles.socialIcon} />
            </a>
          </Link>
        </div>
      ))}
    </div>
  )
}