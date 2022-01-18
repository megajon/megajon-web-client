import Link from 'next/link'
import styles from '../styles/Home.module.css'

export function Logos({ logos }) {
    return (
        <div>
            <div className={styles.logosContainer}>
                {logos.map((logo) => (
                <div key={logo.id}>
                    <Link href={logo.href}>
                    <a id={"a-" + logo.id} target="_blank">
                        <img id={"img-" + logo.id} src={logo.image_url} className={styles.logoImage} alt={logo.name} />
                    </a>
                    </Link>
                </div>
                ))}
            </div>
        </div>
    )
}