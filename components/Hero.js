import styles from '../styles/Home.module.css';


export default function Hero({ hero }) {
  return (
    <div className={styles.heroContainer}>
      {hero.map((h) => (
        <div key={h.id}>
          <img src={h.image} className={styles.heroImage} alt={h.name} />
          <h1 className={styles.heroName}>{h.name}</h1>
          <hr className={styles.herohr}></hr>
          <h2 className={styles.heroName}>{h.title}</h2>
        </div>
      ))}
    </div>
  )
}