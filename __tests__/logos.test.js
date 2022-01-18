import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { screen } from '@testing-library/react'
import { MockedProvider } from '@apollo/client/testing';
import { act } from "react-dom/test-utils";
import { Logos } from "../components/Logos";
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
  
const logos = mocks[0].result.data.logos;


it("renders user data", async () => {
  await act(async () => {
    render(
      <MockedProvider mocks={mocks} addTypename={false}>
        <Logos logos={logos} />
      </MockedProvider>, 
      container
    );
  });

  screen.debug()

  expect(
    container.querySelector("[id='a-ckxe3a5ia00669yji42x6usef']").getAttribute("href")
  ).toEqual("https://preview.uxpin.com/784b38c3bd201efb686f5bf1c427075b290c7f62#/pages/145208063");

  expect(
    container.querySelector("[id='img-ckxe3a5ia00669yji42x6usef']").getAttribute("src")
  ).toEqual("https://megajon-web.s3.amazonaws.com/logos/UXPin_logo.png");

});