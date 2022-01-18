import React from "react";
import { render, unmountComponentAtNode } from "react-dom";
import { screen } from '@testing-library/react'
import { MockedProvider } from '@apollo/client/testing';
import { act } from "react-dom/test-utils";
import { Icons } from "../components/Icons"
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
  
const menuIcons = mocks[0].result.data.icons;


it("renders user data", async () => {
  await act(async () => {
    render(
      <MockedProvider mocks={mocks} addTypename={false}>
        <Icons menuIcons={menuIcons} />
      </MockedProvider>, 
      container
    );
  });

  screen.debug()

  expect(
    container.querySelector("[id='ckxh6cluf0089c1jiyx6klpmj']").getAttribute("href")
  ).toEqual("https://github.com/megajon");

  expect(
    container.querySelector("[id='ckxh6dyqq0116c1jim4gelqvq']").getAttribute("href")
  ).toEqual("mailto:jonathan.seubert@megajon.com");

  expect(
    container.querySelector("[id='ckxh6esdu0143c1jifzicg7ko']").getAttribute("href")
  ).toEqual("https://megajon-web.s3.amazonaws.com/documents/JonathanSeubert_Resume.pdf");

  expect(
    container.querySelector("[id='ckxh6blco0062c1jiaokijggu']").getAttribute("href")
  ).toEqual("https://www.linkedin.com/in/jonathan-seubert");


});