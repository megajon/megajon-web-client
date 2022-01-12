import { gql } from "@apollo/client"
import client from "../apollo-client"
import Icons from "../components/Icons"
import Hero from "../components/Hero"
import Logos from "../components/Logos"

export default function Home({ menuIcons, hero, logos })  {
  return (
    <div>
      <Icons menuIcons={menuIcons} />
      <Hero hero={hero} />
      <Logos logos={logos} />
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
