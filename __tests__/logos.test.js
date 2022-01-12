import { gql } from "@apollo/client"
import client from "../apollo-client"
import { render, screen } from '@testing-library/react'
import Logos from '../components/Logos'

describe('Logos', () => {
  test('renders Logos component', () => {
    render(<Logos logos={logos} />);

    screen.debug();
  });
});


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