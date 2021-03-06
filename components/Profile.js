import { useQuery } from "@apollo/client"
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import { GET_STATIC_CONTENT } from '../utils/getStaticContent';


// export const GET_STATIC_CONTENT = gql`
//     query Icons {
//         heroes {
//             id
//             name
//             title
//             image
//         },
//         icons {
//             id
//             name
//             image_url
//             href
//         },
//         logos {
//             id
//             name
//             image_url
//             href
//         },
//     }
// `;


export function Profile() {
    const { loading, error, data } = useQuery(GET_STATIC_CONTENT);

    if (loading) {
      return <h2><a href="#loading" aria-hidden="true" className="aal_anchor" id="loading"><svg aria-hidden="true" className="aal_svg" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fillRule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>Loading...</h2>;
    }
    
    if (error) {
      console.error(error);
      return null;
    }

    // const heroes = data.heroes.slice(0, 1);
    const hero = data.heroes.slice();
    const menuIcons = data.icons.slice(0, 4);
    const logos = data.logos.slice(0, 12);
    
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