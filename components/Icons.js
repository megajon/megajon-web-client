import Link from 'next/link'
import styles from '../styles/Home.module.css'

export function Icons({ menuIcons }) {
    return (
        <div>
            <div className={styles.iconsContainer}>
                {menuIcons.map((icon) => (
                    <div key={icon.id}>
                        <Link href={icon.href}>
                            <a id={icon.id} target="_blank">
                                <img src={icon.image_url} className={styles.socialIcon} />
                            </a>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    )
}