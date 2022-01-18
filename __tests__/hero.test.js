import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { screen } from '@testing-library/react'
import { MockedProvider } from '@apollo/client/testing';
import { act } from "react-dom/test-utils";
import { Hero } from "../components/Hero"
import { GET_STATIC_CONTENT } from '../utils/getStaticContent';
import { getStaticContentResponse } from '../__mocks__/getStaticContentResponse';

let container = null;
beforeEach(() => {
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

const mocks = [
    {
      request: {
          query: GET_STATIC_CONTENT,
      },
      result: getStaticContentResponse,
    }
];
  
const hero = mocks[0].result.data.heroes;


it("renders user data", async () => {
  await act(async () => {
    render(
      <MockedProvider mocks={mocks} addTypename={false}>
        <Hero hero={hero} />
      </MockedProvider>, 
      container
    );
  });

  screen.debug()

  expect(
    container.querySelector("[id='heroImage']").getAttribute("src")
  ).toEqual("https://megajon-web.s3.amazonaws.com/images/js.jpeg");

  expect(container.querySelector('[id="heroName"]').textContent).toEqual(
    "Jonathan C. Seubert"
  );

  expect(container.querySelector('[id="heroTitle"]').textContent).toEqual(
    "UI Designer & Software Developer"
  );

});