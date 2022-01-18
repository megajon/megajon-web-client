import { gql } from "@apollo/client"
import client from "../apollo-client"

export const GET_STATIC_CONTENT = gql`
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
`

export const staticContent = async function getStaticProps(context) {
  const { data } = await client.query({
    query: GET_STATIC_CONTENT,
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