import Link from 'next/link'
import styles from '../styles/Home.module.css'

export function Hero({ hero }) {
    return (
        <div>
            <div className={styles.heroContainer}>
                {hero.map((h) => (
                <div key={h.id}>
                    <img src={h.image} id='heroImage' className={styles.heroImage} alt={h.name} />
                    <h1 id='heroName' className={styles.heroName}>{h.name}</h1>
                    <hr className={styles.herohr}></hr>
                    <h2 id='heroTitle' className={styles.heroName}>{h.title}</h2>
                </div>
                ))}
            </div>
        </div>
    )
}