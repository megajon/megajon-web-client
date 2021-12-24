import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import { gql } from "@apollo/client";
import client from "../apollo-client";
import image from 'next/image';

export default function Home({ menuIcons, hero, logos })  {
  return (
    <div>
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
    </div>
  )
}

  export async function getStaticProps(context) {
    const { data } = await client.query({
      query: gql`
      query Icons {
        heroes {
          id
          name
          title
          image
        },
        icons {
          id
          name
          image_url
          href
        },
        logos {
          id
          name
          image_url
          href
        },
      }
      `,
    });

  const hero = data.heroes.slice();
  const menuIcons = data.icons.slice(0, 4);
  const logos = data.logos.slice(0, 12);

  return {
    props: {
    menuIcons,
    hero,
    logos,
    },
 };
}
